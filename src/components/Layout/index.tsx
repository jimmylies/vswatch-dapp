import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from '../../pages/Home';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  const [language, setLanguage] = React.useState('English');

  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <Navbar category={language} setCategory={setLanguage} />
      <Home category={language} />
      {/* <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.home}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main> */}
      <Footer category={language} />
    </div>
  );
};

export default Layout;
