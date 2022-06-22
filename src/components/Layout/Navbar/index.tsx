import React from 'react';
import { DappUI, logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';

import logo from '../../../assets/img/logo.png';

import sal from 'sal.js';

const Navbar = () => {
  const { address } = useGetAccountInfo();
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const [isMethod, setIsMethod] = React.useState(false);
  const [isDashboard, setIsDashboard] = React.useState(true);

  const isLoggedIn = Boolean(address);

  const showMethod = () => {
    setIsMethod(true);
  };

  const logOut = () => {
    logout(`${window.location.pathname}`);
  };

  const page = document.querySelectorAll('.page');

  const isDapp = () => {
    for (let i = 0; i < page.length; i++) {
      if (page[i] != undefined) {
        page[i].classList.remove('activePage');
      }
    }
    if (window.location.pathname === routeNames.home) {
      page[0]?.classList.add('activePage');
    } else {
      page[1]?.classList.add('activePage');
    }
  };

  isDapp();

  document.addEventListener('scroll', () => {
    sal();

    const header = document.querySelector('header');
    const button = document.querySelectorAll('button');
    if (window.scrollY >= window.innerHeight) {
      header?.classList.add('underHome');
      for (let i = 0; i < button.length; i++) {
        button[i].classList.add('underHomeButton');
      }
      header?.lastElementChild?.classList.add('underHome');
    } else if (window.scrollY < window.innerHeight) {
      header?.classList.remove('underHome');
      header?.lastElementChild?.classList.remove('underHome');
    }
  });

  React.useEffect(() => {
    sal();
    if (window.location.pathname === routeNames.dashboard) {
      setIsDashboard(false);
    }
  }, []);

  return (
    <header>
      <a href='#'>
        <img src={logo} alt='logo' />
      </a>
      <nav>
        <a href='#'>HOME</a>
        <a href='#project'>PROJECT</a>
        <a href='#watchmap'>WATCHMAP</a>
        <a href='#team'>TEAM</a>
        <a href='#faq'>FAQ</a>
      </nav>
      <div className='social'>
        <a href='#'>Twitter</a>
        <a href='#'>Discord</a>
      </div>
      <div className='login'>
        {isLoggedIn ? (
          <div onClick={logOut}>Logout</div>
        ) : (
          <>
            <p>CONNEXION</p>
            <div className='method'>
              <>
                <ExtensionLoginButton
                  callbackRoute={routeNames.dashboard}
                  loginButtonText={'Extension'}
                />
                <WebWalletLoginButton
                  callbackRoute={routeNames.dashboard}
                  loginButtonText={'Web wallet'}
                />
                <LedgerLoginButton
                  loginButtonText={'Ledger'}
                  callbackRoute={routeNames.dashboard}
                  className={'test-class_name'}
                />
                <WalletConnectLoginButton
                  callbackRoute={routeNames.dashboard}
                  loginButtonText={'Maiar'}
                />
              </>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
