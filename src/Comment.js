import React from 'react';

const Comment = ({text, votes, id, voteUp, voteDown, deleteComment, edit}) => {
	return (
		<li>
			{text} <span>votes: {votes}</span>
			<button onClick={() => voteUp(id)}>Thumb up</button>
			<button onClick={() => voteDown(id)}>Thumb down</button>
			<button onClick={() => deleteComment(id)}>X</button>
			<button onClick={() => edit(text, id)}>Edit</button>
		</li>
	);
};

export default Comment;