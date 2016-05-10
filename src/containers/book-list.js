import React from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Containres are that link between Redux and React
function mapStateToProps(state) {
 // Whatever gets returned will show up as props 
 // inside of BookList

 // this.props:
 return {
  books: state.books
 };
}

// redux.connect takes a component and maps it to a container
export default connect(mapStateToProps)(BookList);
