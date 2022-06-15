import React from 'react';
import logo from '../../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <p className='catchphrase'>
        The alliance between the technology of the future and a timeless
        creation
      </p>
      <p className='copyright'>©2022 VsWatch NFT - All rights reserved</p>
    </footer>
  );
};

export default Footer;
