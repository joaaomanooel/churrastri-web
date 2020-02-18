import React from 'react';
import styled from 'styled-components';
import { colors, layout } from '../constants';

export const Button = styled.button`
  border-radius: ${layout.scale() * 15}px;
  background-color: ${({ disabled }) => colors.black(disabled ? 0.3 : 0.9)};
  ${({ disabled }) => !disabled && 'cursor: pointer;'}
  margin-bottom: ${layout.scale() * 20}px;
  margin-top: ${layout.scale() * 20}px;
  font-size: ${layout.scale() * 16}px;
  padding: ${layout.scale() * 10}px;
  color: ${colors.white()};
  align-self: center;
  width: 100%;
  border: 0;
  :active {
    background-color: ${colors.black(0.78)};
  }
`;

export default React.memo(props => <Button {...props}>{props.text}</Button>);
