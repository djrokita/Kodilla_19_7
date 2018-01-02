import React from 'react';
import Comment from './Comment';

const CommentsList = ({commments}) => {
	return (
		<ul>
			{comments.map(comment => <Comment key={comment.id} {...comment}/>)}
		</ul>
	);
};

export default CommentsList;