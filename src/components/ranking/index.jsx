import Header from "../common/header";
import styled from "styled-components";
import UserList from "./userList";

const RankingPage = () => {
  return (
    <>
      <Header />
      <RankingContainer>
        <Title>교내 소환자 랭킹</Title>
        <RankingList>
          <List>
            <div>
              <Ranking>순위</Ranking>
              <p>소환사</p>
            </div>
            <div>
              <Tear>티어</Tear>
              <p> LP</p>
            </div>
          </List>
          <UserList
            ranking="1"
            gamename="손흥민뜨게해줘요"
            username="조우상"
            tear="Challenger"
            point="1700"
          />
          <UserList
            ranking="2"
            gamename="Hide on bush"
            username="이상혁"
            tear="Challenger"
            point="1697"
          />
          <UserList
            ranking="3"
            gamename="T1 Gumayusi"
            username="이민형"
            tear="Master"
            point="472"
          />
          <UserList
            ranking="4"
            gamename="MIDKING"
            username="허수"
            tear="Master"
            point="370"
          />
          <UserList
            ranking="5"
            gamename="방실이방개"
            username="김유빈"
            tear="Silver2"
            point="74"
          />
        </RankingList>
      </RankingContainer>
    </>
  );
};

export default RankingPage;

const RankingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingList = styled.div`
  width: 1050px;
  height: 600px;
  border-radius: 15px;
  border: 1px solid black;
`;

const Title = styled.p`
  color: #7b5eb4;
  font-size: 45px;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const List = styled.div`
  display: flex;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  div {
    display: flex;
    margin-left: 48px;
    margin-right: 55px;
  }
`;

const Ranking = styled.p`
  margin-right: 10px;
`;

const Tear = styled.p`
  margin-right: 78px;
`;