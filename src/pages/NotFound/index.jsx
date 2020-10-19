import React from 'react';

import './styles.css';

function NotFound (props) {
  return (
    <div>
      <header>
        Página não encontrada { props.children }
      </header>
    </div>
  );
}

export default NotFound;