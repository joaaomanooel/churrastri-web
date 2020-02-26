import styled from 'styled-components';
import { colors, layout } from '../../constants';

export const Container = styled.div`
  background-color: ${colors.yellow()};
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
`;

export const FormContainer = styled.div`
  margin-top: ${layout.scale() * -20}px;
  width: ${layout.screenWidth * 0.3}px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  display: flex;
`;
