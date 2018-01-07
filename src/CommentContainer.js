import { connect } from 'react-redux';
import Comment from './Comment';
import { getThumbUp, getThumbDown } from './actions';

const mapDispatchToProps = dispatch => ({
  getThumbUp: (id) => dispatch(getThumbUp(id)),
  getThumbDown: (id) => dispatch(getThumbDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);

