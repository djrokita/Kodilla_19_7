import React from 'react';
import Comment from './Comment';

const CommentsList = ({comments}) => {
	return (
		<ul>
			{comments.map(item => <Comment key={item.id} {...item} />)}
		</ul>
	);
};

export default CommentsList;