import React, { useEffect, useState } from "react";
import axios from "axios";
import DebatesBoardTable from "../components/debatesBoard/DebatesBoardTable";
import DebatesBoardTableColumn from "../components/debatesBoard/DebatesBoardTableColumn";
import DebatesBoardTableRow from "../components/debatesBoard/DebatesBoardTableRow";
import * as St from "../components/style";
import { Link } from "react-router-dom";

const GetData = () => {
  const [data, setData] = useState({});
  const currentDate = new Date();
  const createAt = currentDate.toLocaleString();
  useEffect(() => {
    axios.get("http://localhost:4000/debatesBoard").then((response) => {
      setData(response.data);
    });
  }, []);
  // console.log("data에 값 확인 =>", data);
  const boardItem = Object.values(data).map((item) => (
    <DebatesBoardTableRow key={item.id}>
      <DebatesBoardTableColumn>{item.id}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>
        <Link to={`/debates/${item.id}`}>{item.title}</Link>
      </DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{createAt}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{item.username}</DebatesBoardTableColumn>
    </DebatesBoardTableRow>
  ));
  return boardItem;
};

function DebatesMain() {
  const board = GetData();

  return (
    <>
      <St.TableButtonStyle>
        <St.TableButton>등록하기</St.TableButton>
      </St.TableButtonStyle>
      <DebatesBoardTable headersName={["글번호", "제목", "등록일", "작성자"]}>
        {board}
      </DebatesBoardTable>
    </>
  );
}

export default DebatesMain;
