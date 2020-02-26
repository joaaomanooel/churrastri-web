import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { colors, layout, images } from '../constants';
import { t } from '../i18n';
import { resetData } from '../redux/Auth';


const TitleContainer = styled.div`
  background-image: url(${images.headerImg});
  height: ${layout.scale() * 300}px;
  background-color: ${colors.yellow()};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const Title = styled.h1`
  line-height: ${layout.scale() * 40}px;
  font-size: ${layout.scale() * 36}px;
  align-self: center;
  font-weight: 800;
`;

const LogoutContainer = styled.div`
  padding: ${layout.scale() * 20}px;
  justify-content: flex-end;
  position: absolute;
  display: flex;
  z-index: 15;
  width: 100%;
  top: 0px;
`;

const Logout = styled.a`
  line-height: ${layout.scale() * 32}px;
  font-size: ${layout.scale() * 20}px;
  font-weight: bold;
  cursor: pointer;
  :active {
    opacity: 0.75;
  }
`;

export default React.memo(() => {
  const [showLogout, setShowLogout] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') setShowLogout(false);
  }, location.pathname);

  const logout = () => {
    dispatch(resetData());
    history.push('/login');
  };

  return (
    <TitleContainer>
      <LogoutContainer>
        {showLogout && <Logout onClick={logout}>{t('logout')}</Logout>}
      </LogoutContainer>
      <Title>{t('barbecueCalendar')}</Title>
    </TitleContainer>
  );
});
