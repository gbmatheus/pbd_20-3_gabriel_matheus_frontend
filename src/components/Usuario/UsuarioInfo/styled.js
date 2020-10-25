import styled from "styled-components";

export const HeaderInfo = styled.section`
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

export const DetailsInfo = styled.section`
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

    label {
      & + label {
        margin-left: 50px;
      }
    }

    a {
      background-color: #CCC;
      padding: 5px 15px;
      margin-top: 10px;
      border-radius: 4px;
      transition: 0.2s;

      &:hover{
        background-color: #C1C1C1;
      }
    }
  }

`;

export const Field = styled.label`
  margin-top: 20px;
  display: block;
  
  width: 300px;

  input {
    margin-top: 5px;
    padding: 5px 10px;
  }
`;
