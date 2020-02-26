/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MdSupervisorAccount, MdMonetizationOn, MdEdit, MdDelete } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import {
  Title,
  CardDate,
  Container,
  BottomText,
  TopContainer,
  IconContainer,
  DetailContainer,
  BottomContainer,
  LeftTopComponent,
  BottomItemContainer,
  IconButton,
} from './StyledComponent';
import { toCurrency, t } from '../../i18n';
import colors from '../../constants/colors';
import layout from '../../constants/layout';
import { Header, ListPaid, Button } from '../../components';
import { ButtonContainer } from '../BarbecueForms/StyledComponent';

export default ({ barbecue = {}, user, removeBarbecues = () => { }, history, updateBarbecues }) => {
  const date = barbecue.date ? parseISO(barbecue.date) : new Date();

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
    if (barbecue.owner === user._id) {
      const users = participants.filter(i => i._id !== participant._id);
      setParticipants(sortByName([...users, { ...participant, paid: !participant.paid }]));
    }
  };

  const remove = async () => {
    await removeBarbecues(barbecue._id);
    history.push('/');
  };

  const handleSave = () => {
    // eslint-disable-next-line array-callback-return, consistent-return
    updateBarbecues({ ...barbecue, paid: participants.map((p) => { if (p.paid) return p._id; }) });
    history.push('/barbecues');
  };

  return (
    <Container>
      <Header />
      <DetailContainer>
        {barbecue.owner === user._id && (
          <IconContainer>
            <IconButton style={{ padding: 10 }} onClick={remove}>
              <MdDelete size={20} />
            </IconButton>
            <IconButton
              onClick={() => history.push(`/barbecues/forms/${barbecue._id}`)}
              style={{ padding: 10 }}
            >
              <MdEdit size={20} />
            </IconButton>
          </IconContainer>
        )}
        <TopContainer>
          <LeftTopComponent>
            <CardDate>{format(date, 'dd/MM')}</CardDate>
            <Title>{barbecue.title}</Title>
          </LeftTopComponent>
          <BottomContainer>
            <BottomItemContainer>
              <MdSupervisorAccount color={colors.yellow()} size={layout.scale() * 24} />
              <BottomText>{barbecue.participants && barbecue.participants.length || 0}</BottomText>
            </BottomItemContainer>
            <BottomItemContainer>
              <MdMonetizationOn color={colors.yellow()} size={layout.scale() * 24} />
              <BottomText>{toCurrency(barbecue.price || 0)}</BottomText>
            </BottomItemContainer>
          </BottomContainer>
        </TopContainer>
        <ListPaid data={barbecue} handlePaid={handlePaid} participants={participants} />
        <ButtonContainer>
          {barbecue.owner === user._id && (<Button text={t('save')} onClick={handleSave} />)}
        </ButtonContainer>
      </DetailContainer>
    </Container>
  );
};
