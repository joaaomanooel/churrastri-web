import styled from 'styled-components';
import { colors, layout } from '../../constants';

export const Container = styled.div`
  background-color: ${colors.yellow()};
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
`;

export const TitleContainer = styled.div`
  height: ${layout.screenHeight * 0.4}px;
  background-color: ${colors.yellow()};
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 50;
`;

export const Title = styled.h1`
  font-size: ${layout.scale() * 36}px;
  align-self: center;
`;

export const FormContainer = styled.div`
  width: ${layout.screenWidth * 0.5}px;
  flex-direction: column;
  align-self: center;
  display: flex;
`;

export const Input = styled.input`
  font-size: ${layout.scale() * 16}px;
  padding: ${layout.scale() * 10}px;
  margin: ${layout.scale() * 20}px;
  align-self: center;
  width: 100%;
  border: 0;
`

export const Button = styled.button`
  border-radius: ${layout.scale() * 15}px;
  background-color: ${colors.black(0.9)};
  margin-top: ${layout.scale() * 30}px;
  width: ${layout.screenWidth * 0.3}px;
  font-size: ${layout.scale() * 16}px;
  padding: ${layout.scale() * 10}px;
  color: ${colors.white()};
  align-self: center;
  cursor: pointer;
  border: 0;
  :active {
    background-color: ${colors.black(0.78)};
  }
`;
