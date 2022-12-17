import React from "react";
import styled from "styled-components";
import Header from '../../components/common/header';
import SignInput from '../../components/Signup/signinput';

export default function SignupPage() {
  return (
    <Background>
      <Header />
      <SignupText>SIGN UP</SignupText>
      <Underbar />
      <InputContainer>
        <SignInput />
      </InputContainer>
    </Background>
  );
}

const InputContainer = styled.div`
  width: 100%;
  height: 600px;
  text-align: center;
  margin-top: 30px;
`;

const Underbar = styled.div`
  width: 52px;
  height: 4px;
  background-color: #7b5eb4;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 40px;
`;

const SignupText = styled.p`
  font-size: 42px;
  text-align: center;
  font-weight: 650;
  color: #7b5eb4;
  margin: 80px 0px 0px 0px;
  font-family: "Pretendard";
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;
