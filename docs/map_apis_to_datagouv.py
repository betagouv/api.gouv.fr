#!/usr/bin/env python3
import os, re, json, time, urllib.parse, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

API_DIR = "/home/caillou/Apps/datagouv/api.gouv.fr/_data/api"

def get_slug_title(filename):
    slug = filename[:-3]
    filepath = os.path.join(API_DIR, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    m = re.search(r'^title:\s*(.+?)(?:\s*#.*)?$', content, re.MULTILINE)
    title = m.group(1).strip().strip('"\'') if m else None
    return slug, title

def search_datagouv(slug, title):
    if not title:
        return slug, title, ""
    encoded_q = urllib.parse.quote(title)
    url = f"https://www.data.gouv.fr/api/2/dataservices/search/?q={encoded_q}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'api.gouv.fr-mapping/1.0'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        items = data.get('data', [])
        if items:
            first_id = items[0].get('id', '')
            return slug, title, f"https://www.data.gouv.fr/dataservices/{first_id}"
        return slug, title, ""
    except Exception as e:
        print(f"  ERROR {slug}: {e}", flush=True)
        return slug, title, ""

files = sorted([f for f in os.listdir(API_DIR) if f.endswith('.md') and not f.startswith('template')])
slugs_titles = [get_slug_title(f) for f in files]

print(f"Processing {len(slugs_titles)} APIs in parallel...", flush=True)

results = []
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = {executor.submit(search_datagouv, s, t): s for s, t in slugs_titles}
    done = 0
    for future in as_completed(futures):
        slug, title, new_url = future.result()
        done += 1
        status = "OK" if new_url else "NOT FOUND"
        print(f"[{done}/{len(slugs_titles)}] {status}: {slug}", flush=True)
        results.append((slug, title, new_url))

results.sort(key=lambda x: x[0])

not_found = [(s, t) for s, t, u in results if not u]

with open('/tmp/api_mapping.csv', 'w', encoding='utf-8') as f:
    f.write("old_url,new_url\n")
    for slug, title, new_url in results:
        f.write(f"https://api.gouv.fr/les-api/{slug},{new_url}\n")

with open('/tmp/api_not_found.txt', 'w', encoding='utf-8') as f:
    f.write(f"Not found ({len(not_found)}):\n")
    for slug, title in not_found:
        f.write(f"  - /les-api/{slug} ({title})\n")

print(f"\nDone! {len(results)-len(not_found)}/{len(results)} mapped", flush=True)
print(f"Not found: {len(not_found)}", flush=True)
