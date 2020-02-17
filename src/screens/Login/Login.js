/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { t } from '../../i18n';
// import { Input, Header, Button, TrincaLogo } from '../../components';
import { Container, Title, TitleContainer, Input, FormContainer, Button } from './StyledComponent';

export default ({ history, login, loading, user }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => login({ email, password });

  useEffect(() => {
    user._id && history.push('/');
  }, [user]);

  return (
    <Container>
      <TitleContainer>
        <Title>{t('barbecueCalendar')}</Title>
      </TitleContainer>
      <FormContainer>
        {t('email')}
        <Input
          onChange={({ target }) => setEmail(target.value)}
          placeholder={t('email')}
          type="email"
        />
        {t('password')}
        <Input
          onChange={({ target }) => setPassword(target.value)}
          placeholder={t('password')}
          type="password"
        />

        <Button disabled={loading} onClick={handleLogin}>
          {t('enter')}
        </Button>
      </FormContainer>
    </Container>
  );
};
