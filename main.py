from flask import Flask, render_template, Response
import cv2
from model import FaceEncode
import pygame
from pymongo import MongoClient

app = Flask(__name__)

#loading the encoded imageess from the dir

sfr = FaceEncode()
sfr.load_encoding_images("images/")

sound_file = "sound.wav"
pygame.init()
unknown_sound = pygame.mixer.Sound(sound_file)

def gen_frames():
    cap = cv2.VideoCapture(1) # 1 for tyo webcam and 0 for the camera we can also pass the path for the certain video 
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
                if name == "Unknown":
                    print("Unkown person detected")
                    unknown_sound.play()
                    cv2.waitKey(1000)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
# make the route in the port
@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
