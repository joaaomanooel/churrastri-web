import React from 'react';
import styled from 'styled-components';
import { t } from '../i18n';
import { colors, layout, images } from '../constants';

const TitleContainer = styled.div`
  background-image: url(${images.headerImg});
  height: ${layout.scale() * 300}px;
  background-color: ${colors.yellow()};
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 50;
`;

const Title = styled.h1`
  line-height: ${layout.scale() * 40}px;
  font-size: ${layout.scale() * 36}px;
  align-self: center;
  font-weight: 800;
`;

export default React.memo(() => (
  <TitleContainer>
    <Title>{t('barbecueCalendar')}</Title>
  </TitleContainer>
));
