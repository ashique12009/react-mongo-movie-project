# React MongoDB Client-Server Application

This repository contains React Express client server application and for storing users and movies, used mongoDB as database.

## Express as server side

Used expressJS framework for maintaining backend service

## React as client side

Used reactJS library for maintaining frontend stuff

## MongoDB as database

Used mongoDB as a database

## Deploying the Build of the React app

In the branch [deploy_the_build](https://github.com/ashique12009/react-mongo-movie-project), the production version of the React app has been created, and copied/served under the Express server:

 * `npm run build` on the client was used to create the `build` folder (after this, the `client` directory)
 * `server.js` may now run on port 8000, as the _main_ (and only) running server.

 You only need to start the server (`cd server; nodemon server.js`).
