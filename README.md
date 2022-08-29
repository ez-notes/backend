# EZ-Notes

EZ-Notes is an application for saving simple text notes online. 
When you first enter the site, you will be met with a sign-up/login page that will require the user authenticate and authorize themselves. Once logged in, the user will be routed to the 'notes' page, where they can add a new note, or view an existing note. When the user clicks to view their note, they can click on the edit button to open a modal editor for the note, or click on the delete to remove the note.

## PICTURES OF WEBSITE HERE
Sign-up/Login
![alt text](https://github.com/ez-notes/frontend/raw/main/readme-docs/1-Signup-page.png)
Notes Page
![alt text](https://github.com/ez-notes/frontend/raw/main/readme-docs/2-Notes-page.png)
Add Notes Modal
![alt text](https://github.com/ez-notes/frontend/raw/main/readme-docs/3-Add-note.png)
Note Page
![alt text](https://github.com/ez-notes/frontend/raw/main/readme-docs/4-Note-page.png)
Add Note Modal
![alt text](https://github.com/ez-notes/frontend/raw/main/readme-docs/5-Note-edit-page.png)

## TECHNOLOGIES USED
The front-end of the application is built in React, react-bootstrap, framer/motion, and Auth0, and is attached to a backend application built using Express, Mongoose, MongoDB and Node.js. The backend is deployed on Heroku and the frontend is deployed on Netlify.

## INSTALLATION INSTRUCTIONS
All you need to work EZ-Notes is a modern web browser and you're good to go!

## MVP USER STORIES
- _As a user, I want to be able to create and sign into an account._
- _As a user, I want to be able to create notes, view notes that I've added to the site, and delete them._

## WIREFRAMES
These were the concepts for the site I created in Google Slides.
![alt text](https://media.git.generalassemb.ly/user/43502/files/9a1cb084-1dc8-410c-af64-4fdab6f80967)
![alt text](https://media.git.generalassemb.ly/user/43502/files/46f72b1e-eea0-4773-9852-4d92134eaf59)
![alt text](https://media.git.generalassemb.ly/user/43502/files/460f4d7b-7af5-4897-84b4-9ca4284daadd)

## APPROACH TAKEN
I started off with a plan, a simple note-pad that had my CRUD defined as creating notes, populating them on the page, individually updating them and deleting them. I listed the processes I'd need to follow, creating a Github organization for the project, two repos, creating and cleaning up a React app, creating the backend and then creating components and building the front end, and lastly styling.

I had a project per day. After setting up what would be in the project, I began with my backend, defining basic CRUD models, and files for testing its functionality in Postman. Getting the backend deployed onto Heroku turned out to be a challenge, ultimately the bug was resolved, and the front end could begin.

I built the application with a barebones skeleton, but as puzzles revealed themselves, I did my best to break down each challenge into separate components, and tried to keep those components organized into their own directories. So I ended up with a directory for the application, the components, within the components the new visitor screen, the user login/signup, the loading screen, each have their own directories and subdirectories therin, just to keep each problem/solution isolated and organized.

I used Bootstrap to style the project while it was in progress, but found that bootstrap's stylings are a little basic, and so besides the card elements, all bootstrap was removed and either hand-styled in CSS or uses motion elements from framer/motion. 

[CLICK THIS LINK TO VISIT THE LIVE SITE](https://ez-notes.netlify.app/)

[CLICK THIS LINK TO VISIT THE FRONTEND REPO](https://github.com/ez-notes/frontend)

## THE FUTURE ON EZ-Notes

There are still some functions that I'd like to revisit to imporve functionality under the hood, but as these didn't affect MVP, I chose to leave them to further iterations, and leave future works to the sudowoodo file, where I kept my pseudocode throughout the project.