import React from "react";
import styled from "styled-components";

const ListItem = ({ value }) => {
  return (
    <ListItemBox>
      <span>{value}</span>
      <button>중요</button>
      <button>삭제</button>
    </ListItemBox>
  );
};

// sass / scss

const ListItemBox = styled.li``;

export default ListItem;
