import styled from "styled-components";
import { LolPhoto } from "../../../assets/svgs";

const Room = ({ title, member, tear, kind }) => {
  return (
    <RoomContainer>
      <div>
        <img src={LolPhoto} />
      </div>
      <div>
        <Title>{title}</Title>
        <p>{member}</p>
        <p>{tear}</p>
        <p>{kind}</p>
      </div>
    </RoomContainer>
  );
};

export default Room;

const RoomContainer = styled.div`
  width: 440px;
  height: 170px;
  background-color: #7b5eb4;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 35px;
  p:not(:first-child) {
    color: white;
    font-size: 17px;
    font-weight: bold;
  }
  div:first-child {
    width: 150px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid white;
    margin-right: 20px;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 29px;
  font-weight: bold;
`;
