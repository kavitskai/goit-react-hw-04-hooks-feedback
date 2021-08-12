import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Btn = styled.button`
  min-width: 200px;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  background-color: #0fb137;
  border: none;
`;