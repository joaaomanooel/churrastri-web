/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { t } from '../../i18n';
import { Button, Link, Header, Input } from '../../components';
import { Container, FormContainer, SignUpText } from './StyledComponent';

export default ({ history, login, loading, user }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => login({ email, password });

  useEffect(() => { user._id && history.push('/'); }, [user]);

  return (
    <Container>
      <Header />
      <FormContainer>
        <Input
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
        />
        <Button disabled={loading} onClick={handleLogin} text={t('enter')} />
        <SignUpText>{t('isMemberQuestion')} <Link text={t('signUpNow')} /></SignUpText>
      </FormContainer>
    </Container>
  );
};
