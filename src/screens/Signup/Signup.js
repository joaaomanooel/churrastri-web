import React, { useState, useEffect } from 'react';
import { t } from '../../i18n';
import { Button, Header, Input } from '../../components';
import { Container, FormContainer } from './StyledComponent';

export default ({ history, createUser, loading, user, error }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const handleCreate = () => {
    const formError = e => alert(`${e} ${t('isRequired')}`);
    if (!name) return formError(t('name'));
    if (!username) return formError(t('username'));
    if (!email) return formError(t('email'));
    if (!regexEmail.test(email)) return alert(`${t('email')} ${t('incorrect')}`);
    if (!password) return formError(t('password'));
    if (!confirmPassword) return formError(`${t('confirm')} ${t('password')}`);
    if (password !== confirmPassword) return alert(`${t('password')} ${t('incorrect')}`);

    return createUser({ email, password, name, username });
  };

  useEffect(() => { user._id && history.push('/'); }, [user]);
  useEffect(() => { error && alert(t('createError')); }, [error]);

  return (
    <Container>
      <Header />
      <FormContainer>
        <Input
          required
          value={name}
          label={t('name')}
          onChange={setName}
          placeholder={t('name')}
        />
        <Input
          placeholder={t('username')}
          value={username.trim().toLowerCase()}
          onChange={setUsername}
          label={t('username')}
          maxlength={20}
          required
        />
        <Input
          required
          type="email"
          value={email}
          label={t('email')}
          onChange={setEmail}
          placeholder={t('email')}
        />
        <Input
          placeholder={t('password')}
          onChange={setPassword}
          label={t('password')}
          value={password}
          type="password"
          required
        />
        <Input
          required
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          label={`${t('confirm')} ${t('password')}`}
          placeholder={`${t('confirm')} ${t('password')}`}
        />
        <Button disabled={loading} onClick={handleCreate} text={t('enter')} />
      </FormContainer>
    </Container>
  );
};
