import styled, { keyframes } from 'styled-components'
import React from 'react';
import Header from '../../components/common/header';
import useTitle from '../../components/Title/title';

export default function MatchingPage() {
    const titleUpdater = useTitle("불러오는 중...")
    setTimeout(() => titleUpdater("매칭 찾기 - 리그오브레전드"))

    return (
        <Background>
            <Header />
            <Box>
                <Title>매칭 찾기</Title>
            </Box>
        </Background>
    )
}

const Title = styled.p`
  font-size: 40px;
  font-weight: 650;
  color: #7B5EB4;
  text-align: center;
  margin-top: 40px;
`

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`

const Box = styled.div`
  width: 335px;
  height: 93px;
  margin: 0 auto;
  animation: ${easeIn} 0.7s ease-in
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`