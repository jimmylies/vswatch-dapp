import React from 'react';
import logo from '../../../assets/img/logo.png';

const Footer = ({ category }) => {
  return (
    <footer>
      <img src={logo} alt='logo' />
      {category === 'English' ? (
        <>
          <p className='catchphrase'>
            The alliance between the technology of the future and a timeless
            creation
          </p>
          <p className='copyright'>©2022 VsWatch NFT - All rights reserved</p>
        </>
      ) : (
        <>
          <p className='catchphrase'>
            L’alliance entre la technologie du futur et une création
            intemporelle
          </p>
          <p className='copyright'>©2022 VsWatch NFT - Tous droits réservés</p>
        </>
      )}
    </footer>
  );
};

export default Footer;
