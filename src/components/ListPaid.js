import styled from 'styled-components';
import React from 'react';
import { colors, layout } from '../constants';
import { toCurrency } from '../i18n';

const ListView = styled.div`
  margin-top: ${layout.scale() * 30}px;
  flex-direction: column;
  display: flex;
`;

const ItemContainer = styled.div`
  border-bottom: 1px solid ${colors.yellow(0.6)};
  padding: ${layout.scale() * 10}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  width: 100%;
`;

const Radio = styled.div`
  background-color: ${({ paid }) => paid && colors.yellow(0.6)};
  border: 2px solid ${colors.yellow()};
  border-radius: ${layout.scale() * 30}px;
  height: ${layout.scale() * 20}px;
  margin: ${layout.scale() * 10}px;
  width: ${layout.scale() * 20}px;
`;

const NameContainer = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  flex: 1;
`;

const Text = styled.strong`
  text-decoration: ${({ paid }) => paid && 'line-through'};
`;

export default React.memo(({ data: barbecue, participants, handlePaid }) => {
  return (
    <ListView>
      {!!participants.length && participants.map(participant => (
        <ItemContainer onClick={() => handlePaid(participant)}>
          <NameContainer>
            <Radio paid={participant.paid} />
            <Text>{participant.username}</Text>
          </NameContainer>
          <Text paid={participant.paid}>
            {toCurrency((barbecue.price || 0) / participants.length)}
          </Text>
        </ItemContainer>
      ))}
    </ListView>
  );
});
