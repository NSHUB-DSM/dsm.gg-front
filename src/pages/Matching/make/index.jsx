import styled, { keyframes } from "styled-components";
import Header from "../../../components/common/header";

const MakeMatching = () => {
  return (
    <>
      <Header />
      <MakeContainer>
        <Title>매칭 생성</Title>
        <RoomTitle placeholder="방 제목" />
        <div>
          <p>티어 : </p>
          <TearChoice>
            <option>아이언</option>
            <option>브론즈</option>
            <option>실버</option>
            <option>골드</option>
            <option>플래티넘</option>
            <option>다이아</option>
            <option>마스터</option>
            <option>그랜드마스터</option>
            <option>챌린저</option>
          </TearChoice>
        </div>
        <div>
          <p>인원 : </p>
          <MemberNum>
            <option>1명</option>
            <option>2명</option>
            <option>3명</option>
            <option>4명</option>
            <option>5명</option>
          </MemberNum>
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
  > div {
    display: flex;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 650;
  color: #7b5eb4;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const RoomTitle = styled.input`
  width: 700px;
  height: 45px;
  border: 1px solid #7b5eb4;
  border-radius: 5px;
  font-size: 16px;
`;

const TearChoice = styled.select``;

const MemberNum = styled.select``;
