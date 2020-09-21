import React from 'react';

function LoginPage() {
  return (
    <div className="login">
      <form>
        <h1>Login Form</h1>
        <div className="formcontainer">
        
          <div className="container">
            <label htmlFor="usuario"><strong>Seu usuario</strong></label>
            <input type="text" placeholder="Digite seu usuario" name="usuario" required />
            <label htmlFor="senha"><strong>Sua senha</strong></label>
            <input type="password" placeholder="Digite sua senha" name="senha" required />
          </div>
          
          <button>Login</button>
          
          <div className="container">
            {/* <label>
              <input type="checkbox"  checked="checked" name="remember" /> Remember me
            </label> */}
            <span className="psw">Esqueceu a senha?</span>
          </div>
        </div>
      </form>
    </div>

  );
}

export default LoginPage;