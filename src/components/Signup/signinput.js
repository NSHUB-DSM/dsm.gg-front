import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailRegex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const PassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function SignInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const navigate = useNavigate();

  const onEmailCheck = (e) => {
    if (!e.target.value || EmailRegex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  };

  const onPasswordCheck = (e) => {
    if (!e.target.value || PassRegex.test(e.target.value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (!confirmPassword || e.target.value === confirmPassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
    setPassword(e.target.value);
  };

  const onConfirmPasswordCheck = (e) => {
    if (password === e.target.value) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
    setConfirmPassword(e.target.value);
  };

  const onUsernameCheck = (e) => {
    if (username.length <= 7) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }

    setUsername(e.target.value);
  };

  const validation = () => {
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!confirmPassword) {
      setConfirmPasswordError(true);
    }
    if (!username) {
      setUsernameError(true);
    }

    if (email && password && confirmPassword && username) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async () => {
    if (!validation()) {
      return alert("??????????????? ?????????????????????.");
    }

    await axios
      .post("", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.code === 0) {
          alert("??????????????? ?????????????????????!");
          navigate("/user/login");
        } else {
          if (response.data.code === 10000) {
            alert("????????? ??????????????????. ?????? ??????????????? ??????????????????.");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <InputTitle>?????????</InputTitle>
      <InputBox
        type="email"
        placeholder="???????????? ???????????????."
        value={email}
        onChange={onEmailCheck}
      />
      {emailError && <EmailError>????????? ????????? ???????????? ????????????.</EmailError>}
      <InputTitle>????????????</InputTitle>
      <InputBox
        type="password"
        placeholder="??????????????? ???????????????."
        value={password}
        onChange={onPasswordCheck}
      />
      {passwordError && (
        <PasswordError>
          ??????????????? 8??? ??????????????? ??????, ????????? ????????? ?????? ??????
          ?????????????????????.
        </PasswordError>
      )}
      <InputTitle>???????????? ??????</InputTitle>
      <InputBox
        type="password"
        placeholder="??????????????? ?????? ??????????????????."
        value={confirmPassword}
        onChange={onConfirmPasswordCheck}
      />
      {confirmPasswordError && (
        <ConfirmPasswordError>
          ????????? ??????????????? ???????????? ????????????.
        </ConfirmPasswordError>
      )}
      <InputTitle>?????????</InputTitle>
      <InputBox
        type="text"
        placeholder="???????????? ??????????????????."
        onChange={onUsernameCheck}
      />
      {usernameError && (
        <UsernameError>???????????? ?????? 7????????? ?????? ???????????????.</UsernameError>
      )}
      <ButtonBox>
        <Button type="submit" onClick={onSubmit}>
          ????????????
        </Button>
      </ButtonBox>
    </>
  );
}

const UsernameError = styled.div`
  color: red;
  font-size: 12px;
  margin-right: 260px;
`;

const ButtonSignin = styled.button`
  width: 75px;
  height: 60px;
  border-radius: 5px;
  margin-top: 50px;
  background-color: white;
  border: 1px solid #7b5eb4;
`;

const ButtonBox = styled.div`
  width: 450px;
  height: 60px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 450px;
  height: 60px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: #7b5eb4;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;

const ConfirmPasswordError = styled.div`
  color: red;
  font-size: 12px;
  margin-right: 272px;
`;

const PasswordError = styled.div`
  color: red;
  font-size: 12px;
  margin-right: 100px;
`;

const EmailError = styled.div`
  color: red;
  font-size: 12px;
  margin-right: 290px;
`;

const InputTitle = styled.p`
  width: 120px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  color: #7b5eb4;
  margin-top: 20px;
  margin-left: 590px;
`;

const InputBox = styled.input`
  width: 460px;
  height: 50px;
  border: 1px solid #cecece;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 17px;
  padding-left: 18px;
`;
