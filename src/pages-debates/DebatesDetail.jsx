import React, { useEffect, useState } from "react";
import { api } from "../axios/api";
import * as St from "../components/style";
import { useParams } from "react-router";

function GetData() {
  const { debateId } = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!debateId) {
          return;
        }
        const response = await api.get(`/debates/${debateId}`);
        console.log("response 확인", response);
        setData(response.data.data);

        const commentsResponse = await api.get(`/debates/${debateId}/comments`);
        console.log("comments response 보기", commentsResponse);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };
    fetchData();
  }, [debateId]);

  const item = (
    <>
      <h2>게시글 상세정보</h2>
      <St.TableDetailBodyStyle>
        <St.TableDetailItem>
          <St.FirstLabel>게시글 번호</St.FirstLabel>
          <St.SecondLabel>{data.debateId}</St.SecondLabel>
        </St.TableDetailItem>
        <St.TableDetailItem>
          <St.FirstLabel>제목</St.FirstLabel>
          <St.SecondLabel>{data.title}</St.SecondLabel>
        </St.TableDetailItem>
        <St.TableDetailItem>
          <St.FirstLabel>작성일</St.FirstLabel>
          <St.SecondLabel>{data.createdAt}</St.SecondLabel>
        </St.TableDetailItem>
        <St.TableDetailItem>
          <St.FirstLabel>내용</St.FirstLabel>
          <St.SecondLabel>{data.createdAt}</St.SecondLabel>
        </St.TableDetailItem>
      </St.TableDetailBodyStyle>
    </>
  );
  return item;
}

function DebatesDetail() {
  const { debateId } = useParams();
  const item = GetData(debateId);
  return (
    <>
      <div>{item}</div>
    </>
  );
}

export default DebatesDetail;
