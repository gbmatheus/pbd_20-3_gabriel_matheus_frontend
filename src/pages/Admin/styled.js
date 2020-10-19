import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: 100vh;
  flex: 1;
`;

export const SideBar = styled.aside`
  width: 220px;
  height: 100vh;
  background-color: #2d3436;
  padding: 0 20px;
  color: #fff;

  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #fff;
  }

  a {
    color: #fff;
    font-size: 16px;
  }

  small {
    margin-top: 20px;
    font-size: 12px;
    color: #ffffff;
  }
`;

export const Header = styled.header`
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;

  h2 {
    font-size: 24px;
  }

  form {
    display: flex;

    input {
      flex: 1;
      height: 30px;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      font-size: 16px;
      
      padding-left: 10px;
      margin-right: 10px;
      
      &::placeholder {
        color: #000;
      }
    }
    button {
      font-weight: 500;
      width: 100px;
      background-color: var(--color-button);
      border-radius: 4px;

      transition: 0.2s;

      &:hover {
        background: var(--color-button-hover);
      }
    }
  }
`;

export const Main = styled.main`
  width: 90%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  margin-left: auto;
  margin-right: auto;
  

`;

