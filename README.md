Simple Frontend(JS/React/CSS) Brief Note Taking App
The main motivation of creating this app is the passion to learn everyday and add some major concepts learned in the most brief way possible.

This is a simple frontend major tools note-taking app that uses a JSON file as a backend for storing and retrieving notes. The app allows users to create, read, update, and delete notes using a user-friendly command line interface.

Requirements
To run this application, you will need the following

Installation
Clone the repository or download the source code. Navigate to the project directory Open a terminal or command prompt

Run the following command to start the app:
Run the db.json server (json-server db--watch db.json) npm start to the directory in the command line

About the App
The app has three routes:

Home: 1.which is the main route to find the list of availble notes with a search bar which allows to filter based on the title of the subject. 2. Add+ button which enables to add and save new notes. 3.For each note card there is an option to edit or delete. Notes: This is a route to see all availble list of note cards which does no functionality of edit or delete. Form: is a route to show just the note addition form with no functionality since the main route(home) holds the functionality

JSON File Format The app uses a JSON file (notes.json) as the backend for storing notes. Each note is represented by a JSON object with the following structure:

json Copy code { "id": 1, "topic":"topic" "title": "Note Title", "content": "Note Content" "script": "source link"

} The id field is a unique identifier for each note. The topic field let's you select from JS/Css/React topics to add The title field represents the note's title, and the content field contains the note's content.

Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

Acknowledgments
This app was developed as a learning exercise. I would like to appercite my instructors for their help

More to the app
This app is very limited to a brief options of CSS/React/Js due to a time limit. In the future it can be more advanced by includeing sorting option,date tracking and more options to add like file reciver and pictures.
