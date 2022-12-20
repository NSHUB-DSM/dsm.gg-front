import styled, { keyframes } from 'styled-components'
import React from 'react';
import Header from '../../components/common/header';

export default function MatchingPage() {
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
  animation: ${easeIn} 1s ease-in;
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`