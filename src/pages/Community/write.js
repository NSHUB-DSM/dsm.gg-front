import styled, { keyframes } from "styled-components";
import { ReactComponent as Label } from "../../assets/svgs/lolLabel.svg";
import Header from "../../components/common/header";
import SortCategoryBox from "../../components/Community/SortCategory";
import { ReactComponent as GameLogo } from "../../assets/svgs/gameLogo.svg";
import useTitle from '../../components/Title/title';

export default function WritePage() {
    const titleUpdater = useTitle("불러오는 중...")
    setTimeout(() => titleUpdater("새 글 작성 - 리그오브레전드"))

  return (
    <Background>
      <Header />
      <LabelStyle />
      <GameTitle>리그오브레전드</GameTitle>
      <SortCategoryBox />
    </Background>
  );
}

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

const GameTitle = styled.h2`
  color: white;
  margin-top: -100px;
  font-size: 30px;
  margin-left: 200px;
  animation: ${easeIn} 0.6s ease-in;
`;

const LabelStyle = styled(Label)`
  width: 100%;
  padding-bottom: 32px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }
`;
