import React, { useEffect, useState } from "react";
import { api } from "../axios/api";
import DebatesBoardTable from "../components/debatesBoard/DebatesBoardTable";
import DebatesBoardTableColumn from "../components/debatesBoard/DebatesBoardTableColumn";
import DebatesBoardTableRow from "../components/debatesBoard/DebatesBoardTableRow";
import * as St from "../components/style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const GetData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get("/debates").then((response) => {
      setData(response.data);
      // console.log("response 확인", response);
    });
  }, []);

  console.log("data에 값 확인 =>", data);
  const boardItem = Object.values(data).map((item) => (
    <DebatesBoardTableRow key={item.debateId}>
      <DebatesBoardTableColumn>{item.debateId}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>
        <Link to={`/debates/${item.id}`}>{item.title}</Link>
      </DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{item.createAt}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{item.User}</DebatesBoardTableColumn>
    </DebatesBoardTableRow>
  ));
  return boardItem;
};

function DebatesMain() {
  const board = GetData();
  const navigate = useNavigate();

  const addDebatesButtonHandler = () => {
    navigate("/quizzess/:quizid/debates");
  };

  return (
    <>
      <St.BodyStyle>
        <St.TableButtonStyle>
          <St.TableButton onClick={addDebatesButtonHandler}>
            등록하기
          </St.TableButton>
        </St.TableButtonStyle>
        <DebatesBoardTable headersName={["글번호", "제목", "등록일", "작성자"]}>
          {board}
        </DebatesBoardTable>
      </St.BodyStyle>
    </>
  );
}

export default DebatesMain;
