import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { addComment } from './actions';

const mapDispatchToProps = dispatch => ({
	text: (content) => dispatch(addComment(content))
});

export default connect(null, mapDispatchToProps)(CommentForm);