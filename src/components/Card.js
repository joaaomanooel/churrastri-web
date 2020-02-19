import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import { MdSupervisorAccount, MdMonetizationOn } from 'react-icons/md';
import { colors, layout } from '../constants';
import { toCurrency } from '../i18n';

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
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  display: flex;
  :active {
    background-color: ${colors.white(0.8)};
  }
`;

const TopContainer = styled.div`
  flex-direction: column;
  display: flex;
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

const BottomContainer = styled.div`
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

const BottomItemContainer = styled.div`
  flex-direction: row;
  display: flex;
`;

const BottomText = styled.text`
  padding-left: ${layout.scale() * 5}px;
`;

export default React.memo(({ data = {}, ...props }) => {
  const date = data.date ? parseISO(data.date) : new Date();
  return (
    <Card {...props}>
      <TopContainer>
        <CardDate>{format(date, 'dd/MM')}</CardDate>
        <Title>{data.title}</Title>
      </TopContainer>
      <BottomContainer>
        <BottomItemContainer>
          <MdSupervisorAccount color={colors.yellow()} size={layout.scale() * 24} />
          <BottomText>{data.participants && data.participants.length || 0}</BottomText>
        </BottomItemContainer>
        <BottomItemContainer>
          <MdMonetizationOn color={colors.yellow()} size={layout.scale() * 24} />
          <BottomText>{toCurrency(data.price || 0)}</BottomText>
        </BottomItemContainer>
      </BottomContainer>
    </Card>
  );
});
