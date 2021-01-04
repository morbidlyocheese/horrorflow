[Horrorflow](https://horrorflow.herokuapp.com/) - Asking the important questions about Horror films.
---
*by [Damien Darko](https://github.com/djangothesolarboy)*

Table Of Contents:
---
- [Description](https://github.com/djangothesolarboy/horrorflow#Description)
- [Assets](https://github.com/djangothesolarboy/horrorflow#Assets)
- [Application Architecture && Technologies Used](https://github.com/djangothesolarboy/horrorflow#Application-Architecture-&&-Technologies-Used)
- [Installation](https://github.com/djangothesolarboy/horrorflow#Installation)
- [Technology Shields](https://github.com/djangothesolarboy/horrorflow#Technology-Shields)
- [Frontend Overview](https://github.com/djangothesolarboy/horrorflow#Frontend-Overview)
- [Backend Overview](https://github.com/djangothesolarboy/horrorflow#Backend-Overview)


Description:
---
Horrorflow is a clone of Stack Overflow, but with a twist, like most good horror films! Horrorflow is meant to be a place where horror film lovers can go to ask the tough questions. It is an idea that I am sure many film watchers have wondered. Have you ever watched a horror film and wondered *'What the heck was that ending?!*? Well Horrorflow aims to be your one-stop-shop to ask the **Who What When Why**, instead of scouring the internet endlessly for answers!

If you would like to see an idea of things I would like to implement in the future take a look [here](https://github.com/djangothesolarboy/horrorflow/projects/1). My hopes are to expand the site some more, and possible incorporate it with my Capstone project.

Assets:
---
The assets/icons(Profile button, New Question, Machetes, && Favicon) used for this project were all made by myself using Aseprite.
- Favicon: ![favicon](./frontend/public/favicon.png)
- Profile Button: ![profile-button](./frontend/src/components/Navigation/assets/profile.png)
- New Question Button: ![new-question-button](./frontend/src/components/Navigation/assets/crossbones.png)
- Upvote/Downvote Machetes: ![downvote](./frontend/src/components/ResponsesPage/assets/down.png) ![upvote](./frontend/src/components/ResponsesPage/assets/up.png)

The background image on the splash page is from [unsplash.com - Jakob Owens](https://unsplash.com/photos/W0hkz1EnX8I). And the font I used is [Victor Mono](https://rubjo.github.io/victor-mono/).

Application Architecture && Technologies Used:
---
Horrorflow was built using the Express NodeJS framework with a PostgreSQL(postgres) database to store all the application data in combination.

The front ends uses React && Redux in order to render pages. Vanilla Javascript and standard CSS were also used for styling as well. 

Installation:
---
For a full walkthrough on how to clone the app and install everything needed to run it on your own local machine please go to the wiki via this link [here](https://github.com/djangothesolarboy/horrorflow/wiki/Installation-Instructions). If you have any issues, please feel free tor reach out!


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
![login](./readme-resources/login.gif)

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

![signup](./readme-resources/signup.gif)


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