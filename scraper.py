import requests
from bs4 import BeautifulSoup
import csv
import time

BASE_URL = "https://www.law.cornell.edu"
INDEX_URL = f"{BASE_URL}/wex/all/a.html"

headers = {"User-Agent": "Mozilla/5.0"}

# Index page
response = requests.get(INDEX_URL, headers=headers)
soup = BeautifulSoup(resp.text, "html.parser")

# Step 2: Extract all terms
terms = []
for link in soup.select("div.alphalist a"):
    title = link.get_text(strip=True)
    href = link.get("href")
    if href and not href.startswith("http"):
        href = BASE_URL + href
    terms.append((title, href))

print(f"Found {len(terms)} terms.")

# Step 3: Get term definitions
rows = []
for i, (title, url) in enumerate(terms, 1):
    print(f"[{i}/{len(terms)}] Gathering {title}...")
    term_resp = requests.get(url, headers=headers)
    term_resp.raise_for_status()
    term_soup = BeautifulSoup(term_resp.text, "html.parser")
    
    # Select all paragraphs inside the main body container
    paragraphs = term_soup.select("div.body p")
    definition_text = " ".join(p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True))
    
    rows.append({"term": title, "definition": definition_text})
    
    time.sleep(10)  # wait 10 seconds between requests to avoid server blocking
