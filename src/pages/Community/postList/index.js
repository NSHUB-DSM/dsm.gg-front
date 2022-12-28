import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function PostList(props) {
  return (
    <PostContainer>
      <div>
        <Left>
          <PostTitle to="/board/{id}">{props.title}</PostTitle>
          <Detail>
            <PostTime>{props.time}</PostTime>
            <PostByUsername>{props.username}</PostByUsername>
            <PostCategory>{props.category}</PostCategory>
          </Detail>
        </Left>
        <img src={props.image} alt="미리보기" />
      </div>
    </PostContainer>
  );
}

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostCategory = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  letter-spacing: 0.1px;
`;

const Detail = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 20px;
`;

const PostByUsername = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 20px;
`;

const PostTime = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 20px;
  letter-spacing: 0.1px;
`;

const PostContainer = styled.article`
  width: 800px;
  height: 100px;  
  border: 1px solid #dddddd;
  background-color: white;
  margin-bottom: 20px;
  cursor: pointer;
  div:first-child {
    display: flex;
    justify-content: space-between;
  }
  img {
    margin-top: 13px;
    margin-right: 13px;
  }
  :hover {
    background-color: #fdfdfd;
  }
`;

const PostTitle = styled(Link)`
  font-size: 16px;
  margin-left: 19px;
  padding-top: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #7b5eb4;
    text-decoration: underline;
    opacity: 0.8;
  }
`;
