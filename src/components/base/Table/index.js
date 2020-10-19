import styled from 'styled-components';

const Table = styled.table`
  background-color: var(--color-background-light);
  width: 100%;
  font-size: 14px;
  text-align: center;

  padding: 10px;

  border-collapse: collapse;
  border-bottom: 1px solid var(--color-border);


  td:first-child {
    text-align: left;
  }

  td, th {
    border-bottom: 1px solid var(--color-border);
    padding: 8px;
  }

`;


export default Table;