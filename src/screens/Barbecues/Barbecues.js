import React, { useState, useEffect } from 'react';
import { Container, CardContainer, CardBtn } from './StyledComponent';
import { Card, Header } from '../../components';
import { t } from '../../i18n';

export default ({ history, barbecues: bbq }) => {
  const [barbecues, setBarbecues] = useState(bbq || []);

  useEffect(() => {
    setBarbecues(bbq || []);
  }, [bbq]);

  return (
    <Container>
      <Header />
      <CardContainer>
        {!!barbecues.length && barbecues.map(barbecue => <Card data={barbecue} />)}
        <CardBtn />
      </CardContainer>
    </Container>
  );
};
