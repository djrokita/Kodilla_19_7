import React from 'react'

const CommentForm = ({ text }) => {
	let commentText = '';
	return (
		<form onSubmit={(event) => {
			text(commentText);
			event.preventDefault();
		}}>
			<input onChange={e => commentText = e.target.value} />
			<input type='submit' value='Submit' />
		</form>
	);
}

export default CommentForm
