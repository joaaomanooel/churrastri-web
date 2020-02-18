import styled from 'styled-components';
import { colors, layout } from '../../constants';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
`;

export const CardContainer = styled.div`
  margin-top: ${layout.scale() * -50}px;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
`;

export const Card = styled.div`
  -webkit-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  -moz-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  border-radius: ${layout.scale() * 2}px;
  background-color: ${colors.white()};
  height: ${layout.scale() * 200}px;
  width: ${layout.scale() * 300}px;
  margin: ${layout.scale() * 15}px;
`;

export const SignUpText = styled.label`
  font-size: ${layout.scale() * 12}px;
  align-self: center;
`;
