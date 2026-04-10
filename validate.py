import xml.etree.ElementTree as ET
import re

with open('/homecrc/users/adalberto.nobre/Documentos/divinity/banco_xml.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract the xml string
xml_str = re.search(r'const BANCO_XML_RAW = `([\s\S]*?)`;', js_content).group(1)

try:
    root = ET.fromstring(xml_str)
    print("XML parses perfectly!")
    print(f"Schools found: {len(root.findall('.//School'))}")
except ET.ParseError as e:
    print("XML PARSE ERROR:", e)
