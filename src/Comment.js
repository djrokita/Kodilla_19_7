import React from 'react';

const Comment = ({text, votes, id, voteUp, voteDown, deleteComment, edit}) => {
	return (
		<li className='item'>
			{text}
			<div>
				<span className='counter'>votes: {votes}</span>
				<button className='btn btn-up' onClick={() => voteUp(id)}>up</button>
				<button className='btn btn-down' onClick={() => voteDown(id)}>down</button>
				<button className='btn btn-del' onClick={() => deleteComment(id)}>X</button>
			</div>
		</li>
	);
};

export default Comment;