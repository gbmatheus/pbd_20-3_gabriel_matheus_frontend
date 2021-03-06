import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;

  margin-top: 20px;
  

  /* height: 100vh; */
`;

export const Card = styled.section`
  background: var(--color-background-light);
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px; 

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 22px;
    color: var(--color-primary-p);
    padding: 10px;
  }
  
  a {
    padding-top: 10px;
    color: var(--color-primary-p);
    font-weight:500;
  }

`;


export const Form = styled.form`
  width: 100%;
  background: #fff;
  margin-top: 20px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:  center;

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  input {
    /* flex: 1; */
    height: 40px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
      padding: 10px;
    }
  }
  select {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    background: #fff;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: var(--color-button);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;