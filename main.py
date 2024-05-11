import cv2
import os
import time
import requests
from flask import Flask, render_template, Response
from model import FaceEncode
import pygame

# Initialize Flask app
app = Flask(__name__)

# Load face encoding model
sfr = FaceEncode()
sfr.load_encoding_images("images/")

# Initialize Pygame for sound
pygame.init()
sound_file = "sound.wav"
unknown_sound = pygame.mixer.Sound(sound_file)

# Directory to save detected images
detected_dir = "detected/"
if not os.path.exists(detected_dir):
    os.makedirs(detected_dir)

# ImgBB API Key
IMGBB_API_KEY = "dff3dba64b8b5dd6b1ed124b98ba6499"

def upload_to_imgbb(image_path):
    with open(image_path, "rb") as file:
        response = requests.post(
            "https://api.imgbb.com/1/upload",
            params={"key": IMGBB_API_KEY},
            files={"image": file}
        )
        result = response.json()
        return result.get("data", {}).get("url")

def gen_frames():
    cap = cv2.VideoCapture(0)
    snapshot_taken = False
    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            face_locations, face_names = sfr.detect_known_faces(frame)
            for face_loc, name in zip(face_locations, face_names):
                y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
                cv2.putText(frame, name, (x1, y1 - 10), cv2.FONT_HERSHEY_DUPLEX, 1, (0, 0, 200), 2)
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)
                if name == "Unknown" and not snapshot_taken:
                    print("Unknown person detected")
                    unknown_sound.play()
                    image_path = os.path.join(detected_dir, f"unknown_person_{time.time()}.jpg")
                    cv2.imwrite(image_path, frame)
                    # Upload image to ImgBB
                    imgbb_url = upload_to_imgbb(image_path)
                    print("Image uploaded to ImgBB:", imgbb_url)
                    snapshot_taken = True
                    cv2.waitKey(5000)
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    snapshot_taken = False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
