import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormWrapper } from '../shared/styled';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';

const QuizCreatePage = () => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '퀴즈', // 베이스를 '퀴즈'로 설정
        content: '',

    });


    const formChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 게시글 등록
    const handleAddButtonClick = async (event) => {
        event.preventDefault();

        // FormData 객체 생성
        const formDataToSend = new FormData();

        // 이미지 파일 추가
        formDataToSend.append('image', imageSrc);

        // 다른 폼 데이터 추가
        formDataToSend.append('title', formData.title);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('content', formData.content);


        try {
            await api.post("/quizzes", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.error("에러 발생:", error);
            if (error.response) {
                console.error("서버 응답 데이터:", error.response.data);
            }
        }

        setFormData({
            title: '',
            category: '',
            content: '',

        });
        navigate("/home");
    };


    // 이미지 추가
    const onChangeImg = (e) => {
        e.preventDefault();

        if (e.target.files) {
            const uploadFile = e.target.files[0];
            setImageSrc(uploadFile);
            
            // 이미지 선택 시 바로 미리보기 생성
            encodeFileToBase64(uploadFile);
        }
    };

    // 이미지 미리보기
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result;
            setImageBase64(base64String);
        };

        reader.readAsDataURL(fileBlob);
    };

    return (
        <FormWrapper>
            <form onSubmit={handleAddButtonClick}>
                <label htmlFor="profile-upload" />
                <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg} />
                <div className="preview">
                    {imageBase64 && <img src={imageBase64} alt="preview-img" />}
                </div>
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
                    <textarea name="content" value={formData.content} onChange={formChangeHandler} />
                </label>
                <br />
                {/* <label>
                    답안:
                    <input type="text" name="answerKey" value={formData.answerKey} onChange={formChangeHandler} />
                </label> */}
                <br />
                <button>등록</button>
            </form>
        </FormWrapper>
    );
};

export default QuizCreatePage;
