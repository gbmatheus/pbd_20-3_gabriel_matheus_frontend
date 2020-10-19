import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 400px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: var(--color-text-title);
  
  margin-bottom:20px;
`;

export const ImageLogo = styled.img`
  width: 300px;
  height:300px;
  margin-bottom: -50px;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 450px;

  display: flex;
  flex-direction: column;

  input {
    font-size: 18px;
    width: 370px;
    height: 40px;

    padding: 5px 10px;
    margin-bottom: 20px;
  }

  button {
    font-size: 16px;
    font-weight: 500;
    width: 260px;
    height: 40px;
    color: var(--color-button-text);
    background: var(--color-button);
    margin: auto;
    border-radius: 4px;

    transition: 0.2s;

    margin-top: 20px;

    &:hover {
      background: var(--color-button-hover);
      
    }
  }

  a {
    text-align: end;
    color: var(--color-primary);
  }

`;

