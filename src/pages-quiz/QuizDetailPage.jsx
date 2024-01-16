import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizDetailBoxStyle } from '../shared/styled';
import { api } from '../axios/api';

function QuizDetailPage() {
    const [quizzes, setQuizzes] = useState([]);
    const [editableQuiz, setEditableQuiz] = useState(null); // 수정할 데이터를 저장하는 state
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response } = await api.get(`/quizzes/${id}`);
                setQuizzes(response.data);
            } catch (error) {
                console.error("에러 발생:", error);
            }
        };
        fetchData();
    }, [editableQuiz]); 

    const navigate = useNavigate();

    const handleMainButtonClick = () => {
        navigate("/home");
    }

    // 본문 삭제 
    const onRemoveHandler = async (id) => {
        try {
            await api.delete(`/quizzes/${id}`);
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
            await api.patch(`/quizzes/${editableQuiz.id}`, {
                title: editableQuiz.title,
                content: editableQuiz.content,
                category: editableQuiz.category,
                image: editableQuiz.image,
            });

            setQuizzes({ ...editableQuiz }); // 수정된 데이터로 업데이트
            setEditableQuiz(null); // 수정 모드 종료
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    return (
        <QuizDetailBoxStyle>
            <h2>제목: {quizzes.title}</h2>
            <img src={quizzes?.image} className="card-img-top" alt="Card image cap" />
            <p>내용: {quizzes.content}</p>
            
            {/* 수정 모드일 때 입력 폼 표시 */}
            {editableQuiz && (
                <div>
                    <label>수정할 제목:</label>
                    <input
                        type="text"
                        value={editableQuiz.title}
                        onChange={(e) => setEditableQuiz({ ...editableQuiz, title: e.target.value })}
                    />
                    <label>수정할 내용:</label>
                    <textarea
                        value={editableQuiz.content}
                        onChange={(e) => setEditableQuiz({ ...editableQuiz, content: e.target.value })}
                    />
                    <button onClick={onUpdateHandler}>수정 완료</button>
                </div>
            )}

            {!editableQuiz && <button onClick={handleUpdateButtonClick}>수정</button>}

            <button onClick={() => onRemoveHandler(quizzes.id)}>삭제</button>

            <button onClick={handleMainButtonClick}>
                main으로 이동
            </button>
        </QuizDetailBoxStyle>
    );
}

export default QuizDetailPage;
