import React from 'react';
import styled from 'styled-components'

export const SignUpLink = styled.a`
  font-weight: bold;
  cursor: pointer;
`;

export default React.memo((props) => <SignUpLink {...props}>{props.text}</SignUpLink> );
