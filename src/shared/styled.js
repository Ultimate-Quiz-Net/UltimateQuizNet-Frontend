import styled from "styled-components";
import surf from "../assets/img/IMG_0283.jpg";
import "galmuri/dist/galmuri.css";

export const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  form {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
    input,
    textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background-color: #007BFF;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s;
      &:hover {
        background-color: #0056B3;
      }
    }
  }
`;
export const QuizDetailBoxStyle = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  text-align: left; /* 이미지 및 내용 중앙 정렬 */
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 8px;
  }
  button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056B3;
    }
  }
`;
export const MainTextContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(
      45deg,
      rgba(51, 43, 43, 0.75),
      rgba(20, 19, 20, 0.61)
    ),
    url(${surf});
  background-size: cover;
  background-position: center;
  background-color: #F8F9FA;
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 24px;
    color: white;
    line-height: 1.5;
    white-space: pre-line;
    font-family: Galmuri11, sans-serif;
    font-weight: bold;
  }
`;

// 카드 호버 이벤트
export const HoverCard = styled.div`
width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  transition: all 0.3s cubic-bezier(0.42, 0.0, 0.58, 1.0);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-10px);
    
  }
`;