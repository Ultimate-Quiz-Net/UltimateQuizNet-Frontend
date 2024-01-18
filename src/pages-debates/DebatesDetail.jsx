import React, { useEffect, useState } from "react";
import { api } from "../axios/api";
import * as St from "../components/style";
import { useParams } from "react-router";
import { getAuthHeaders } from "../shared/authHeaders";
import { useNavigate } from "react-router";
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
        console.log("response 확인", response.data.data);
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
    <St.TableDetailBodyStyle>
      <St.TableDetailItem>
        <St.FirstLabel>게시글 번호</St.FirstLabel>
        <St.SecondLabel>{debateId}</St.SecondLabel>
      </St.TableDetailItem>
      <St.TableDetailItem>
        <St.FirstLabel>제목</St.FirstLabel>
        <St.SecondLabel>{}</St.SecondLabel>
      </St.TableDetailItem>
      <St.TableDetailItem>
        <St.FirstLabel>작성일</St.FirstLabel>
        <St.SecondLabel>{}</St.SecondLabel>
      </St.TableDetailItem>
      <St.TableDetailItem>
        <St.FirstLabel>내용</St.FirstLabel>
        <St.SecondLabel>{}</St.SecondLabel>
      </St.TableDetailItem>
      <St.TableDetailItem>
        <St.FirstLabel>작성자</St.FirstLabel>
        <St.SecondLabel>{}</St.SecondLabel>
      </St.TableDetailItem>
    </St.TableDetailBodyStyle>
  );

  return item;
}

function DebatesDetail() {
  // request 헤더에 인가 토큰 추가
  const headers = getAuthHeaders();
  // debates로 부터 온 id
  const { debateId } = useParams();
  // response로 받은 data 렌더링
  const item = GetData(debateId);

  const navigate = useNavigate();

  // 토론 게시글 수정 state
  const [editDebates, setEditDebates] = useState(null);

  // 토론 게시글 삭제 버튼
  const debateDetailDeleteButtonHandler = async () => {
    try {
      await api.delete(`/debates/${debateId}`, headers);
      navigate("/debates");
    } catch (error) {
      if (error.response) {
        console.log("error response 확인", error);
        const errorStatus = error.response.status;
        const errorMessage = error.response.data.message;

        if (errorStatus === 400 || errorStatus === 401) {
          alert(errorMessage);
        }
      }
    }
  };

  // 토론 게시글 수정 버튼

  return (
    <>
      <div>
        <h2
          style={{
            marginLeft: "200px",
            fontFamily: "Galmuri11, sans-serif",
            fontWeight: "bold",
            color: "orange",
          }}
        >
          게시글 상세정보
        </h2>
        <St.TableDetailButtonStyle>
          <St.TableDetailButton onClick={debateDetailDeleteButtonHandler}>
            삭제
          </St.TableDetailButton>
          <St.TableDetailButton>수정</St.TableDetailButton>
        </St.TableDetailButtonStyle>
        {item}
      </div>
    </>
  );
}

export default DebatesDetail;
