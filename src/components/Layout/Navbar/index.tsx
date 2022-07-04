import React from 'react';
import { DappUI, logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import sal from 'sal.js';
import { routeNames } from 'routes';

import logo from '../../../assets/img/logo.png';

const Navbar = ({ category, setCategory }) => {
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
    if (window.innerWidth < 1300) {
      if (window.scrollY >= window.innerHeight - 200) {
        header?.classList.add('underHome');
        for (let i = 0; i < button.length; i++) {
          button[i].classList.add('underHomeButton');
        }
        header?.lastElementChild?.classList.add('underHome');
      } else if (window.scrollY < window.innerHeight - 200) {
        header?.classList.remove('underHome');
        header?.lastElementChild?.classList.remove('underHome');
      }
    } else {
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
        {category === 'English' ? (
          <>
            <a href='#'>HOME</a>
            <a href='#project'>PROJECT</a>
            <a href='#watchmap'>WATCHMAP</a>
            <a href='#team'>TEAM</a>
            <a href='#faq'>FAQ</a>
          </>
        ) : (
          <>
            <a href='#'>ACCUEIL</a>
            <a href='#project'>PROJET</a>
            <a href='#watchmap'>ROADMAP</a>
            <a href='#team'>EQUIPE</a>
            <a href='#faq'>FAQ</a>
          </>
        )}
      </nav>
      <div className='social'>
        <a
          href='https://twitter.com/vswatch_club'
          rel='noreferrer'
          target='_blank'
        >
          Twitter
        </a>
        <a
          href='https://discord.com/invite/gGsVBKNV9u'
          rel='noreferrer'
          target='_blank'
        >
          Discord
        </a>
        <div className='language'>
          <span>{category}</span>
          <div>
            <span
              onClick={() => {
                if (category === 'English') {
                  setCategory('Français');
                } else {
                  setCategory('English');
                }
              }}
            >
              {category === 'English' ? 'Français' : 'English'}
            </span>
          </div>
        </div>
      </div>
      <div className='login'>
        {isLoggedIn ? (
          <div
            onClick={() => {
              logout(`${window.location.pathname}`);
            }}
          >
            {category === 'English' ? 'Logout' : 'Déconnexion'}
          </div>
        ) : (
          <>
            <p>Connexion</p>
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
      <div
        className='reduce-header'
        onClick={(event) => {
          event.currentTarget.parentElement.classList.toggle('reduced');
        }}
      >
        <div className=''></div>
      </div>
    </header>
  );
};

export default Navbar;
