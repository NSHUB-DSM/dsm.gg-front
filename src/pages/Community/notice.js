import styled from "styled-components";
import { ReactComponent as Label } from "../../assets/svgs/lolLabel.svg";
import Header from "../../components/common/header";
import SortCategoryBox from "../../components/Community/SortCategory";
import { ReactComponent as GameLogo } from '../../assets/svgs/gameLogo.svg';


export default function CommunityPage() {
  return (
    <Background>
        <Header />
        <LabelStyle />
        <GameTitle>리그오브레전드</GameTitle>
        <SortCategoryBox />
    </Background>
  );
}

const GameTitle = styled.h2`
  color: white;
  margin-top: -100px;
  font-size: 30px;
  margin-left: 200px;
`
const LogoStyle = styled.div`
  width: 64px;
  height: 69px;
`

const LabelStyle = styled(Label)`
  width: 100%;
  padding-bottom: 32px;
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;
`;
