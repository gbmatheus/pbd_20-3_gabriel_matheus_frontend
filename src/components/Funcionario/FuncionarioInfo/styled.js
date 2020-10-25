import styled from "styled-components";

export const HeaderInfo = styled.section`
  /* display: flex;
  align-items: center; */

  div {
    margin-top: 20px;
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

      input {
        width: 35px;
        padding: 2px 5px;
      }
    }
  }
`;

export const DetailsInfo = styled.section`
  margin-top: 20px;
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
        margin-left: 20px;
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
  margin-top: 10px;

  input {
    display: block;
    margin-top: 5px;
    padding: 5px 10px;

    width: 150px;

  }

  select {
    display: block;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    margin-top: 5px;
    /* margin-left: 10px; */
    padding: 5px 10px;
    appearance: none;

    &::-ms-expand {
      display:none;
    }

    option {
      border: 1px solid #F9FcF1;
      border-radius: 4px;
      background-color: #fff;
    }

  }
`;
