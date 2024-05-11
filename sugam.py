from pymongo import MongoClient
from PIL import Image
import requests
from io import BytesIO

# Replace the connection URI with your MongoDB Atlas connection string
# Example URI format: "mongodb+srv://username:password@clustername.mongodb.net/dbname"
# Replace 'username', 'password', 'clustername', and 'dbname' with your actual credentials and database details
# Make sure to whitelist your IP address in MongoDB Atlas settings
mongo_uri = "mongodb+srv://sugamf7:yunisha123@pyauto.hkt89gc.mongodb.net"
client = MongoClient(mongo_uri)

# Connect to your database and collection
db = client['test']  # Change 'your_database_name' to your actual database name
collection = db['count']  # Change 'your_collection_name' to your actual collection name

def get_collection_count():
    # Get the count of documents in the collection
    count = collection.count_documents({})
    print("Count of documents in the collection:", count)
    return count

def download_images_with_index_greater_than(count):
    # Get all documents with index greater than count
    documents = collection.find({"index": {"$gt": count}})
    for document in documents:
        image_url = document['image_url']
        name = document['name']
        # Download image from URL
        response = requests.get(image_url)
        if response.status_code == 200:
            # Save image with name
            image = Image.open(BytesIO(response.content))
            image.save(f'{name}.jpg')
            print(f"Image '{name}' downloaded and saved.")
        else:
            print(f"Failed to download image for '{name}'")

def main():
    count = get_collection_count()
    download_images_with_index_greater_than(count)

if __name__ == "__main__":
    main()
