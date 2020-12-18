[Horrorflow]() - Asking the important questions about Horror films.
---
*by [Adam Jacobson](https://github.com/djangothesolarboy)*

Table Of Contents:
---
- [Description](https://github.com/djangothesolarboy/horrorflow#Description)
- [Application Architecture && Technologies Used](https://github.com/djangothesolarboy/horrorflow#Application-Architecture-&&-Technologies-Used)
- [Installation](https://github.com/djangothesolarboy/horrorflow#Installation)
- [Technology Shields](https://github.com/djangothesolarboy/horrorflow#Technology-Shields)
- [Frontend Overview](https://github.com/djangothesolarboy/horrorflow#Frontend-Overview)
- [Backend Overview](https://github.com/djangothesolarboy/horrorflow#Backend-Overview)


Description:
---
Horrorflow is a clone of Stack Overflow, but with a twist, like most good horror films! Horrorflow is meant to be a place where horror film lovers can go to ask the tough questions. It is an idea that I am sure many film watchers have wondered. Have you ever watched a horror film and wondered *'What the heck was that ending?!*? Well Horrorflow aims to be your one-stop-shop to ask the **Who What When Why**, instead of scouring the internet endlessly for answers!

Application Architecture && Technologies Used:
---
Horrorflow was built using the Express NodeJS framework with a PostgreSQL(postgres) database to store all the application data in combination.

The front ends uses React && Redux in order to render pages. Vanilla Javascript and standard CSS were also used for styling as well. 

Installation:
---
1. Click on the *green* '''↓Code''' button to access a dropdown menu to clone the repo.
2. Copy the repo link provided, or click on the clipboard button to copy the repo link to your clipboard. (I have also provided a link to the repo below)
 - '''https://github.com/djangothesolarboy/horrorflow.git'''
3. Head over to your terminal and '''cd''' into a directory you would like to keep the app in, I would suggest Documents, Desktop or Downloads. But it is all on preference, just remember where you put it.
4. Once you have a location you want to place the app, in your terminal type '''git clone https://github.com/djangothesolarboy/horrorflow.git'''. Your terminal will begin cloning the repo to your local machine.
5. Upon completetion of the cloning '''cd''' into the app's main directory by using the command '''cd horrorflow'''.
6. Once you are inside of the **Horrorflow** directory you will see a few folders; backend and frontend being the most important here. Create 2 new tabs or windows of your terminal.
 A. In one terminal you will want to '''cd''' into the frontend folder -> '''cd frontend'''.
 B. In another terminal you will want to '''cd''' into the backend folder -> '''cd backend'''.
 C. In your last terminal, before you do anything else, you will need to open the root directory of the app in your favorite text editor, like VSCode. -> '''code .''' <- This command will open the entire directory in your text editor you have as your default.
  - Once you have your editor open, in your terminal you will want to '''cd backend'''. (You could also do it in the same tab as the other one that you've already used that command with)
  - Once inside of the backend folder you will want to '''touch .env'''. This will create a '''.env''' file.
  - Inside of your editor look for a file named '''.envexample'''. Copy the contents of that file into the '''.env''' file you just created.
  

Frontend Overview:
---
This application does rely a lot on the backend and the database. The frontend uses vanilla Javascript, some HTML, standard CSS along with React && Redux. The goal is to use as little premade things as possible and doing things myself. Csurf along with JWT was used for authentication.

Example of Login Validation:
```js
const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors,
];
```
[![Image from Gyazo](https://i.gyazo.com/80d8ad1dec38562aa15c8d5b5f67b798.gif)](https://gyazo.com/80d8ad1dec38562aa15c8d5b5f67b798)

Snippet of code from Signup Validation:
```js
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];
```

[![signup](https://i.gyazo.com/b5663c8570bf4f702728901731983a88.gif)](https://gyazo.com/b5663c8570bf4f702728901731983a88)


Backend Overview:
---
This application isn't super heavy on the backend with database management. But it does need the tables within the database to relate properly in order for the features to all work porperly.

Database:
---
The database for Horrorflow really only has a few tables, but each is very important in relating to one another. I tried to design the database as easily as I could and feel what I came up with should work well. 

Here is a diagram of the database implemented for Horrorflow:
![database diagram](./readme-resources/diagram.png)



Technology Shields:
---
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&logoColor=white&color=ff0000) 
![](https://img.shields.io/badge/Code-HTML-informational?style=flat&logo=HTML5&logoColor=white&color=ff0000) 
![](https://img.shields.io/badge/Code-CSS-informational?style=flat&logo=CSS3&logoColor=white&color=ff0000) 
![](https://img.shields.io/badge/Library-React-informational?style=flat&logo=React&logoColor=white&color=ff0000)
 ![](https://img.shields.io/badge/Tools-Redux-informational?style=flat&logo=Redux&logoColor=white&color=ff0000) 
![](https://img.shields.io/badge/Tools-npm-informational?style=flat&logo=NPM&logoColor=white&color=000000)
 ![](https://img.shields.io/badge/Tools-Nodemon-informational?style=flat&logo=Nodemon&logoColor=white&color=000000) 
![](https://img.shields.io/badge/Tools-Node.js-informational?style=flat&logo=Node.js&logoColor=white&color=000000) 
![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&logoColor=white&color=000000) 
![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=Postman&logoColor=white&color=000000) 
![](https://img.shields.io/badge/Tools-PostgreSQL-informational?style=flat&logo=PostgreSQL&logoColor=white&color=000000) 