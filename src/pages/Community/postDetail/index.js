import styled from "styled-components";
import React from "react";

export default function PostDetail(props) {
  return (
    <PostContainer>
      <PostTitle>{props.title}</PostTitle>
      <Detail>
        <PostCategory>{props.category}</PostCategory>
        <PostTime>{props.time}</PostTime>
        <PostByUsername>{props.username}</PostByUsername>
      </Detail>
      <MoreDetail>
        <Hits>{props.hits}</Hits>
        <Comments>{props.comments}</Comments>
      </MoreDetail>
      <ImgContainer>
        <img src={props.image} alt="이미지" />
        <img src={props.image2} alt="이미지2" />
      </ImgContainer>
    </PostContainer>
  );
}

const ImgContainer = styled.div`
  margin-left: 100px;
  margin-top: 100px;
`;

const Comments = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-left: 10px;
`;

const Hits = styled.li`
  font-size: 14px;
  color: #8a8a8a;
`;

const MoreDetail = styled.ul`
  list-style: none;
  display: flex;
  float: right;
  margin-top: -15px;
  margin-right: 20px;
`;

const PostByUsername = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 20px;
`;

const PostTime = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 10px;
  letter-spacing: 0.5px;
`;

const PostCategory = styled.li`
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 10px;
`;

const Detail = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  width: 259px;
`;

const PostTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  padding-top: 30px;
  padding-left: 20px;
`;

const PostContainer = styled.div`
  width: 765px;
  height: 1036px;
  margin-left: 600px;
  margin-top: 40px;
  background-color: white;
  border: 1px solid #cecece;
`;
