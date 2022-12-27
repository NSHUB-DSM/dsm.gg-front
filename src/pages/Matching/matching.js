import styled, { keyframes } from "styled-components";
import React from "react";
import Header from "../../components/common/header";
import useTitle from "../../components/Title/title";
import Room from "./room";

export default function MatchingPage() {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("매칭 찾기 - 리그오브레전드"));
  return (
    <MatchingBackground>
      <Header />
      <Title>매칭 찾기</Title>
      <Wrapper>
        <Box>
          <Room
            title="플래이상"
            member="2명"
            tear="플래티넘"
            kind="개인/2인 랭크"
          />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
        </Box>
      </Wrapper>
    </MatchingBackground>
  );
}

const Title = styled.p`
  font-size: 40px;
  font-weight: 650;
  color: #7b5eb4;
  text-align: center;
  margin-top: 40px;
`;

const Box = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const MatchingBackground = styled.div`
  width: 100%;
  background-color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
