import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  debatesBoard: [
    {
      글번호: 1,
      제목: "title1",
      등록일: "",
      작성자: "username1",
    },
    {
      글번호: 2,
      제목: "title2",
      등록일: "",
      작성자: "username2",
    },
    {
      글번호: 3,
      제목: "title3",
      등록일: "",
      작성자: "username3",
    },
    {
      글번호: 4,
      제목: "title4",
      등록일: "",
      작성자: "username4",
    },
  ],
};

const debatesBoardSlice = createSlice({
  name: "debatesBoard",
  initialState,
  reducers: {},
});

export const {} = debatesBoardSlice.actions;
export default debatesBoardSlice.reducer;
