import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({ todolist }) => {
  return (
    <ListWrapper>
      {todolist.map((value, index) => (
        <ListItem key={index} value={value} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul``;

export default List;
