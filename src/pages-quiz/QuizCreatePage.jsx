import React, { useState } from 'react';
import { FormWrapper } from '../Shared/styled';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';

const QuizCreatePage = () => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
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
        formDataToSend.append('content', formData.content);


        // formDataToSend.append('category', formData.category);

        try {
            console.log("imageSrc", imageSrc);
            console.log("formDataToSend", formDataToSend);
            await api.post("/quizzes", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setFormData({
                title: '',
                content: '',

            });
            setImageSrc(null);
            setImageBase64(null);

            navigate("/home");
        } catch (error) {
            console.error("에러 발생:", error);
            if (error.response) {
                console.error("서버 응답 데이터:", error.response.data);
            }
        }


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
                <br />
                <label>
                    내용:
                    <textarea name="content" value={formData.content} onChange={formChangeHandler} placeholder="최소 5글자 이상의 내용을 입력해주세요"/>
                </label>
                <br />
                <button>등록</button>
            </form>
        </FormWrapper>
    );
}; 

export default QuizCreatePage;
