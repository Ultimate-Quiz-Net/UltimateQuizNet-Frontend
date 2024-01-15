import { useState } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return [value, onChangeHandler];
}

export default useInput;
