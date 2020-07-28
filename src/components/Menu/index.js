import React from 'react';
import logo from '../../assets/img/logo.png';
import './styles.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink';

export default function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={logo} alt='DEVFLIX logo' />
      </a>
      <Button as='a' className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
}
