import { connect } from 'react-redux';
import Comment from './Comment';
import { getThumbUp, getThumbDown, removeComment, editComment } from './actions';

const mapDispatchToProps = dispatch => ({
  voteUp: (id) => dispatch(getThumbUp(id)),
  voteDown: (id) => dispatch(getThumbDown(id)),
  deleteComment: (id) => dispatch(removeComment(id)),
  edit: (text, id) => dispatch(editComment(text, id))
});

export default connect(null, mapDispatchToProps)(Comment);

