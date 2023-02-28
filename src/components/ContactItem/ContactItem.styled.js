import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  margin-top: 40px;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid pink;

  &:hover {
    background-color: pink;
    border-color: skyblue;
    border-radius: 8px;
  }
`;
