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

  return (
    <InputWrapper>
      <InputBox
        value={text}
        placeholder="할 일을 등록하세요"
        onChange={(e) => valueAddHandle(e)}
      />
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

const AddButton = styled.button``;

export default Input;