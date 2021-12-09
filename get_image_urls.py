import json
from haralyzer import HarParser
import os


with open('source_har.har', 'r', encoding='utf-8') as f:
    har_parser = HarParser(json.loads(f.read()))

data = har_parser.har_data["entries"]
image_urls = []

for entry in data:
    if entry["response"]["content"]["mimeType"].find("image/") == 0 and entry["request"]["url"][-3:] == "jpg":
        image_urls.append(entry["request"]["url"])

image_urls = list(set(image_urls))
image_urls.sort()

f = open(os.path.basename(f"image_urls.txt"), "w")
f.write(f"downloadImage({image_urls})")
f.close()