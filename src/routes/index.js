import { connect } from 'react-redux';
import Routes from './Routes';

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(Routes);
