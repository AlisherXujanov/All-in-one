import cv2

# Step 1: Load the pre-trained Haar Cascade classifier for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Step 2: Capture video from the webcam
cap = cv2.VideoCapture(0)

while True:
    # Read each frame from the video
    ret, frame = cap.read()
    
    # Convert the frame to grayscale (required for face detection)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Step 3: Detect faces in the frame
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    
    # Step 4: Draw rectangles around each face
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
    
    # Display the frame with detected faces
    cv2.imshow('Face Detection', frame)
    
    # Break the loop when the user presses 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Step 5: Clean up
cap.release()
cv2.destroyAllWindows()