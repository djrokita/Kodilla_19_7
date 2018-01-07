import React from 'react';

const Comment = ({text, votes, id, getThumbUp, getThumbDown}) => {
	return (
		<li>
			{text} <span>votes: {votes}</span>
			<button onClick={() => getThumbUp(id)}>Thumb up</button>
			<button onClick={() => getThumbDown(id)}>Thumb down</button>
		</li>
	);
};

export default Comment;