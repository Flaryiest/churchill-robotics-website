import requests

class Scraper:
    def __init__(self, url="https://instagram.com", seconds_per_request=5):
        self.url = url
        self.seconds_per_request = seconds_per_request

    @staticmethod
    def build_endpoint(path):
        return f"{self.url}/{path}"

    def scrape(self, path):
        endpoint = self.build_endpoint(path)
        response = requests.get(endpoint)
        if response.status_code == 200:
            return response.text
        else:
            response.raise_for_status()

if __name__ == "__main__":
    scraper = Scraper()
    try:
        data = scraper.scrape("3388s_spirit")
        print(data)
    except Exception as e:
        print(f"An error occurred: {e}")
        
