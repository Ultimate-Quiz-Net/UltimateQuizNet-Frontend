import React, { useState } from "react";
import { FormWrapper } from "../shared/styled";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/api";

const DebatesCreatePage = () => {
  const navigate = useNavigate();
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

    // 다른 폼 데이터 추가
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);

    try {
      console.log("formDataToSend", formDataToSend);
      await api.post(`/quizzess/:quizid/debates`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        title: "",
        content: "",
      });

      navigate("/home");
    } catch (error) {
      console.error("에러 발생:", error);
      if (error.response) {
        console.error("서버 응답 데이터:", error.response.data);
      }
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleAddButtonClick}>
        <label>
          제목:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={formChangeHandler}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            name="content"
            value={formData.content}
            onChange={formChangeHandler}
            placeholder="최소 5글자 이상의 내용을 입력해주세요"
          />
        </label>
        <br />
        <button>등록</button>
      </form>
    </FormWrapper>
  );
};

export default DebatesCreatePage;
