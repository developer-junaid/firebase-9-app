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