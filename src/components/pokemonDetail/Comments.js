import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentList = comments.map((comment, i) => {
    return (
      <li key={i}>
        <Comment comment={comment} />
      </li>
    );
  });

  return (
    <>
    <h1>COMMENTS</h1>
    <ul>
      {commentList}
    </ul>
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
