import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import loader from '../../assets/animetions/loader.json';

import { Container } from './StyledComponent';

export default ({ history, user }) => {
  useEffect(() => {
    !user._id ? history.push('login') : setTimeout(() => history.push('/barbecues'), 3000);
  }, [user]);

  const defaultOptions = {
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
    animationData: loader,
    autoplay: true,
    loop: true,
  };

  return <Container><Lottie options={defaultOptions} height={200} width={200} /></Container>;
};
