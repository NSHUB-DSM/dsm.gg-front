import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SortCategoryBox() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Container>
        <SortContainer>
          <Title>전체</Title>
          <ItemList>
            <Item>
              <SortBtn>🗓 최신순</SortBtn>
            </Item>
            <Item>
              <SortBtn>🔥 인기순</SortBtn>
            </Item>
          </ItemList>
        </SortContainer>
        <Underline />
        <CategoryContainer>
          <Title>분류</Title>
          <ItemList>
            <Item>
              <CategoryBtn>자유</CategoryBtn>
            </Item>
            <Item>
              <CategoryBtn>유머</CategoryBtn>
            </Item>
            <Item>
              <CategoryBtn>영상</CategoryBtn>
            </Item>
          </ItemList>
          <WriteBtn onClick={handleClick}>글쓰기</WriteBtn>
        </CategoryContainer>
      </Container>
    </>
  );
}

const WriteBtn = styled.button`
  font-size: 14px;
  color: #1f7bfc;
  margin-left: 200px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
  background-color: white;
  cursor: pointer;
`;

const CategoryBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #dab0f8;
  }
`;

const CategoryContainer = styled.div`
  width: 268px;
  height: 198px;
`;

const Underline = styled.div`
  width: 191px;
  height: 0px;
  border-bottom: 1px solid #e7e7e7;
  margin-left: 30px;
`;

const SortBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: #dab0f8;
  }
`;

const Item = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
  padding-top: 15px;
  padding-left: 20px;
`;

const ItemList = styled.ul``;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
`;

const SortContainer = styled.div`
  width: 267px;
  height: 172px;
`;

const Container = styled.div`
  width: 268px;
  height: 392px;
  border: 0.5px solid #c6c6c6;
  background-color: #ffffff;
  margin-left: 200px;
  margin-top: 70px;
`;
