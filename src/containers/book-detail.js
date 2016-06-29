import React, { Component } from 'react';
import { connect } from 'react-redux';

// component state is completely separate from application state
export default class BookDetail extends Component {
  render() {
    // when app boots up there is no book available
    // so we just return early
    if(!this.props.book) {
      return <div>Select a book to get started</div>;
    }
    // if we get here, return title
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {
  activeBook: state.activeBook
 };
}


export default connect(mapStateToProps)(BookDetail);

