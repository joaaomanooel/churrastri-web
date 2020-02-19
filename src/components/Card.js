import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import { colors, layout } from '../constants';

const Card = styled.div`
  -webkit-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  -moz-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  border-radius: ${layout.scale() * 2}px;
  background-color: ${colors.white()};
  padding: ${layout.scale() * 20}px;
  height: ${layout.scale() * 200}px;
  width: ${layout.scale() * 300}px;
  margin: ${layout.scale() * 15}px;
  flex-direction: column;
  cursor: pointer;
  display: flex;
  :active {
    background-color: ${colors.white(0.8)};
  }
`;

const CardDate = styled.h2`
  line-height: ${layout.scale() * 36}px;
  font-size: ${layout.scale() * 28}px;
  justify-content: center;
  font-weight: 800;
`;

const Title = styled.text`
  line-height: ${layout.scale() * 36}px;
  font-size: ${layout.scale() * 20}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  overflow: hidden;
`;

export default React.memo(({ data = {} }) => {
  const date = data.date ? parseISO(data.date) : new Date();
  return (
    <Card>
      <CardDate>{format(date, 'dd/MM')}</CardDate>
      <Title>{data.title}</Title>
    </Card>
  );
});
