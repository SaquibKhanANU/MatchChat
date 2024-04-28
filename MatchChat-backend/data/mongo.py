import pymongo
from pymongo import MongoClient
import json

client = MongoClient(connection_string)
db = client['MatchChat']
collection = db['Matches']

with open('C:\Coding\Official\MatchChat\MatchChat\MatchChat-backend\data\data.json', 'r') as file:
    data = json.load(file)

collection.insert_one(data)

print("Data inserted into MongoDB successfully.")
