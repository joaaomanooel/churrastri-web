import React, { useState, useEffect } from 'react';
import { Header, Input } from '../../components';
import { t, toCurrency } from '../../i18n';

import { Container } from './StyledComponent';

export default ({
  updateBarbecues,
  removeBarbecues,
  addBarbecues,
  navigation,
  users: usr,
  barbecue = {},
  loading,
  user,
}) => {
  const [title, setTitle] = useState(barbecue.title);
  const [description, setDescription] = useState(barbecue.description);
  const [price, setPrice] = useState(barbecue.price || toCurrency(0));
  const [date, setDate] = useState(barbecue.date);
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
    navigation.navigate('Barbecues');
  };

  const save = (data) => {
    addBarbecues(data);
    navigation.navigate('Barbecues');
  };

  const handleSave = () => {
    if (!title) return alert(`${t('title')} ${t('isRequired')}`);
    const participantsId = participants.map(p => p._id);
    const data = {
      participants: participantsId,
      price: unformatedPrice(),
      description,
      title,
      date,
    };
    barbecue.owner ? update(data) : save(data);
    return navigation.goBack();
  };

  const remove = () => {
    removeBarbecues(barbecue._id);
    navigation.navigate('Barbecues');
  };
  return (
    <Container>
      <Header />
    </Container>
  );
};
