import styled from 'styled-components';

export const Header = styled.header`
  background: var(--color-background-dark);
  color: var(--color-text-primary);
  width: 100vw;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    width: 100px;
    height: 70px;
    margin-left: 20px;
  }

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    /* margin-right: 20px; */
    margin-right: 20px;
  }

  button {

    background: var(--color-back);
    color: var(--color-button-text);
    
    font-size: 14px;
    font-weight: 500;
    
    margin-right: 20px;

    border-radius: 4px;
    padding: 5px 20px;
  
  }

`;

export const NavBar = styled.nav`
  /* display: inline; */
  text-align: center;
  background: var(--color-primary);
  padding: 10px;
  

  a {
    font-weight: 500;
    color: var(--color-button-text);
    margin-left: 10px;
  }

`;

export const Main = styled.main`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto; 
  
`;

export const Funcionarios = styled.div`
  margin-top: 50px;
  margin-left:  auto;
  margin-right: auto;
  border-radius:4px;
  background: #fff;


  h3 {
    font-size: 22px;
    color: var(--color-primary-p);
    padding: 10px;
  }

`;

