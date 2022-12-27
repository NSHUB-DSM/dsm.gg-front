import styled, { keyframes } from "styled-components";
import { ReactComponent as Label } from "../../assets/svgs/lolLabel.svg";
import Header from "../../components/common/header";
import SortCategoryBox from "../../components/Community/SortCategory";
import { ReactComponent as GameLogo } from "../../assets/svgs/gameLogo.svg";
import useTitle from "../../components/Title/title";
import PostList from "./postList";
import preimage_1 from "../../assets/imgs/pre_image_1.png";

export default function CommunityPage() {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("커뮤니티 - DSM.GG"));

  return (
    <Background>
      <Header />
      <LabelStyle />
      <GameTitle>리그오브레전드</GameTitle>
      <div>
        <div>
          <SortCategoryBox />
        </div>
        <PostArea>
          <PostList
            title="히샤를리송 미친 원더골 ㄷㄷ"
            time="1시간 전"
            username="호날두발냄새"
            category="자유"
            image={preimage_1}
          />
          <PostList
            title="히샤를리송 미친 원더골 ㄷㄷ"
            time="1시간 전"
            username="호날두발냄새"
            category="자유"
            image={preimage_1}
          />
          <PostList
            title="히샤를리송 미친 원더골 ㄷㄷ"
            time="1시간 전"
            username="호날두발냄새"
            category="자유"
            image={preimage_1}
          />
           <PostList
            title="히샤를리송 미친 원더골 ㄷㄷ"
            time="1시간 전"
            username="호날두발냄새"
            category="자유"
            image={preimage_1}
          />
        </PostArea>
      </div>
    </Background>
  );
}

const PostArea = styled.div`
  float: right;
  width: 65%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

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
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }
`;
