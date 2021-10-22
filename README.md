# Tech-blog
[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

## Description
This website allows developers to write about tech so they can publish articles, blog posts, and thoughts and opinions.

![alt text](https://github.com/jdeschat/Tech-blog/blob/main/assets/img/Tech-blog.png)

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Install express by entering ```npm i express``` into the command line. To install Handlebars.js, instead the correct dependency by typing the following command: ```npm install express-handlebars```.

Finally, the program can then be run by entering ```npm start``` into the command line, then opening the file on your browser.

## Usage
1. Install npm: npm init -y
2. Install express: npm i express
3. Go to deployed link via Heroku (found below)

## Contributors
To contribute to Professional-README-generator, clone this repo locally and commit your code on a separate branch.
  
Contributors:

<a href="https://github.com/jdeschat/Tech-blog/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jdeschat/Tech-blog" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- express-handlebars
- MySQL2
- Sequelize

For authentication
- dotenv
- crypt
- express-session
- connect session-sequelize

## Questions
My Github username is jdeschat, which can be accessed here https://github.com/jdeschat/Tech-blog.

This app is deployed through Heroku, which can be accessed here https://tech-blog12.herokuapp.com/

You can reach me at jdeschat@gmail.com with additional questions.