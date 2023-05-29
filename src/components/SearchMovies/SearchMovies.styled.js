import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 9px;
  margin-right: 15px;
  font-size: 15px;
`;

export const Button = styled.button`
  background-color: #ADFF2F;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #008001;
    color: #ffffff;
  }
`;