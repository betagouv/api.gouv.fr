#!/usr/bin/env python3
"""Add old_content column (GitHub file link) as second column to mapping CSVs."""

import csv
import io

GITHUB_BASE = "https://github.com/betagouv/api.gouv.fr/blob/master"


def github_link(old_url: str, data_path: str, url_prefix: str) -> str:
    slug = old_url.removeprefix(url_prefix)
    return f"{GITHUB_BASE}/{data_path}/{slug}.md"


def process_csv(input_path: str, url_prefix: str, data_path: str) -> None:
    with open(input_path, newline="") as f:
        rows = list(csv.reader(f))

    header = rows[0]
    new_header = [header[0], "old_content"] + header[1:]

    new_rows = [new_header]
    for row in rows[1:]:
        old_url = row[0]
        old_content = github_link(old_url, data_path, url_prefix) if old_url else ""
        new_rows.append([old_url, old_content] + row[1:])

    with open(input_path, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(new_rows)

    print(f"Updated {input_path}")


process_csv(
    "docs/api_mapping.csv",
    url_prefix="https://api.gouv.fr/les-api/",
    data_path="_data/api",
)
process_csv(
    "docs/guides_mapping.csv",
    url_prefix="https://api.gouv.fr/guides/",
    data_path="_data/guides",
)
