# trinetra

Overview
The Home Security App is a web application designed to help users monitor and manage their home security system remotely. The app is built using Flask for the backend and Next.js for the frontend, providing a seamless and responsive user experience.
Features
User Authentication: Secure user authentication system to ensure only authorized users can access the app.
Live Camera Feeds: View live camera feeds from multiple locations within your home.
Motion Detection Alerts: Receive real-time alerts when motion is detected in monitored areas.
Remote Arm/Disarm: Arm or disarm your home security system remotely.
Event History: View a log of past security events and alerts.
Technologies Used
Flask: A lightweight web framework for Python used to build the backend server.
Next.js: A React framework for building fast and scalable web applications used for the frontend.
MongoDB: A NoSQL database used to store user data, camera feeds, and security events.
JWT (JSON Web Tokens): Used for secure authentication and authorization of users.
WebSocket: Enables real-time communication between the server and the client for live camera feeds and motion detection alerts.
Installation
Clone the repository: git clone https://github.com/sugam-pokhrel/trinetra.git
Navigate to the project directory: cd trinetra
Install backend dependencies: pip install -r requirements.txt
Install frontend dependencies: cd web && npm install


To create the venv 
python -m venv trinetra


Configuration

Start the backend server: python main.py
Start the frontend development server: cd web && npm run dev
Access the app in your browser at http://localhost:3000
Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository
Create a new branch: git checkout -b feature-name
Make your changes and commit them: git commit -m "Add new feature"
Push to the branch: git push origin feature-name
Submit a pull request
