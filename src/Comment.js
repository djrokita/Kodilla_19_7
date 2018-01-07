import React from 'react';

const Comment = ({text, votes, id, getThumbUp}) => {
	return (
		<li>
			{text} <span>votes: {votes}</span>
			<button onClick={() => getThumbUp(id)}>Thumb up</button>
		</li>
	);
};

export default Comment;