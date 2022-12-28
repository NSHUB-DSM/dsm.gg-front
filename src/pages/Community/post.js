import styled, { keyframes } from "styled-components";
import React from "react";
import SortCategoryBox from "../../components/Community/SortCategory";
import Header from "../../components/common/header";
import { ReactComponent as Label } from "../../assets/svgs/lolLabel.svg";
import useTitle from "../../components/Title/title";
import PostDetail from "./postDetail";
import postImg_1 from "../../assets/imgs/post_img_1.png"
import postImg_2 from '../../assets/imgs/post_img_2.png';

export default function PostPage() {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("커뮤니티 - DSM.GG"));

  return (
    <>
      <Header />
      <LabelStyle />
      <GameTitle>리그오브레전드</GameTitle>
      <div>
        <div>
          <SortCategoryBox />
        </div>
        <PostDetail
          title="실시간 손흥민 득점왕 선두 미쳤다"
          category="자유"
          time="4개월 전"
          username="메시보다손흥민"
          hits="조회수 1,200회"
          comments="210개"
          image={postImg_1}
          image2={postImg_2}
        />
      </div>
    </>
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
