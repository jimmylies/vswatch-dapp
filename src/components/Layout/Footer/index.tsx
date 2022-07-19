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
          <p>
            Contact us at:{' '}
            <span className='underline'>vswatchclub@gmail.com</span>
          </p>
          <p className='copyright'>©2022 VSWatch NFT - All rights reserved</p>
        </>
      ) : (
        <>
          <p className='catchphrase'>
            L’alliance entre la technologie du futur et une création
            intemporelle.
          </p>
          <p>
            Contactez nous ici:{' '}
            <span className='underline'>vswatchclub@gmail.com</span>
          </p>
          <p className='copyright'>©2022 VSWatch NFT - Tous droits réservés</p>
        </>
      )}
    </footer>
  );
};

export default Footer;
