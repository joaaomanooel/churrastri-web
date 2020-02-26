import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { parseISO, format } from 'date-fns';
import { Header, Button } from '../../components';
import { t, toCurrency } from '../../i18n';

import {
  Input,
  Container,
  ButtonContainer,
  DetailContainer,
  InputsInLineView,
} from './StyledComponent';
import { colors, layout } from '../../constants';

export default ({ updateBarbecues, addBarbecues, history, users: usr, barbecue = {}, user }) => {
  const barbecuePrice = toCurrency(parseFloat(barbecue.price || 0));
  const barbecueDate = barbecue.date ? parseISO(barbecue.date) : new Date();
  const [title, setTitle] = useState(barbecue.title);
  const [description, setDescription] = useState(barbecue.description);
  const [price, setPrice] = useState(barbecuePrice || toCurrency(0));
  const [date, setDate] = useState(format(barbecueDate, 'yyyy-MM-dd'));
  const [participants, setParticipants] = useState(barbecue.participants || []);
  const [users, setUsers] = useState(usr || []);

  const handleUsers = () => {
    const userParticipant = users.map(u => ({
      ...u,
      selected: !!participants.find(p => p._id === u._id),
    }));
    setUsers(userParticipant);
  };

  useEffect(() => {
    if (usr) setUsers(usr);
  }, [usr]);

  useEffect(() => {
    setParticipants(participants.map(p => ({ ...p, selected: true })));
  }, []);

  useEffect(() => {
    handleUsers();
  }, [participants, usr]);

  const unformatedPrice = () => price && price.replace('R$ ', '').replace(',', '.');

  const handlePrice = () => {
    const newPrice = unformatedPrice();
    newPrice && setPrice(toCurrency(parseFloat(newPrice || 0)));
  };

  const update = (data) => {
    updateBarbecues({ ...data, _id: barbecue._id });
    history.push('/barbecues');
  };

  const save = (data) => {
    addBarbecues(data);
    history.push('/barbecues');
  };

  const handleSave = () => {
    if (!title) return alert(`${t('title')} ${t('isRequired')}`);
    const participantsId = participants.map(p => p._id);
    const data = {
      participants: participantsId,
      price: unformatedPrice(),
      description,
      title,
      date: parseISO(date),
    };
    barbecue.owner ? update(data) : save(data);
    return history.push('/barbecues');
  };
  const MultiselectStyle = {
    inputField: { fontSize: layout.scale() * 16, alignSelf: 'center', height: layout.scale() * 30 },
    option: { background: colors.white(), color: colors.black() },
    chips: { background: colors.yellow() },
    multiselectContainer: {
      display: 'flex',
      alignSelf: 'center',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: layout.scale() * 10,
      marginTop: layout.scale() * 10,
    },
    searchBox: {
      width: '100%',
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  };

  const onSelectParticipants = (selectedList) => {
    setParticipants(selectedList);
  };

  const onRemoveParticipants = (selectedList, removedItem) => {
    const selectedParticipants = selectedList.filter(s => s._id !== removedItem._id);
    setParticipants(selectedParticipants);
  };

  return (
    <Container>
      <Header />
      <DetailContainer>
        <Input
          placeholder={t('title')}
          onChange={setTitle}
          label={t('title')}
          value={title}
          autoFocus
          required
        />
        <Input
          placeholder={t('description')}
          onChange={setDescription}
          label={t('description')}
          value={description}
          size={140}
        />
        <InputsInLineView>
          <Input
            placeholder={t('price')}
            onBlur={handlePrice}
            onChange={setPrice}
            label={t('price')}
            value={price}
          />
          <Input
            onChange={setDate}
            label={t('date')}
            value={date}
            type="date"
          />
        </InputsInLineView>
        <Multiselect
          options={users.filter(u => u._id !== user._id)}
          emptyRecordMsg={t('noUserAvailable')}
          placeholder={`${t('select')}...`}
          onSelect={onSelectParticipants}
          onRemove={onRemoveParticipants}
          selectedValues={participants}
          style={MultiselectStyle}
          displayValue="username"
        />
        <ButtonContainer>
          <Button text={t('save')} onClick={handleSave} />
        </ButtonContainer>
      </DetailContainer>
    </Container>
  );
};
