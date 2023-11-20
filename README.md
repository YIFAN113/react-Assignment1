# Assignment 1 - ReactJS app.

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
+ //movies/currentPopular - Jump to currentPopularPage to browse through the list of this year's most popular movies
+ /movies/people - Jump to peoplePage to browse through the list of the most popular actors
+ /people/:id - Jump to the peopleDetailPage to browse the basic information of the actors           

## Independent learning.

After learning the tutorial related to firebase third-party authentication and trying it in the app, it can now be logged in and registered with an email account and password, and now it only jumps back to the home page after the login is completed.
Get a page of language categories by iterating through the language of a page of the movie and add it to the MenuItem.
Learned about pagination on mui.

## Reference.

UI and Pagination: "https://mui.com/"
firebase authentication: "https://firebase.google.com/docs/auth/web/start?authuser=0"

