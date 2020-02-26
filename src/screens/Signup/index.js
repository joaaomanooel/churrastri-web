import { connect } from 'react-redux';
import * as UserActions from '../../redux/User';
import { selectors as FetchSelector } from '../../redux/Fetch';
import Signup from './Signup';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('ADD_USER', state),
  error: FetchSelector.getError('ADD_USER', state),
  user: state.user.data,
});

const mapDispatchToProps = dispatch => ({
  createUser: data => dispatch(UserActions.addUserRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
