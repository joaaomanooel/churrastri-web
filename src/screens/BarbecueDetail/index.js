import { connect } from 'react-redux';
import BarbecueDetail from './BarbecueDetail';
import * as BarbecuesActions from '../../redux/Barbecues';

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const { barbecues: { barbecues = [] }, user: { data: user } } = state;
  const barbecue = barbecues.find(b => b._id === id);
  return { user, barbecue };
};

const mapDispatchToProps = dispatch => ({
  removeBarbecues: data => dispatch(BarbecuesActions.removeBarbecuesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarbecueDetail);
