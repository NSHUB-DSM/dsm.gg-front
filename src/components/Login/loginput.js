import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EmailLogo } from '../../assets/svgs/email.svg';
import { ReactComponent as LockerLogo } from '../../assets/svgs/locker.svg';

export default function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.message === "SUCCESS") {
        window.localStorage.setItem("token", response.accessToken);
        navigate("/");
      } else {
        alert("아이디 및 비밀번호가 일치하지 않습니다.");
      }
    });
   }

   return (
    <>
      <EmailInput
        placeholder="이메일을 입력하세요"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <EmailLogoBox>
        <EmailLogo />
      </EmailLogoBox>
      <PasswordInput
        placeholder="비밀번호를 입력하세요"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <LockerLogoBox>
        <LockerLogo />
      </LockerLogoBox>
      <Button onClick={onLogin}>로그인</Button>
      <ForgotStyle to="/">비밀번호를 잊으셨나요?</ForgotStyle>
      <SignupStyle to="/user/signup">
        아직 DSM.GG의 회원이 아니신가요?
      </SignupStyle>
    </>
  );
}   

const SignupStyle = styled(Link)`
  color: #1e5bd0;
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

const ForgotStyle = styled(Link)`
  color: #1e5bd0;
  font-size: 15px;
  margin-left: 50px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;


const Button = styled.button`
  width: 468px;
  height: 70px;
  background-color: #7b5eb4;
  border: none;
  border-radius: 5px;
  margin-top: 60px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;

const LockerLogoBox = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 20px;
  margin-top: -49px;
`;

const PasswordInput = styled.input`
  width: 460px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin-top: 30px;
  font-size: 17px;
  padding-left: 70px;
`;

const EmailLogoBox = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 20px;
  margin-top: -45px;
`;

const EmailInput = styled.input`
  width: 460px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin-top: 30px;
  font-size: 17px;
  padding-left: 70px;
`;