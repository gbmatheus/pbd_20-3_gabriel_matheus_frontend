import styled from "styled-components";

const ButtonAdd = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 20px; 
  color: var(--color-button-text);
  background: var(--color-button);
  margin: auto;
  border-radius: 4px;

  transition: 0.2s;

  margin-top: 10px;

  &:hover {
    background: var(--color-button-hover);
  }
`;

export default ButtonAdd;
