import requests
"""
need to add config.py to hide API Key. Actual API key is in Discord chat
"""
API_KEY = "Actual API key is in Discord chat"

BASE_URL = "https://api.congress.gov/v3/"

def get_bills_list(limit=5):
    url = f"{BASE_URL}bill"
    headers = {"X-Api-Key": API_KEY} 
    params = {
        "format": "json",
        "limit": limit
    }

    response = requests.get(url, headers=headers, params=params)
if __name__ == "__main__":
    get_bills_list()
