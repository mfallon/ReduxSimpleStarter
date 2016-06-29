import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// any key you add to combineReducers ends up as a key on your application state
const rootReducer = combineReducers({
  books: BooksReducer, 
  activeBook: ActiveBook
});

export default rootReducer;
