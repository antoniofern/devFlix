import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import ButtonLink from '../components/ButtonLink';

export default function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={logo} alt='DEVFLIX logo' />
      </a>
      <ButtonLink className='ButtonLink' href='/'>
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}
