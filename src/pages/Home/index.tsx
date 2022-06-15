import * as React from 'react';
import { routeNames } from 'routes';
import sal from 'sal.js';
import {
  DappUI,
  useGetLoginInfo,
  useGetAccountInfo
} from '@elrondnetwork/dapp-core';
import { Link } from 'react-router-dom';

const Home = () => {
  document.querySelectorAll('.part-item-faq').forEach((e) => {
    e.addEventListener('click', () => {
      const answer = e.lastElementChild;
      if (answer != undefined) {
        answer.classList.toggle('activeFaq');
      }
    });
  });

  const showAnswer = (event: any) => {
    const answer = event.currentTarget.lastElementChild;
    answer?.classList.toggle('activeFaq');
  };

  document.addEventListener('scroll', () => {
    sal();
  });

  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div className='main-container'>
      <div className='home'>
        <p className='catchphrase text-focus-in'>
          The alliance between the technology of the future and a timeless
          creation
        </p>
      </div>
      <div className='project'></div>
    </div>
  );
};

export default Home;
