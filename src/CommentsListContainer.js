import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import style from './CommentsList.css';

const mapStateToProps = state => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentsList);