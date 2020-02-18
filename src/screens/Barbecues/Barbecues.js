import React, { useState, useEffect } from 'react';
import { t } from '../../i18n';
import { Button, Link, Header } from '../../components';
import {Container, Card, CardContainer} from './StyledComponent';

export default ({ history, barbecues: bbq }) => {
  const [showButton, setShowButton] = useState(true);
  const [barbecues, setBarbecues] = useState(bbq || []);

  useEffect(() => {
    setBarbecues(bbq || []);
  }, [bbq]);

  return (
    <Container>
      <Header />
      <CardContainer>
        {!!barbecues.length && barbecues.map(barbecue => (
          <Card />
        ))}
        <Card />
      </CardContainer>
    </Container>
  );
}
