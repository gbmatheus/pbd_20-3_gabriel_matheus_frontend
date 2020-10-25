import styled from "styled-components";

export const HeaderFolha = styled.section`
  /* display: flex;
  align-items: center; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }
  }
  ul {
    margin-top: 20px;
    display: flex;
    align-items: center;

    li {
      display: block;

      & + li {
        margin-left: 40px;
      }

      strong {
        display: block;
        font-size: 20px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;

export const DetailsFolha = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  /* label {
    margin-top: 20px;

    input {
      margin-top: 5px;
      padding: 5px 10px;
    }
  } */
  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    a {
      background-color: #ccc;
      padding: 5px 15px;
      margin-top: 10px;
      border-radius: 4px;
      transition: 0.2s;

      &:hover {
        background-color: #c1c1c1;
      }
    }
  }
`;

export const Field = styled.label`
  margin-top: 20px;
  /* display: block; */
  & + label {
    margin-left: 50px;
  }
  input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding: 5px 10px;
  }
`;

export const Card = styled.section`
  display: flex;
  justify-content: space-around;

  div {
    width: 300px;
    padding: 20px 10px;
    
    border: 1px solid #000;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & + div {
      margin-left: 20px;
    }

    strong {
      font-size: 20px;
    }

    input {
      width: 250px;
      display: block;
      margin-top: 5px;
      margin-bottom: 10px;
      padding: 5px 10px;
    }
  }
`;
