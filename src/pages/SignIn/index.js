import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber"></img>

      <form>
        <input type="email" placeholder="Seu e-mail"></input>
        <input type="password" placeholder="Sua senha secreta"></input>

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
