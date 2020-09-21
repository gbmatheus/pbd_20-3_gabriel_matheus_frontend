import React from 'react';

import HeaderEniatus from '../../components/HeaderEniatus';
import MainEniatus from '../../components/MainEniatus';
import LogoEniatus from '../../components/LogoEniatus';
import FormLogin from '../../components/FormLogin';
import LoginPage from '../LoginPage/index.jsx';
import LinkBase from '../../components/LinkBase';


function Home() {
  return (
    <>
      <HeaderEniatus>
        <LogoEniatus>Eniatu's</LogoEniatus>
        <LinkBase> Entrar </LinkBase>
      </HeaderEniatus>

      <MainEniatus>
        <FormLogin />
        <LoginPage />
      </MainEniatus>

    </>
  )
}

export default Home;