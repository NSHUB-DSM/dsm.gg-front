import styled, { keyframes } from "styled-components";
import Header from "../../../components/common/header";
import { useState } from "react";

const MakeMatching = () => {
  return (
    <>
      <Header />
      <MakeContainer>
        <Title>매칭 생성</Title>
        <div>
          <RoomInputBackground>
            <RoomName>방 제목</RoomName>
            <RoomTitle
              placeholder="제목을 입력하세요."
              type="text"
              maxLength={20}
            />
          </RoomInputBackground>
          <div>
            <RoomName>티어제한</RoomName>
            <select>
              <option>아이언</option>
              <option>브론즈</option>
              <option>실버</option>
              <option>골드</option>
              <option>플래티넘</option>
              <option>다이아</option>
              <option>마스터</option>
              <option>그랜드마스터</option>
              <option>챌린저</option>
            </select>
          </div>
          <div>
            <RoomName>인원</RoomName>
            <select>
              <option>1명</option>
              <option>2명</option>
              <option>3명</option>
              <option>4명</option>
              <option>5명</option>
            </select>
          </div>
          <div>
            <RoomName>종류</RoomName>
            <select>
              <option>일반전</option>
              <option>개인랭크</option>
              <option>자유랭크</option>
              <option>칼바람</option>
              <option>우르프</option>
              <option>롤토체스</option>
              <option>사용자 설정</option>
            </select>
          </div>
          <CreateButton>생성</CreateButton>
        </div>
      </MakeContainer>
    </>
  );
};

export default MakeMatching;

const MakeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 15px;
    div {
      margin-bottom: 40px;
    }
  }
  select {
    width: 650px;
    height: 50px;
    font-size: 18px;
    border: 1px solid #7b5eb4;
    border-radius: 5px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 650;
  color: #7b5eb4;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const RoomInputBackground = styled.div`
  flex-direction: column;
  margin-bottom: 60px;
`;

const RoomName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const RoomTitle = styled.input`
  width: 650px;
  height: 45px;
  border: 1px solid #7b5eb4;
  border-radius: 5px;
  font-size: 16px;
`;

const CreateButton = styled.button`
  width: 650px;
  height: 50px;
  border-radius: 5px;
  background-color: #7b5eb4;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    background-color: #624b90;
  }
`;