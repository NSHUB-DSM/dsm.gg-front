import styled from 'styled-components';
import React from 'react';
import Header from '../../components/common/header';
import { ReactComponent as MainLogo } from "../../assets/svgs/mainLogo.svg";
import { ReactComponent as SearchLogo } from '../../assets/svgs/searchLogo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MainPage() {
    const [search, setSearch] = useState("");
    const [lists, setLists] = useState([]);
  
    const onChangeSearch = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    }
  
    return (
      <Background>
        <Header />
        <MainLogoStyle>
          <MainLogo />
        </MainLogoStyle>
        <InputBox>
          <SearchInput
            type="text"
            placeholder="소환사의 닉네임을 입력해주세요."
            onChange={onChangeSearch}
          />
        </InputBox>
        <SearchLogoButtonBox>
          <SearchLogoButton>
            <SearchLogo />
          </SearchLogoButton>
        </SearchLogoButtonBox>
      </Background>
    );
  }
  
  const SearchLogoButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
    border: none;
    cursor: pointer;
    margin-left: 320px;
  `;
  
  const SearchLogoButtonBox = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: -62px;
  `;
  
  const SearchInput = styled.input`
    width: 750px;
    height: 80px;
    border-radius: 50px;
    border: 3px solid #7b5eb4;
    font-size: 20px;
    padding-left: 30px;
  `;
  
  const InputBox = styled.div`
    width: 750px;
    height: 80px;
    margin: 0 auto;
  `;
  
  const MainLogoStyle = styled.div`
    width: 324px;
    height: 240px;
    margin: 0 auto;
    margin-top: 80px;
  `;
  const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
  `;