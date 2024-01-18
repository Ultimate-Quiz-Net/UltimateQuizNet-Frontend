import React, { useEffect, useState } from "react";
import { api } from "../axios/api";
import * as St from "../components/style";
import { useParams } from "react-router";
import { getAuthHeaders } from "../shared/authHeaders";
import { useNavigate } from "react-router";

function DebatesDetail() {
  // useNavigate 사용
  const navigate = useNavigate();
  // request 헤더에 인가 토큰 추가
  const headers = getAuthHeaders();
  // debates로 부터 온 id
  const { debatesId } = useParams();
  // 서버로부터 받아온 data
  const [data, setData] = useState({});
  // 서버로부터 받아온 댓글
  const [comments, setComments] = useState({});
  // 새로운 댓글 저장하는 state
  const [newComment, setNewComment] = useState("");
  // 토론 게시글 수정 state
  const [editDebates, setEditDebates] = useState(null);
  // 서버에서 데이터 받기
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!debatesId) {
          return;
        }
        const response = await api.get(`/debates/${debatesId}`);
        console.log("response 확인", response.data.data[0]);
        setData(response.data.data[0]);

        const commentsResponse = await api.get(
          `/debates/${debatesId}/comments`,
          headers
        );
        console.log("comments response 보기", commentsResponse);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("에러 발생", error);
      }
    };
    fetchData();
  }, [debatesId, headers]);

  // 토론 게시글 삭제 버튼
  const debateDetailDeleteButtonHandler = async () => {
    try {
      await api.delete(`/debates/${debatesId}`, headers);
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
  const editDebatesHandler = () => {
    setEditDebates({ ...data });
  };

  const updateDebateHandler = async () => {
    try {
      if (!debatesId) {
        console.error("수정할 퀴즈의 ID가 유효하지 않습니다.");
        return;
      }
      await api.patch(
        `/debates/${debatesId}`,
        {
          title: editDebates.title,
          content: editDebates.content,
        },
        headers
      );

      setData((prevState) => ({ ...prevState, ...editDebates }));
      setEditDebates(null);
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  // 댓글 작성
  const onCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        `/debates/${debatesId}/comments`,
        {
          content: newComment,
        },
        headers
      );

      // 새로운 댓글 추가 후 목록 갱신
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("댓글 작성 에러:", error);
    }
  };
  // 댓글 삭제
  const onCommentRemoveHandler = async (commentId) => {
    try {
      await api.delete(`/debates/${debatesId}/comments/${commentId}`, headers);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error("댓글 삭제 에러:", error);
    }
  };

  // 댓글 수정
  const onCommentUpdateHandler = async (commentId, updatedContent) => {
    try {
      await api.patch(
        `/debates/${debatesId}/comments/${commentId}`,
        {
          content: updatedContent,
        },
        headers
      );

      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.commentId === commentId
            ? { ...comment, content: updatedContent }
            : comment
        )
      );
    } catch (error) {
      console.error("댓글 수정 에러:", error);
    }
  };

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
          {!editDebates && (
            <St.TableDetailButton onClick={editDebatesHandler}>
              수정
            </St.TableDetailButton>
          )}
        </St.TableDetailButtonStyle>
        <St.TableDetailBodyStyle>
          <St.TableDetailItem>
            <St.FirstLabel>게시글 번호</St.FirstLabel>
            <St.SecondLabel>{debatesId}</St.SecondLabel>
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
            <St.SecondLabel>{data.content}</St.SecondLabel>
          </St.TableDetailItem>
          <St.TableDetailItem>
            <St.FirstLabel>작성자</St.FirstLabel>
            <St.SecondLabel>{}</St.SecondLabel>
          </St.TableDetailItem>
        </St.TableDetailBodyStyle>
        {/* 수정 모드일 때 입력 폼 표시 */}
        <St.EditFormWrapper>
          {editDebates && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <St.EditLabel>수정할 제목:</St.EditLabel>
              <St.EditInputStyle
                type="text"
                value={editDebates.title}
                onChange={(e) =>
                  setEditDebates({ ...editDebates, title: e.target.value })
                }
              />
              <St.EditLabel>수정할 내용:</St.EditLabel>
              <St.EditTextArea
                value={editDebates.content}
                onChange={(e) =>
                  setEditDebates({ ...editDebates, content: e.target.value })
                }
              />
              <St.TableDetailButton
                style={{ marginTop: "10px" }}
                onClick={updateDebateHandler}
              >
                수정 완료
              </St.TableDetailButton>
            </div>
          )}
        </St.EditFormWrapper>

        <div>
          <h3>댓글 목록</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.quizCommentId}>
                {comment?.content}
                <button
                  onClick={() => onCommentRemoveHandler(comment.quizCommentId)}
                >
                  삭제
                </button>
                <button
                  onClick={() =>
                    onCommentUpdateHandler(
                      comment.quizCommentId,
                      prompt("댓글 수정", comment.content)
                    )
                  }
                >
                  수정
                </button>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onCommentSubmit}>
          <label>
            댓글 작성:
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </label>
          <button type="submit">댓글 작성</button>
        </form>
      </div>
    </>
  );
}

export default DebatesDetail;
