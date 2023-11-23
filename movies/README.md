# Assignment 1 - ReactJS app & Agile Software Practice.

Name: Yifan Gu

## Overview.

A basic react web app that expands on experimentation by adding some static pages, language filters, pagination functionality, and firebase authentication.

### Features.
 
1. topRatedMoviesPage
2. currentPopularMoviesPage
3. languageFilter
4. firebase authentication
5. pagination
6. peopleListPage
7. peopleDetailPage

## Setup requirements.
need to install firebase "npm install firebase"


## Automated Tests.
1. cypress/e2e/firebase.cy.js - Firebase third-party authentication for registration and login using email address and password
2. cypress/e2e/currentPopular.cy.js - Users can check out the most popular movies of the year, and the page returns the 20 most popular movies of the year.
3. cypress/e2e/filtering.cy.js - Users can filter the 20 movies on the current page by language.
4. cypress/e2e/topRated.cy.js - Users can view a list of the best movies in history.

## Error/Exception testing.
Users receive a message when they fail to log in or register.

## Cypress Custom commands.
1. cypress/e2e/currentPopular
2. cypress/e2e/topRated.cy.js

## Code Splitting.
1. src/index.js

## pull Requests.
https://github.com/YIFAN113/react-Assignment1/pulls

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres - /genre/movie/list
+ Top Rated movies - /movie/top_rated
+ Current Popular Movies - /discover/movie
+ peopleList - person/popular
+ PeopleDetail - person/:id
+ People Image - person/:id/images
+ Movies Image - movie/:id/images

## Routing.

+ /login - Go to loginPage to register and log in to the user
+ /movies/top_Rated - Jump to topRatedMoviesPage to browse the list of the highest-rated movies in history
+ /movies/currentPopular - Jump to currentPopularPage to browse through the list of this year's most popular movies
+ /movies/people - Jump to peoplePage to browse through the list of the most popular actors
+ /people/:id - Jump to the peopleDetailPage to browse the basic information of the actors           

## Independent learning.

After learning the tutorial related to firebase third-party authentication and trying it in the app, it can now be logged in and registered with an email account and password, and now it only jumps back to the home page after the login is completed.
Get a page of language categories by iterating through the language of a page of the movie and add it to the MenuItem.
Learned about pagination on mui.

## Reference.

UI and Pagination: "https://mui.com/"
firebase authentication: "https://firebase.google.com/docs/auth/web/start?authuser=0"


