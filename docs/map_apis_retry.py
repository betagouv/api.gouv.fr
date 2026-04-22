#!/usr/bin/env python3
"""Re-run mapping for not-found APIs with retry logic."""
import os, re, json, time, urllib.parse, urllib.request

API_DIR = "/home/caillou/Apps/datagouv/api.gouv.fr/_data/api"
MAPPING_CSV = "/home/caillou/Apps/datagouv/api.gouv.fr/docs/api_mapping.csv"

# Load existing mapping
existing = {}
with open(MAPPING_CSV) as f:
    next(f)  # skip header
    for line in f:
        line = line.strip()
        if not line: continue
        parts = line.split(',', 1)
        old_url = parts[0]
        new_url = parts[1] if len(parts) > 1 else ''
        existing[old_url] = new_url

# Find not-found slugs
not_found_slugs = [url.split('/les-api/')[1] for url, new in existing.items() if not new]
print(f"Re-processing {len(not_found_slugs)} not-found APIs...")

def fetch_with_retry(slug, title, retries=3):
    encoded_q = urllib.parse.quote(title)
    url = f"https://www.data.gouv.fr/api/2/dataservices/search/?q={encoded_q}"
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'api.gouv.fr-mapping/1.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            items = data.get('data', [])
            if items:
                return f"https://www.data.gouv.fr/dataservices/{items[0]['id']}"
            return ""
        except Exception as e:
            print(f"  attempt {attempt+1} failed for {slug}: {e}")
            if attempt < retries - 1:
                time.sleep(1)
    return ""

results = {}
for i, slug in enumerate(not_found_slugs):
    filepath = os.path.join(API_DIR, f"{slug}.md")
    with open(filepath, 'r') as f:
        content = f.read()
    m = re.search(r'^title:\s*(.+?)(?:\s*#.*)?$', content, re.MULTILINE)
    title = m.group(1).strip().strip('"\'') if m else slug

    new_url = fetch_with_retry(slug, title)
    status = "OK" if new_url else "NOT FOUND"
    print(f"[{i+1}/{len(not_found_slugs)}] {status}: {slug}")
    results[f"https://api.gouv.fr/les-api/{slug}"] = new_url
    time.sleep(0.1)

# Merge and rewrite CSV
for old_url, new_url in results.items():
    existing[old_url] = new_url

with open(MAPPING_CSV, 'w') as f:
    f.write("old_url,new_url\n")
    for old_url in sorted(existing):
        f.write(f"{old_url},{existing[old_url]}\n")

still_not_found = [(u, v) for u, v in existing.items() if not v]
print(f"\nDone! Still not found: {len(still_not_found)}")
for url, _ in sorted(still_not_found):
    print(f"  {url}")
