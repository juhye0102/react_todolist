import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import List from "./components/list/List";

function App() {
  // getter, setter 느낌 ~~
  const [todolist, setTodolist] = useState([]);
  const [text, setText] = useState("");

  // 컴포넌트 생명을 관리하는 역할
  useEffect(() => {
    console.log(todolist);
  }, [todolist]); // 언제 바꿀건지?! todolsit의 값이 변했을때 console 찍어라~

  return (
    <>
      <TodolistWrapper>
        <Header />
        <Input
          todolist={todolist}
          setTodolist={setTodolist}
          text={text}
          setText={setText}
        />
        <List todolist={todolist} />
      </TodolistWrapper>
    </>
  );
}

const TodolistWrapper = styled.section`
  width: 500px;
  height: 700px;
  background-color: #f4f4f4;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
