import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizDetailBoxStyle } from '../shared/styled';
import { api } from '../axios/api';
import { getAuthHeaders } from '../shared/authHeaders';
const inputStyle = {
    border: '0',
    borderRadius: '3px',
    backgroundColor: 'rgb(233, 233, 233)',
};
function QuizDetailPage() {
    const headers = getAuthHeaders();
    const [quizzes, setQuizzes] = useState({}); // 게시물 목록 저장하는 state
    const [editableQuiz, setEditableQuiz] = useState(null); // 수정할 데이터를 저장하는 state
    const [comments, setComments] = useState([]); // 댓글 목록을 저장하는 state
    const [newComment, setNewComment] = useState(''); // 새로운 댓글을 저장하는 state
    const { quizId } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!quizId) {
                    // 유효한 quizId가 없다면 요청을 보내지 않음
                    return;
                }
                const response = await api.get(`/quizzes/${quizId}`, headers);
                setQuizzes(response.data);

                // 해당 퀴즈에 대한 댓글 가져오기
                const commentsResponse = await api.get(`/quizzes/${quizId}/quizComments`, headers);
                setComments(prevComments => [...prevComments, ...commentsResponse.data.comments]);
            } catch (error) {
                console.error("에러 발생:", error);
            }
        };
        fetchData();
    }, [quizId]);

    const navigate = useNavigate();

    const handleMainButtonClick = () => {
        navigate("/home");
    }

    // 본문 삭제 
    const onRemoveHandler = async () => {
        try {
            await api.delete(`/quizzes/${quizId}`, headers);
            navigate("/home");
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    // 본문 수정 
    const handleUpdateButtonClick = () => {
        setEditableQuiz({ ...quizzes }); // 현재 퀴즈 데이터를 편집 가능한 상태로 설정
    };

    const onUpdateHandler = async () => {
        try {
            if (!quizId) {
                console.error("수정할 퀴즈의 ID가 유효하지 않습니다.");
                return;
            }
            await api.patch(`/quizzes/${quizId}`, {
                title: editableQuiz.title,
                content: editableQuiz.content,
                // 이미지는 추후 추가
            }, headers);

            setQuizzes(prevState => ({ ...prevState, ...editableQuiz })); // 수정된 데이터로 업데이트
            setEditableQuiz(null); // 수정 모드 종료
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    // 댓글 작성
    const onCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/quizzes/${quizId}/quizComments`, {
                content: newComment,
            }, headers);
            // 새로운 댓글 추가 후 목록 갱신
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error("댓글 작성 에러:", error);
        }
    };
    // 댓글 삭제
    const onCommentRemoveHandler = async (commentId) => {
        try {
            await api.delete(`/quizzes/${quizId}/quizComments/${commentId}`, headers);
            setComments(prevComments => prevComments.filter(comment => comment.quizCommentId !== commentId));
        } catch (error) {
            console.error("댓글 삭제 에러:", error);
        }
    };

    // 댓글 수정
    const onCommentUpdateHandler = async (commentId, updatedContent) => {
        try {
            await api.patch(`/quizzes/${quizId}/quizComments/${commentId}`, {
                content: updatedContent,
            }, headers);

            setComments(prevComments =>
                prevComments.map(comment =>
                    comment.quizCommentId === commentId ? { ...comment, content: updatedContent } : comment
                )
            );
        } catch (error) {
            console.error("댓글 수정 에러:", error);
        }
    };
    return (
        <QuizDetailBoxStyle>
            <h2>제목: {quizzes.title}</h2>
            <img src={quizzes?.imageURL} className="card-img-top" alt="Card image cap" />
            <p>내용: {quizzes.content}</p>

            {/* 수정 모드일 때 입력 폼 표시 */}
            {editableQuiz && (
                <div>
                    <label>수정할 제목:</label>
                    <input
                        type="text"
                        value={editableQuiz.title}
                        onChange={(e) => setEditableQuiz({ ...editableQuiz, title: e.target.value })}
                        style={inputStyle}
                    />
                    <br />
                    <br />
                    <label>수정할 내용:</label>
                    <textarea
                        value={editableQuiz.content}
                        onChange={(e) => setEditableQuiz({ ...editableQuiz, content: e.target.value })}
                        style={inputStyle}
                    />
                    <button onClick={onUpdateHandler}>수정 완료</button>
                </div>
            )}

            {!editableQuiz && headers.headers.Authorization && (
                <>
                    <button onClick={handleUpdateButtonClick}>수정</button>
                    <button onClick={() => onRemoveHandler(quizzes.quizId)}>삭제</button>
                </>
            )}

            <button onClick={handleMainButtonClick}>
                main으로 이동
            </button>

            <div>
                <br />
                <h3>댓글 목록</h3>
                {comments ? (
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.quizCommentId}>
                                {comment.content} &nbsp;
                                {headers.headers.Authorization && (
                                    <>
                                        <button onClick={() => onCommentRemoveHandler(comment.quizCommentId)}>삭제</button>
                                        <button onClick={() => onCommentUpdateHandler(comment.quizCommentId, prompt('댓글 수정', comment.content))}>수정</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>댓글이 없습니다.</p>
                )}
            </div>

            {headers.headers.Authorization && (
                <form onSubmit={onCommentSubmit}>
                    <label>
                        댓글 작성:
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            style={inputStyle}
                        />
                    </label>
                    <button type="submit">댓글 작성</button>
                </form>
            )}
        </QuizDetailBoxStyle>
    );
}

export default QuizDetailPage;