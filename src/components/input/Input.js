import React from "react";
import styled from "styled-components";

const Input = ({ todolist, setTodolist, text, setText }) => {
  const listAddHandle = () => {
    setTodolist(todolist.concat(text));
    setText("");
  };

  const valueAddHandle = (e) => {
    setText(e.target.value);
  };

  const valueAddEnter = (e) => {
    if (e.key === "Enter") {
      valueAddHandle();
    }
  };
  return (
    <InputWrapper>
      <InputBox
        value={text}
        placeholder="할 일을 작성하세요"
        onChange={(e) => valueAddHandle(e)}
      />
      <Input value="valueAddHandle={valueAddHandle} valueAddEnter={valueAddEnter}" />
      <AddButton onClick={listAddHandle}>등록</AddButton>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputBox = styled.input`
  padding: 10px 5px;
  border: none;
`;

const AddButton = styled.button`
  width: 5%;
  height: 4%;
  background-color: gray;
`;

export default Input;
