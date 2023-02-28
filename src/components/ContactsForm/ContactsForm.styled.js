import styled from 'styled-components';
import { Form as FormicForm } from 'formik';
import { ErrorMessage as FormicMessage } from 'formik';

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 8px 140px 8px 8px;
  border: 1px solid black;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  width: 120px;
  padding: 4px;
  border: none;

  cursor: pointer;
  border: 1px solid pink;

  &:hover {
    background-color: pink;
    border-color: skyblue;
    border-radius: 8px;
  }
`;

export const ErrorMessage = styled(FormicMessage)`
  color: orangered;
`;
