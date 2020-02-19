import styled from 'styled-components';
import React, { useState } from 'react';
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
  flex-direction: row;
  display: flex;
  width: 100%;
`;

const Radio = styled.div`
  background-color: ${({ paid }) => paid && colors.yellow(0.6)};
  border: 2px solid ${colors.yellow()};
  border-radius: 30px;
  height: 20px;
  margin: 10px;
  width: 20px;
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

export default React.memo(({ data: barbecue }) => {
  const sortByName = e => e.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt < b.createdAt) return -1;
    if (a._id > b._id) return 1;
    if (a._id < b._id) return -1;
    return 0;
  });

  const [participants, setParticipants] = useState(sortByName(barbecue.participants || []));

  const handlePaid = (participant) => {
    const users = participants.filter(i => i._id !== participant._id);
    setParticipants(sortByName([...users, { ...participant, paid: !participant.paid }]));
  };

  return (
    <ListView>
      {!!participants.length && participants.map(participant => (
        <ItemContainer onClick={() => handlePaid(participant)}>
          <NameContainer>
            <Radio paid={participant.paid} />
            <Text>{participant.name}</Text>
          </NameContainer>
          <Text paid={participant.paid}>
            {toCurrency((barbecue.price || 0) / participants.length)}
          </Text>
        </ItemContainer>
      ))}
    </ListView>
  );
});
