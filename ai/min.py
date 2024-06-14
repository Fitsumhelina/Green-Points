import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from sklearn.tree import DecisionTreeClassifier
cred = credentials.Certificate('reboot.json')
firebase_admin.initialize_app(cred)
data = {}
db = firestore.client()
collection_ref = db.collection('farmers')
docs = collection_ref.stream()
for doc in docs:
    document_data = doc.to_dict()
    data = document_data
    print(data)
    nitro = data['nitrogen']
    phos = data['phosphorus']
    pot = data['potassium'] 
    temp = data['temperature']
    hum = data['humidity']
    ph = data['ph']
    rain_fall = data['rainfall']
    moisture = data['moisture']
    crop_type = data['crop_type']
    soil_type = data['soil_type']
    name = data['farmer_name']
    def suggest_crop(nitro,phos,pot,temp,hum,ph,rain_fall):
      crop_data = pd.read_csv('Crop_recommendation.csv')
      real = crop_data.fillna(0)
      x = real.drop(columns = ['label'])
      y = real['label']
      clf = DecisionTreeClassifier()
      clf = clf.fit(x,y)
      predictions = clf.predict([[nitro,phos,pot,temp,hum,ph,rain_fall,0,0]])
      return predictions[0]
    def suggest_fertilizer(temp,hum,moisture,nitro,pot,phos):
      fert_data = pd.read_csv('Fertilizer Prediction.csv')
      x1 = fert_data.drop(columns='Fertilizer Name')
      x2 = x1.drop(columns='Soil Type')
      x3 = x2.drop(columns = 'Crop Type')
      y1 = fert_data['Fertilizer Name']
      clf = DecisionTreeClassifier()
      clf = clf.fit(x3,y1)
      predictions = clf.predict([[temp,hum,moisture,nitro,pot,phos]])
      return predictions[0]
    def create_document(collection, document_data):
      db = firestore.client()
      doc_ref = db.collection(collection).document()
      doc_ref.set(document_data)
      print('Document created with ID:', doc_ref.id)
    crop = suggest_crop(nitro,phos,pot,temp,hum,ph,rain_fall)
    fertlizer = suggest_fertilizer(temp,hum,moisture,nitro,pot,phos)  
    create_document('product_suggested', {'name': name , 'crop': crop})
    create_document('Fertilizer_suggested', {'name': name, 'fertilizer': fertlizer})
