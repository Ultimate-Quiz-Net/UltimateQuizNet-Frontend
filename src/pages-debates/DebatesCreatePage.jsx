import React, { useState } from "react";
import { FormWrapper } from "../shared/styled";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/api";
import { getAuthHeaders } from '../shared/authHeaders';

const DebatesCreatePage = () => {
  const headers = getAuthHeaders();
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


    try {
      console.log("formDataToSend", formData);
      await api.post("/debates", formData, { headers });

      setFormData({
        title: "",
        content: "",
      });

      navigate("/debates");
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
            placeholder="최소 3글자 이상의 내용을"
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            name="content"
            value={formData.content}
            onChange={formChangeHandler}
            placeholder="최소 10글자 이상의 내용을 입력해주세요"
          />
        </label>
        <br />
        <button>등록</button>
      </form>
    </FormWrapper>
  );
};

export default DebatesCreatePage;
