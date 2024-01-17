import styled from "styled-components";
import "galmuri/dist/galmuri.css";
import backGroundImg from "../assets/img/IMG_0283.jpg";

/* 로그인 스타일 */
export const SignInWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px 12px;
  background-image: url(${backGroundImg});
  background-size: cover;
`;

export const SignForm1 = styled.form`
  width: 400px;
  height: 500px;
  padding: 40px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 35%;
  border-radius: 30px;
`;

export const SignForm2 = styled.form`
  width: 400px;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 35%;
  border-radius: 30px;
`;
export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const SignLogo = styled.img`
  width: 100px; /* Adjust the size as needed */
  height: auto;
  border-radius: 100%;
`;

export const SignTitle = styled.h1`
  font-size: 33px;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
  /* margin-top: 110px; */
`;

export const SignInputStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: #f8f8f8;
  /* display: flex; */
  margin-top: 15px;
  &::placeholder {
    font-family: Galmuri11, sans-serif;
    font-weight: bold;
  }

  &:focus {
    border: 1px solid #f8f8f8;
  }
`;

export const SignCheckBoxStyle = styled.label`
  color: #ffffff;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
`;

export const SignCheckBox = styled.input`
  &:checkbox {
    display: none;
  }

  &:checkbox + label {
    cursor: pointer;
    padding-left: 26px;
    background-image: url("checkbox.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:checkbox:checked + label {
    background-image: url("checkbox-active.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const SignButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
  color: rgb(255, 255, 255);
  height: 46px;
  border-radius: 8px;
  background-color: rgb(254, 83, 31);
  cursor: pointer;
  width: 100%;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
  margin-top: 10px;
  font-size: 18px;
`;

/* 토론 게시판 스타일 */
export const TableButtonStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;
  padding: 30px;
`;
export const TableButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
  width: 100px;
  height: 60px;
  border-radius: 20px;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(254, 83, 31);
`;

export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-spacing: 0;
`;

export const TableHeaderColumn = styled.td`
  border-bottom: 1px solid #e8e8e8;
  padding: 0;
  font-size: 16px;
  padding: 10px 5px;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
`;

export const TableColumn = styled.td`
  padding: 10px 5px;
  font-family: Galmuri11, sans-serif;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #eceaea;
    cursor: pointer;
  }
`;
