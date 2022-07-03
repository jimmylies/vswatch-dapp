import * as React from 'react';
// import { routeNames } from 'routes';
// import sal from 'sal.js';
// import {
//   DappUI,
//   useGetLoginInfo,
//   useGetAccountInfo
// } from '@elrondnetwork/dapp-core';
// import { Link } from 'react-router-dom';

import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bag from '../../assets/img/bag.png';
import chart from '../../assets/img/chart.png';
import cyr from '../../assets/img/cyr.png';
import hands from '../../assets/img/hands.png';
import idea from '../../assets/img/idea.png';
import loupe from '../../assets/img/loupe.png';
import san from '../../assets/img/san.png';
import theo from '../../assets/img/theo.png';
import val from '../../assets/img/val.png';
import work from '../../assets/img/work.png';

const Home = () => {
  // document.querySelectorAll('.part-item-faq').forEach((e) => {
  //   e.addEventListener('click', () => {
  //     const answer = e.lastElementChild;
  //     if (answer != undefined) {
  //       answer.classList.toggle('activeFaq');
  //     }
  //   });
  // });

  // const showAnswer = (event: any) => {
  //   const answer = event.currentTarget.lastElementChild;
  //   answer?.classList.toggle('activeFaq');
  // };

  // document.addEventListener('scroll', () => {
  //   sal();
  // });

  // React.useEffect(() => {
  //   sal();
  // }, []);

  return (
    <div className='main-container'>
      <div className='home'>
        <p className='catchphrase text-focus-in'>
          The alliance between the technology of the future and a timeless
          creation
        </p>
      </div>
      <div id='project' className='part'>
        <p className='part-title'>Project</p>
        <div className='pres'>
          <h2
            onClick={(event) => {
              event.currentTarget?.parentElement
                ?.querySelectorAll('p')[0]
                .classList.toggle('display-pres');
              event.currentTarget?.parentElement
                ?.querySelector('.container-supply')
                ?.classList.toggle('display-pres');
            }}
          >
            ▼ Introduction
          </h2>
          <p>
            ValSan is a 3D collection of 2022 Watches. In this Watchpaper, you
            will discover how the VSWatch team wants to offer you a new NFT
            experience. The innovation of a title of ownership linked to an
            object, here a watch, orchestrated by the technology of the
            Blockchain. <br />
            <br />
            ValSan is the ambition to give birth to a new way of holding a
            material good from a dematerialized tool, an NFT.
            <br />
            Commonly used for its artistic side or for P2E game creation
            projects, VSWatch wants to highlight the clean use of an NFT in the
            current world in order to have traceability on the transactions
            performed, security and authenticity without flaw. Our long-term
            ambition is to become Elrond’s first boutique of reference.
            <br />
            <br />
            Thus, in order to become so, we will focus our development on
            several important pillars:
            <br />
            <br />
            1 • Having a committed and cohesive community that will be rewarded
            for its support.
            <br />
            2 • Respect the deadlines and the various stages announced on the
            Watchmap.
            <br />3 • Working with qualified people, delivering high quality
            products and services.
          </p>
          <h2
            onClick={(event) => {
              event.currentTarget?.parentElement
                ?.querySelectorAll('p')[1]
                .classList.toggle('display-pres');
            }}
          >
            ▼ Collection
          </h2>
          <p>
            Hosted on the Elrond Blockchain, each NFT will be categorized by
            different attributes (dial, bracelet, colors used), which will
            establish a level of rarity between each model.
            <br />
            <br />
            We chose to create a first collection of a 2022 supply to mark the
            first series of VSWatch. The Smart Contract based on the Elrond
            Blockchain technology will guarantee a random distribution of NFT
            during the launch of our mint.
            <br />
            <br />
            The first series will consist of 5 models:
            <br />
            <br />
            <span className='dw'>DW (Diawond Watch) : 42 NFTs</span>
            <br />
            <span className='gw'>GW (Gold Watch) : 180 NFT</span> <br />
            <span className='sw'>SW (Silver Watch) : 400 NFTs</span> <br />
            <span className='bw'>BW (Bronze Watch) : 600 NFTs</span> <br />
            <span className='cw'>CW (Common Watch) : 800 NFTs</span>
            <div className='container-supply'>
              <div className='supply'>
                <FontAwesomeIcon icon={faArrowTurnUp} />
                <span>Supply: 2022</span>
                <FontAwesomeIcon icon={faArrowTurnDown} />
              </div>
              <div className='container-details'>
                <div>
                  Presale <br />
                  500 SFTs <br />
                  0.75 $EGLD
                </div>
                <div>
                  Public sale <br />
                  1522 SFTs <br />1 $EGLD
                </div>
              </div>
            </div>
          </p>
          <h2
            onClick={(event) => {
              event.currentTarget?.parentElement
                ?.querySelectorAll('p')[2]
                .classList.toggle('display-pres');
            }}
          >
            ▼ Watch Box
          </h2>
          <p>
            In order not to influence the dirty public on sales and to keep a
            little suspense on the different models of watches, we opted for a
            case sft when we proceed with mint.
            <br />
            <br />
            This case sft will burn on the VSWatch website and the smart
            contract will automatically send you a random watch model.
            <br />
            <br />
            1 SFT = 1 WATCH BOX
            <br />1 WATCH BOX = 1 WATCH NFT
            <br />
            <br />
            This strategy will allow us to delay but also to avoid a drop in the
            price for our holders.
          </p>
          <div className='icons'>
            <img src={idea} alt='idea' />
            <img src={loupe} alt='loupe' />
            <img src={chart} alt='chart' />
          </div>
        </div>
        <div className='bande'></div>
      </div>
      <div id='watchmap' className='part'>
        <p className='part-title'>WATCHMAP</p>
        <div className='bande'></div>
      </div>
      <div id='team' className='part'>
        <p className='part-title'>TEAM</p>
        <div className='container-team'>
          <div className='team-member'>
            <h3>Valentin</h3>
            <img src={val} alt='Valentin' />
            <div className='member-info'>
              <p>
                After obtaining my engineering degree, I specialized in
                operational safety in the Naval field for 3 years. Since 2019, I
                am in the world of Blockchain as an investor at first and in the
                NFT since September. I am passionate about watches, new
                technologies and motor sport. I handle the project strategy,
                administrative/financial tasks and partnerships of VSWatch.
              </p>
            </div>
          </div>
          <div className='team-member'>
            <h3>Sandro</h3>
            <img src={san} alt='Sandro' />
            <div className='member-info'>
              <p>
                Formerly in the graphics industry, I am a person passionate
                about watches and technology in general and therefore
                blockchain. I am one of the creators of the VSWatch project and
                My role is to manage the team with the help of Valentin as well
                as implement the strategies for the smooth running of the
                project and the action plans. I also take care of community
                management and sometimes produce some visuals for communication.
              </p>
            </div>
          </div>
          <div className='team-member'>
            <h3>Theo</h3>
            <img src={theo} alt='Théo' />
            <div className='member-info'>
              <p>
                Currently in master of industrial design for 4 years, I
                specialized in automotive design. I started to take an interest
                in cryptocurrencies in 2016, but then in 2019 I started to
                invest. Loving beautiful objects, I have always been interested
                in watches and have the opportunity to work on an NFT related to
                this world is exciting. For my part, I am part of the design
                team, I imagine and I model the models of VSWatch watches.
              </p>
            </div>
          </div>
          <div className='team-member'>
            <h3>Cyrielle</h3>
            <img src={cyr} alt='Cyrielle' />
            <div className='member-info'>
              <p>
                After I got my engineering degree, I became interested in design
                and design, I wanted to learn new skills, to see new horizons. I
                knew by name the world of cryptocurrencies and NFT, seeing
                passing from time to time people talking about this subject on
                networks. It was with the VSWatch team that I had the
                opportunity to get started. A set of elements, such as project
                values, content, and the desire to learn, pushed me to join the
                project.To date, I am part of the design team, where I imagine
                and model the first NFT of VSWatch.
              </p>
            </div>
          </div>
          <div className='icons'>
            <img src={hands} alt='hands' />
            <img src={work} alt='work' />
            <img src={bag} alt='bag' />
          </div>
        </div>
        <div className='bande'></div>
      </div>
      <div id='faq' className='part'>
        <p className='part-title'>FAQ</p>
        <div className='faq-container'>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>
              Is there a “whitelist” role and an “og” role?
            </div>
            <div className='answer'>
              Yes, we have given the name of the “watchlist” role, which is
              commonly called the whitelist role. This role gives the advantage
              over the price of mint and participate in the presale. This role
              will be limited to 400 members.
              <br />
              <br />
              The “OG” role gives the right to many significant benefits,
              without penalizing newcomers. This role will be limited to 50
              members. THE BENEFITS of the OG role are:
              <br />
              • Be WL automatically for all our series
              <br />
              • Mint before wl
              <br />
              • Have exclusive information in advance
              <br />• Votes for certain decisions exclusive rewards
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>What’s the date of the mint?</div>
            <div className='answer'>
              We will announce 3 weeks in advance the date when we will launch
              the mint. The date will be communicated in the next version of the
              watchpaper.
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>
              How will you start the production of watches?
            </div>
            <div className='answer'>
              We have two options that are important to both of us:
              <br />
              • Work directly with a French/Swiss manufacturer <br />
              • Work in partnership with a brand that wants to gain visibility
              <br />
              <br />
              We work every day on the best solution to offer you exceptional
              and quality watches.
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>
              Do you have partnerships with Elrond projects?
            </div>
            <div className='answer'>
              For the moment we are discussing with some projects. We have
              identified the different projects with which we share the same
              values and the strategies of partnerships with each one.
              Partnerships will be announced as the project progresses.
              <br />
              <br />
              We are open to discussion if you would like to work with us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
