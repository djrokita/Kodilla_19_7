import React, { Component } from 'react'
import CommentsListContainer from './CommentsListContainer.js'
import CommentForm from './CommentFormContainer'
import styles from './App.css'

const App = () => {
  return (
    <div>
    	<h1>Leave Your comment</h1>
      <CommentForm />
      <CommentsListContainer />
    </div>
  );
};

export default App;
