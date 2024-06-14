import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
cred = credentials.Certificate('reboot.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
# Set the API endpoint URL
url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=9.8&lon=38"

# Set your API key
api_key = "INVALID_API_KEY"

# Set the request headers
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key
}

# Make the GET request
response = requests.get(url, headers=headers)

# Check the response status code
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    weather = (data['properties']['timeseries'][0]['data']['instant']['details'])
    future = (data['properties']['timeseries'][0]['data']['next_12_hours']['summary']['symbol_code'])
    def create_document(collection, document_data):
      db = firestore.client()
      doc_ref = db.collection(collection).document()
      doc_ref.set(document_data)
      print('Document created with ID:', doc_ref.id)
    create_document('weather', {'Now':weather, 'next_12_hours':future})
else:
    # Handle the error
    print(f"Error: {response.status_code} - {response.text}")