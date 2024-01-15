import React, { useState } from 'react';
import { todos } from '../shared/data';
import { v4 as uuidv4 } from 'uuid';
import { FormWrapper } from '../shared/styled';
import { useNavigate } from 'react-router-dom';

const QuizCreatePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '퀴즈', // 베이스를 '퀴즈'로 설정
        detail: '',
        answerKey: '',
    });
    const formChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleAddButtonClick = (event) => {
        event.preventDefault();
        const newFormData = {
            id: uuidv4(),
            category: formData.category,
            title: formData.title,
            detail: formData.detail,
            answerKey: formData.answerKey,
        };
        console.log(newFormData);
        // 폼 데이터를 todos 배열에 추가
        todos.push(newFormData);

        // 추가 후 폼 초기화
        setFormData({
            title: '',
            category: '',
            detail: '',
            answerKey: '',
        });
        navigate("/home"); // 등록 후 게시판으로 이동
        console.log(todos); // 확인용 로그
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
                <button type="submit">등록</button>
            </form>
        </FormWrapper>
    );
};

export default QuizCreatePage;
