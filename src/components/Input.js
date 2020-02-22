import React from 'react';
import styled from 'styled-components';
import { layout } from '../constants';

const Container = styled.div`
  margin-bottom: ${layout.scale() * 10}px;
  margin-top: ${layout.scale() * 10}px;
  width: 100%;
`;

const Input = styled.input`
  border-radius: ${layout.scale() * 2}px;
  font-size: ${layout.scale() * 16}px;
  height: ${layout.scale() * 40}px;
  padding: ${layout.scale() * 10}px;
  margin: ${layout.scale() * 5}px;
  align-self: center;
  width: 100%;
  border: 0;
`;

export default React.memo(({ onChange = () => { }, label, ...props }) => {
  const handleValue = ({ target }) => onChange(target.value);
  return (
    <Container>
      {label}
      <Input {...props} onChange={handleValue} />
    </Container>
  );
});
