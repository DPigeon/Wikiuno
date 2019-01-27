import serial
import datetime
import pymongo
from pymongo import MongoClient

#use arduino to gather data from sensor 
# use python to read from the monitor and write the data in a txt file

#use the txt file in python or c++ for the website
print("Logging data... ")
print("Press ctrl+c to quit")
s = serial.Serial("COM3",9600)

i= 1
while True:
#while i>0:
    client = MongoClient("mongodb://Hackathon:helloyou@cluster0-shard-00-00-bpvrp.mongodb.net:27017,cluster0-shard-00-01-bpvrp.mongodb.net:27017,cluster0-shard-00-02-bpvrp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")
    
    db = client.hackathon
    collection = db.hackathon
    
    name = s.readline()
    print "nom : name"
    print name
    description = s.readline()
    print "description : description"
    print description
    output = s.readline()
    print "output : output"
    print output
    module = s.readline()
    print "module : module"
    print module
    

    post = {"name" : str(name),
            "description" : str(description),
            "output" : str(output),
            "module" : str(module),
            "date" : str(datetime.date.today())
            }    
    post_id = collection.insert_one(post).inserted_id
s.close()

