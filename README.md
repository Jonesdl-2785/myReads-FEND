# MyReads React App Project

MyReads is a bookshelf app created with the React.js Framework. The app allows the user to choose books from one of three categories: currently reading, want to read and read.

## Project Demo
See project [demo](https://jonesdl-2785.github.io/myReads-FEND/).

## Application Requirements

1.	Starter project can be downloaded or cloned from the REPOSITORY [here: ](https://github.com:Jonesdl-2785/myreads-react-project.git).
2.	Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

### Project Dependencies

#### Install all project dependencies with:
$ `npm install`
#### Start the development server with:
$ `npm start`
#### View app on:
$ localhost:3000

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### getAll()

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### update(book, shelf)

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### search(query, maxResults)

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Future updates
* Create User Registration
* Create User Login
* Add star rating
* Add User review page

## Resources

* Udacity Mentors
* Udacity Project Coaches
* Udacity React Course
* [Reactjs.org](reactjs.org)
