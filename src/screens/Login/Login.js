/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { t } from '../../i18n';
import { Button, Link, Header, Input } from '../../components';
import { Container, FormContainer, SignUpText } from './StyledComponent';

export default ({ login, loading, user }) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    const formError = e => alert(`${e} ${t('isRequired')}`);
    if (!email) return formError(t('email'));
    if (!password) return formError(t('password'));
    return login({ email, password });
  };

  useEffect(() => { user._id && history.push('/'); }, [user]);

  return (
    <Container>
      <Header />
      <FormContainer>
        <Input
          required
          autoFocus
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
        <Button type="button" disabled={loading} onClick={handleLogin} text={t('enter')} />
        <SignUpText>
          {t('isMemberQuestion')}
          {' '}
          <Link onClick={() => history.push('/signup')} text={t('signUpNow')} />
        </SignUpText>
      </FormContainer>
    </Container>
  );
};
