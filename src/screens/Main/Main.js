import React, { useEffect } from 'react';


import { Container } from './StyledComponent';

export default ({ user }) => {
  useEffect(() => {
    // !user._id
    //   ? navigation.navigate('Login')
    //   : setTimeout(() => navigation.navigate('Barbecues'), 3000);
  }, [user]);

  return (
    <Container>Salve</Container>
  );
};
