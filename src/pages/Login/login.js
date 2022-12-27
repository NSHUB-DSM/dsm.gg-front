import styled from 'styled-components';
import React from 'react';
import Header from '../../components/common/header';
import LoginInput from '../../components/Login/loginput';
import useTitle from '../../components/Title/title';

export default function LoginPage() {
    const titleUpdater = useTitle("불러오는 중...")
    setTimeout(() => titleUpdater("로그인 - DSM.GG"))

    return (
        <Background>
            <Header />
            <LoginBox>
                <LoginText>LOGIN</LoginText>
                <Underbar />
                <LoginInput />
            </LoginBox>
        </Background>
    )
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`

const Underbar = styled.div`
  width: 52px;
  height: 4px;
  border-radius: 100px;
  background-color: #7b5eb4;
  margin: 0 auto;
  margin-top: 20px;
`;

const LoginText = styled.p`
  font-size: 45px;
  text-align: center;
  font-weight: 650;
  color: #7b5eb4;
  font-family: "Pretendard"
`;

const LoginBox = styled.div`
  width: 468px;
  height: 446px;
  margin: 0 auto;
  margin-top: 150px;
`;
