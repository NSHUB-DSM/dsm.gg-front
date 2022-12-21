import { Link } from "react-router-dom";
import styled from "styled-components";

const UserList = ({ ranking, gamename, username, tear, point }) => {
  return (
    <UserListContainer>
      <div>
        <Ranking>{ranking}</Ranking>
        <div/>
        <GameName>{gamename}</GameName>
        <UserName>{username}</UserName>
      </div>
      <Right>
        <p>{tear}</p>
        <p>{point}</p>
      </Right>
    </UserListContainer>
  );
};

export default UserList;

const UserListContainer = styled(Link)`
  width: 1048px;
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  div:first-child{
    display: flex;
    align-items: center;
     div {
      width: 35px;
      height: 35px;
      border-radius: 30px;
      margin-right: 15px;
      background-color: black;
     }
  }

  :hover {
    background-color: #F2F2F2;
  }
`;

const Ranking = styled.p`
  margin-right: 24px;
  margin-left: 57px;
  font-size: 21px;
  font-weight: bold;
`;

const GameName = styled.p`
  font-size: 21px;
  font-weight: bold;
  margin-right: 20px;
`;

const UserName = styled.p`
  font-size: 15px;
  color: #9c9c9c;
`;

const Right = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
  p {
    font-size: 21px;
    font-weight: bold;
  }
`;