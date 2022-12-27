import styled from "styled-components";
import { LolPhoto } from "../../../assets/svgs"

const Room = ({title, member, tear, kind}) => {
  return (
    <RoomContainer>
      <img src={LolPhoto}/>
      <Title>{title}</Title>
      <p>{member}</p>
      <p>{tear}</p>
      <p>{kind}</p>
    </RoomContainer>
  )
}

export default Room;

const RoomContainer = styled.div`
  width: 440px;
  height: 170px;
  background-color: #7b5eb4;
  border-radius: 20px;
  cursor: pointer;
  margin: 35px;
  p:not(:first-child) {
    color: white;
    font-size: 17px;
    font-weight: bold;
  } 
`;

const Title = styled.p`
  color: white;
  font-size: 32px;
  font-weight: bold;
`;