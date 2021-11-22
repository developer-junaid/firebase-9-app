# Firebase 9 setup and usage

## Steps

### 1) : Setup Webpack using npm

- Initialize with package.json `npm init -y`
- Install webpack and webpack cli `npm i webpack webpack-cli -D`
- Configure webpack in webpack.config.js at root
- Run webpack to do bundling (Create custom script in package.json for build)
- Run using `npm run build` (it runs `webpack` on backend)
- Connect index.html with bundle.js
- Preview in the browser for the output of the index.js

### 2) : Setup Firebase project

- Create firebase project on firebase console
- Get config and paste in index.js
- Install firebase `npm i firebase`
- Initialize firebase app using the config

### 3) : Fetching data from firebase

- Setup database
- Add collection and documents to database
- Fetch data from database into the console

### 4) : Adding and deleting documents from frontend

- Create form in index.html for adding doc
- Add database adding logic
- Add documents

- Create form in index.html for deleting doc
- Add database delete logic
- Delete Docs

### 5) : Add realtime listener (Subscription) logic to app

- Change function from getDocs to onSnapshot
- Write the logic

### 6) : Querying particular data

- Change collection ref to query ref

### 7) : Ordering Data and Timestamps

- order data by some field
- Create timestamps
- order by timestamp

### 8) : Getting single document

- Make doc ref
- get doc
- Subscribing to a document

### 9) : Update/Edit documents

- Get Reference
- Update doc

### 10) : Authentication

- Go to firebase-console then Authentication
- Click Get Started
- Click email/password
- Click enable switch
- Click save

- setup auth

### 11) : Sign Up users

- Create signup form
- Attack event listener

### 12) : Login and Logout Users

- Create login form and logout button
- Setup event listeners
- Call logout function
-
