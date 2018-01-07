import { connect } from 'redux';
import Comment from './Comment';
import { getThumbUp } from './actions';

const mapDispatchToProps = dispatch => ({
  getThumbUp: (id) => dispatch(getThumbUp(id))
});

export default connect(null, mapDispatchToProps)(Comment);

