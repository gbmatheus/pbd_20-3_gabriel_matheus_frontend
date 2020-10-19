import styled from 'styled-components';

export const Container = styled.div`
  padding-top:20px;
  display: grid;
  grid-template-columns: 2fr 4fr 6fr;
  
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    
  }
  
`;

// Cades
export const MiniCard = styled.section`
  background: var(--color-background-light);

  max-width: 300px;

  padding: 10px 25px;
  margin: 10px;
  border: 1px solid var(--color-border);
  border-radius:4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 22px;
    color: var(--color-primary-p);
    padding: 10px;
  }

  p {
    padding-left: 10px;
    font-size: 32px;
    text-align: left;
  }
  
  small {
    font-size: 16px;
    color: var(--color-gray);
    
    padding-left: 10px;
    
    margin-top:10px;
    margin-bottom: 10px;
  }

  /* a {
    color: var(--color-primary-p);
    font-weight:500;
  } */

  button {
    font-size: 18px;
    font-weight:500;
    color: #fff;
    background-color: var(--color-primary-p);
    
    padding: 3px;

    border-radius: 4px;
    
    transition: 0.2s;
    
    &:hover {
      background-color: #26ADE4;
    }

  }
  
  display: ${props => props.display};
`;

export const Card = styled.section`
  background: var(--color-background-light);
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