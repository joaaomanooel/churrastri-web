import { connect } from 'react-redux';
import BarbecueDetail from './BarbecueDetail';
import * as BarbecuesActions from '../../redux/Barbecues';

const mapStateToProps = (state) => {
  const { barbecues: { barbecues }, user: { data: user } } = state;
  return { user, barbecues };
};

const mapDispatchToProps = dispatch => ({
  removeBarbecues: data => dispatch(BarbecuesActions.removeBarbecuesRequest(data)),
  updateBarbecues: data => dispatch(BarbecuesActions.updateBarbecuesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarbecueDetail);
