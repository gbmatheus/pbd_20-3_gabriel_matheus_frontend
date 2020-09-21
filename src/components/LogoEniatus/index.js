import styled from 'styled-components';

// import logo from '../../assets/images/logo.svg';

// const LogoEniatus = styled.img.attrs({src: logo, alt: 'Logo da Eniatus '})`
//   /* padding: 15px 30px; */
//   height: 60px;
// `;

const LogoEniatus = styled.h1`
  font-size: 25rem;
  font-weight: 500;
  color: var(--color-primary);
  
  /* O texto não pode ser selecionado */
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
`;

export default LogoEniatus;