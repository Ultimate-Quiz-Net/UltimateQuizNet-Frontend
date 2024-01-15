import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormWrapper } from '../shared/styled';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';

const QuizCreatePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        category: '퀴즈', // 베이스를 '퀴즈'로 설정
        detail: '',
        answerKey: '',
        comments: '',
    });
    const formChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleAddButtonClick = async (event) => {
        event.preventDefault();
        try {
            // title 상태를 사용하여 새로운 할 일 추가
            await api.post("/quizzes", {
                id: uuidv4(),
                title: formData.title,
                category: formData.category,
                detail: formData.detail,
                answerKey: formData.answerKey,
                comments:  formData.comments,
            });
        } catch (error) {
            console.error("에러 발생:", error);
        }

        // 추가 후 폼 초기화
        setFormData({
            id: '',
            title: '',
            category: '',
            detail: '',
            answerKey: '',
            comments: '',
        });
        navigate("/home"); // 등록 후 게시판으로 이동
        // console.log(todos); // 확인용 로그
    }

    return (
        <FormWrapper>
            <form onSubmit={handleAddButtonClick}>
                <label>
                    제목:
                    <input type="text" name="title" value={formData.title} onChange={formChangeHandler} />
                </label>
                <label>
                    카테고리:
                    <select name="category" value={formData.category} onChange={formChangeHandler}>
                        <option value="퀴즈">퀴즈</option>
                        <option value="토론">토론</option>
                    </select>
                </label>
                <br />
                <label>
                    내용:
                    <textarea name="detail" value={formData.detail} onChange={formChangeHandler} />
                </label>
                <br />
                <label>
                    답안:
                    <input type="text" name="answerKey" value={formData.answerKey} onChange={formChangeHandler} />
                </label>
                <br />
                <button>등록</button>
            </form>
        </FormWrapper>
    );
};

export default QuizCreatePage;
