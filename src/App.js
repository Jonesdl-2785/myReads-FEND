import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
    //showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  changeShelf = (book, shelf) => {
    console.log("changing shelf: ", shelf);
     BooksAPI.update({id: book.id}, shelf).then(response => {
       book.shelf = shelf;
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
     });
   }
  // changeShelf = (book, shelf) => {
  //    BooksAPI.update(book, shelf)
  //      .then(res => {
  //    	book.shelf = shelf;
  //      this.setState(state => ({
  //      	books: state.books.filter(b => b.id !== book.id.concat({book}))
  //      }))
  //    })
  //   }


  render() {
    return (<div className="app">
      <Route exact path="/" render={() => (
          <HomePage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>

      <Route exact path="/searchpage" render={() => (
          <SearchPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
    </div>
  )}
};

export default BooksApp
