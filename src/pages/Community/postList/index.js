import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function PostList(props) {
  return (
    <>
      <PostContainer>
        <div>
          <PostTitle to="/notice/{notice_id}">{props.title}</PostTitle>
        </div>
        <Image>
          <img src={props.image} alt="미리보기" />
        </Image>
        <Detail>
          <PostTime>{props.time}</PostTime>
          <PostByUsername>{props.username}</PostByUsername>
          <PostCategory>{props.category}</PostCategory>
        </Detail>
      </PostContainer>
    </>
  );
}

const Image = styled.div`
  margin-left: 650px;
`;

const PostCategory = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  padding-left: 19px;
  padding-top: 27px;
  letter-spacing: 0.5px;
`;

const Detail = styled.ul`
  list-style: none;
  display: flex;
  margin-top: -50px;
`;

const PostByUsername = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  padding-left: 19px;
  padding-top: 27px;
  letter-spacing: 0.5px;
`;

const PostTime = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  padding-left: 19px;
  padding-top: 27px;
  letter-spacing: 0.5px;
`;

const PostContainer = styled.article`
  width: 800px;
  height: 99px;
  border: 1px solid #dddddd;
  background-color: white;
  div {
    padding-top: 20px;
  }
`;

const PostTitle = styled(Link)`
  font-size: 16px;
  padding-left: 19px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: #7b5eb4;
    text-decoration: underline;
    opacity: 0.8;
  }
`;
