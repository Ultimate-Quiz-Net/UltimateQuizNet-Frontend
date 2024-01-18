import styled, { keyframes, css } from 'styled-components';
import surf from "../assets/img/IMG_0283.jpg";
import "galmuri/dist/galmuri.css";
import { Link } from 'react-router-dom';

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

// 버튼 스타일 컴포넌트
const ShinyBtn1Animation = keyframes`
    0% { transform: scale(0) rotate(45deg); opacity: 0; }
    80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { transform: scale(4) rotate(45deg); opacity: 1; }
    100% { transform: scale(50) rotate(45deg); opacity: 0; }
`;

export const Btn11 = styled.button`
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(0deg, rgba(251, 33, 117, 1) 0%, rgba(234, 76, 137, 1) 100%);
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
  }

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: ${ShinyBtn1Animation} 3s ease-in-out infinite;
  }

  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;


export const StyledLink = styled(Link)`
  background: linear-gradient(0deg, rgba(2,126,251,1) 0%, rgba(129, 5, 240, 1) 100%);
  border: none;
  position: relative;
  text-decoration: none;
  color: #fff;
  padding: 10px;
  display: inline-block;
  margin-right: 10px;
  &:before {
    content: '';
    position: absolute;
    height: 0%;
    width: 2px;
    background: #fff;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  &:hover {
    box-shadow:  4px 4px 6px 0 rgba(255, 255, 255, 0.5),
                -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;
// Common button styles
const buttonStyles = css`
  float: left;
  min-width: 150px;
  max-width: 250px;
  display: block;
  margin: 1em;
  padding: 1em 2em;
  border: none;
  background: none;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  > span {
    vertical-align: middle;
  }
`;

// Winona button styles
const winonaButtonStyles = css`
  overflow: hidden;
  padding: 0;
  transition: border-color 0.3s, background-color 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

  &::after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    color: #CFE4E4;
    transform: translate3d(0, 25%, 0);
  }

  > span {
    display: block;
  }

  &.button--inverted {
    color: #7986cb;

    &::after {
      color: #fff;
    }
  }

  &::after,
  > span {
    padding: 1em 2em;
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:hover {
    border-color: #3f51b5;
    background-color: #162955;

    &.button--inverted {
      border-color: #21333C;
      background-color: #21333C;
    }

    &::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    > span {
      opacity: 0;
      transform: translate3d(0, -25%, 0);
    }
  }
`;

// Styled components
export const StyledButton = styled.button`
  ${buttonStyles}

  /* Apply Winona Button Styles */
  &.button--winona {
    ${winonaButtonStyles}
  }
`;

export const LoginButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:hover {
    box-shadow:
      -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001;
  }
`;