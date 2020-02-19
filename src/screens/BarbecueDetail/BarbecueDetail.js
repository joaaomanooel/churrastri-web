/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from 'react';
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
import { toCurrency } from '../../i18n';
import colors from '../../constants/colors';
import layout from '../../constants/layout';
import { Header, ListPaid } from '../../components';


export default ({ barbecue = {}, user, removeBarbecues = () => { }, history }) => {
  const date = barbecue.date ? parseISO(barbecue.date) : new Date();

  const remove = async () => {
    await removeBarbecues(barbecue._id);
    history.push('/');
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
              onClick={() => history.push(`/barbecue/forms/${barbecue._id}`)}
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
        <ListPaid data={barbecue} />
      </DetailContainer>
    </Container>
  );
};
