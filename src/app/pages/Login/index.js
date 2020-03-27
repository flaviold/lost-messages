import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

import { Container, LoginContainer, InputContainer, LoginButton, Title } from './styles';
import Logo from '../../../Logo';

export default function Login() {
  return (
    <Container>
      <Logo></Logo>
      <LoginContainer>
        <Title>Lost Messages</Title>
        <InputContainer>
          <input type="text" placeholder="Email"/>
          <FaUser />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="Password"/>
          <FaLock />
        </InputContainer>
        <LoginButton>Login</LoginButton>
      </LoginContainer>
    </Container>
  );
}
