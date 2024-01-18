import React, { useEffect, useState } from "react";
import { api } from "../axios/api";
import DebatesBoardTable from "../components/debatesBoard/DebatesBoardTable";
import DebatesBoardTableColumn from "../components/debatesBoard/DebatesBoardTableColumn";
import DebatesBoardTableRow from "../components/debatesBoard/DebatesBoardTableRow";
import * as St from "../components/style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAuthHeaders } from "../shared/authHeaders";
const GetData = () => {
  const [data, setData] = useState([]);
  const headers = getAuthHeaders();
  useEffect(() => {
    api.get("/debates", headers).then((response) => {
      setData(response.data.data);
      // console.log("response 확인", response);
    });
  }, []);
  console.log("data에 값 확인 =>", data);
<<<<<<< HEAD

=======
>>>>>>> 4c824651d77e3d32401fdb01ff0a5725d19e46f9
  const boardItem = data.map((item) => (
    <DebatesBoardTableRow key={item.debateId}>
      <DebatesBoardTableColumn>{item.debateId}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>
        <Link to={`/debates/${item.debateId}`}>{item.title}</Link>
      </DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{item.createdAt}</DebatesBoardTableColumn>
      <DebatesBoardTableColumn>{item.User.nickname}</DebatesBoardTableColumn>
    </DebatesBoardTableRow>
  ));
  return boardItem;
};
function DebatesMain() {
  const board = GetData();
  console.log("board 확인", board);
  const navigate = useNavigate();
  const addDebatesButtonHandler = () => {
    navigate("/debates-add");
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