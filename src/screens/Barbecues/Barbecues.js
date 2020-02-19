import { GiBarbecue } from 'react-icons/gi';
import React, { useState, useEffect } from 'react';
import { Container, CardContainer, CardBtn, IconContainer } from './StyledComponent';
import { Card, Header } from '../../components';
import { t } from '../../i18n';
import colors from '../../constants/colors';

export default ({ history, barbecues: bbq }) => {
  const [barbecues, setBarbecues] = useState(bbq || []);

  useEffect(() => {
    setBarbecues(bbq || []);
  }, [bbq]);

  return (
    <Container>
      <Header />
      <CardContainer>
        {!!barbecues.length && barbecues.map(barbecue => (
          <Card onClick={() => history.push(`/barbecues/${barbecue._id}`)} data={barbecue} />
        ))}
        <CardBtn onClick={() => history.push('/barbecues/forms')}>
          <IconContainer>
            <GiBarbecue size={50} color={colors.black(0.4)} />
          </IconContainer>
          <strong>{t('addBarbecue')}</strong>
        </CardBtn>
      </CardContainer>
    </Container>
  );
};
