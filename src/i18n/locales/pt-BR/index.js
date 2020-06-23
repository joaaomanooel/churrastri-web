export default {
  emptyStates: require('./emptyStates').default,
  ...require('./barbecue').default,
  ...require('./global').default,
  ...require('./login').default,
};
