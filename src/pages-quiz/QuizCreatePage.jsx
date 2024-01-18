import React, { useState } from 'react';
import { FormWrapper } from '../shared/styled';
import { useNavigate } from 'react-router-dom';
import { api } from '../axios/api';
import { getAuthHeaders } from '../shared/authHeaders';

const QuizCreatePage = () => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
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
        formDataToSend.append("image", imageSrc);

        // 다른 폼 데이터 추가
        formDataToSend.append("title", formData.title);
        formDataToSend.append("content", formData.content);


        try {
            // Logging: 이미지 파일 및 FormData 확인
            console.log("imageSrc", imageSrc);
            console.log("formDataToSend", formDataToSend);

            // API 호출
            const headers = getAuthHeaders();

            if (!headers) {
                alert("로그인이 필요합니다.");
                return;
            }
            
            await api.post("/quizzes", formDataToSend, {
                headers: {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                },
            });

            // 등록 후 상태 초기화 및 페이지 이동
            setFormData({
                title: "",
                content: "",
            });
            setImageSrc(null);
            setImageBase64(null);

            navigate("/home");
        } catch (error) {
            // 에러 처리
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
                {/* 이미지 업로드 input */}
                <label htmlFor="profile-upload" />
                <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg} style={{ color: 'white' }}/>

                {/* 미리보기 */}
                <div className="preview" >
                    {imageBase64 && <img src={imageBase64} alt="preview-img" style={{ maxHeight: '400px', maxWidth: '400px' }}/>}
                </div>

                {/* 제목 입력란 */}
                <label style={{ color: 'white' }}>
                    제목:
                    <input type="text" name="title" value={formData.title} onChange={formChangeHandler} />
                </label>
                <br />

                {/* 내용 입력란 */}
                <label style={{ color: 'white' }}>
                    내용:
                    <textarea name="content" value={formData.content} onChange={formChangeHandler} placeholder="최소 5글자 이상의 내용을 입력해주세요" />
                </label>
                <br />

                {/* 등록 버튼 */}
                <button>등록</button>
            </form>
        </FormWrapper>
    );
};

export default QuizCreatePage;
