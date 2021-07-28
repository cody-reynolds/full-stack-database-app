# full-stack-database-app

**Synopsis**
\
This application is a full-stack JavaScript project that uses React on the front end with a REST API built with Express, SQLite, and Sequelize on the back-end. The app performs CRUD operations on a catalog of school courses, and also contains user authentication functionality.


**Motivation**
\
This is the final project of the [Treehouse Full Stack JavaScript Techdegree](https://teamtreehouse.com/techdegree/full-stack-javascript). I built this project to gain some experience building both the front and back ends of an application from scratch, and to put all of the JavaScript concepts I learned in the program to use. Specifically, the app utilizes a few key concepts:

- Asynchronous JavaScript and Promises
- React, Higher-Order Components, and the React Context API
- State Management
- Conditional Rendering
- React Router
- ORMs (Sequelize) and server-side data validation
- Express routing and REST APIs
- Node.js

**Installation**
\
This project contains two primary folders, `client` and `api`. After installing the project's dependencies with `npm install` in both folders, you can start it up with `npm start` (This will require the use of two terminals). The application will run on localhost:3000.

At any point, if you need to reset the database data for testing purposes, you can do so by running `npm run seed` in the terminal in the `api` folder.