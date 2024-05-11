from pymongo import MongoClient
from PIL import Image
import requests
from io import BytesIO
import os
def count_images_in_directory(directory):
    # List all files in the directory
    files = os.listdir(directory)
    # Filter image files (you can add more extensions if needed)
    image_files = [file for file in files if file.endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp'))]
    # Count the number of image files
    num_images = len(image_files)
    return num_images


# Replace the connection URI with your MongoDB Atlas connection string
# Example URI format: "mongodb+srv://username:password@clustername.mongodb.net/dbname"
# Replace 'username', 'password', 'clustername', and 'dbname' with your actual credentials and database details
# Make sure to whitelist your IP address in MongoDB Atlas settings
mongo_uri = "mongodb+srv://sugamf7:yunisha123@pyauto.hkt89gc.mongodb.net"
client = MongoClient(mongo_uri)

# Connect to your database and collection
db = client['test']  # Change 'your_database_name' to your actual database name
collection = db['count'] 
newcoll=db['images']
 # Change 'your_collection_name' to your actual collection name

def get_collection_count():
    # Get the count of documents in the collection
    count = collection.count_documents({})
    print("Count of documents in the collection:", count)
    return count
def download_images_with_index_greater_than(count):
    # Get all documents with index greater than count
    documents = newcoll.find({"index": {"$gt": count}, "owner": "sugamf7@gmail.com"})

    for document in documents:
        image_url = document['url']
        name = document['name']
        # Extract the extension from the URL
        extension = image_url.split('.')[-1]
        # Download image from URL
        response = requests.get(image_url)
        if response.status_code == 200:
            # Save image with name and extension in the "./images" folder
            image = Image.open(BytesIO(response.content))
            save_path = os.path.join("images", f"{name}.{extension}")
            image.save(save_path)
            print(f"Image '{name}.{extension}' downloaded and saved to './images/'.")
        else:
            print(f"Failed to download image for '{name}'")
def main():
    # Get all documents from the collection
    documents = collection.find({})
    for document in documents:
        # Print all properties of the document
        print("Document properties:")
        for key, value in document.items():
            print(f"{key}: {value}")
        print("\n")  # Add a newline for better readability
    # download_images_with_index_greater_than(count)

    total_images = count_images_in_directory('./images')
    download_images_with_index_greater_than(total_images)


        
if __name__ == "__main__":
    main()


# Directory containing the images
image_dir = "./images"


main()



