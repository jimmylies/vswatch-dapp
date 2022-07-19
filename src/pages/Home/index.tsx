import * as React from 'react';
// import { routeNames } from 'routes';
// import sal from 'sal.js';
// import {
//   DappUI,
//   useGetLoginInfo,
//   useGetAccountInfo
// } from '@elrondnetwork/dapp-core';
// import { Link } from 'react-router-dom';

import {
  faArrowTurnDown,
  faArrowTurnUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bag from '../../assets/img/bag.png';
import chart from '../../assets/img/chart.png';
import clock from '../../assets/img/clock.png';
import cyr from '../../assets/img/cyr.png';
import hands from '../../assets/img/hands.png';
import idea from '../../assets/img/idea.png';
import jim from '../../assets/img/jim.png';
import loupe from '../../assets/img/loupe.png';
import san from '../../assets/img/san.png';
import theo from '../../assets/img/theo.png';
import val from '../../assets/img/val.png';
import work from '../../assets/img/work.png';

import sft from '../../assets/vid/sft.mp4';

const Home = ({ category }) => {
  // document.addEventListener('scroll', () => {
  //   sal();
  // });

  // React.useEffect(() => {
  //   sal();
  // }, []);

  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const clock = document.querySelectorAll('.clock')[0] as HTMLDivElement;
    clock.style.transform = `rotate(${scroll / 2}deg)`;
    if (scroll < 1000) {
      clock.style.display = 'none';
    } else {
      clock.style.display = 'flex';
    }
  });

  const [number, setNumber] = React.useState<number>(0);

  let value = 0;
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNumber(value);
      if (value < 2022) value += 6;
    }, 5);
  }, []);

  return (
    <div className='main-container'>
      <div className='home'>
        <div className='vs2022'>
          <div className='c2022'>{number}</div>
          <span>VSWATCH</span>
          <p className='catchphrase text-focus-in'>
            {category === 'English'
              ? 'The alliance between the technology of the future and a timeless creation.'
              : 'L’alliance entre la technologie du futur et une création intemporelle.'}
          </p>
          <a
            className='watchpaper'
            href={
              category === 'English'
                ? 'https://drive.google.com/file/d/1CdC43_b9iJWENBLv7QPTXAKNJjxdXaMw/view?usp=sharing'
                : 'https://drive.google.com/file/d/10F3Lk6FvDKW6pbgwNZe1DBSrsFuqp9g0/view?usp=sharing'
            }
            target='_blank'
            rel='noreferrer'
          >
            Watchpaper
          </a>
        </div>
      </div>
      {category === 'English' ? (
        <>
          <div id='project' className='part'>
            <p className='part-title'>What is VSWatch?</p>
            <div className='pres'>
              <p>
                ValSan is a 3D collection of 2022 Watches.
                <br />
                <br />
                The innovation of a title of ownership linked to an object, here
                a watch, orchestrated by the technology of the Blockchain.
                <br />
                <br />
                ValSan is the ambition to give birth to a new way of holding a
                material good from a dematerialized tool, an NFT.
                <br />
                Commonly used for its artistic side or for P2E game creation
                projects, VSWatch wants to highlight the clean use of an NFT in
                the current world in order to have traceability on the
                transactions performed, security and authenticity without flaw.
                Our long-term ambition is to become Elrond’s first boutique of
                reference.
              </p>

              <div className='container-watchbox'>
                <div className='sft-video'>
                  <video src={sft} autoPlay muted loop></video>
                </div>
                <div className='watchbox-right'>
                  <p className='part-title'>VSWATCH BOX</p>
                  <p>
                    The mint will allow you to receive a watch box thenafter
                    burning your SFT you will receive one of the 5 watch models.
                    <br />
                    <br />
                    1 SFT = 1 WATCH BOX
                    <br />
                    1 WATCH BOX = 1 WATCH NFT
                    <br />
                    <br />
                    The first series will consist of 5 models:
                    <br />
                    <br />
                    <span>DW (Diawond Watch) : 42 NFTs</span>
                    <span>GW (Gold Watch) : 180 NFT</span>
                    <span>SW (Silver Watch) : 400 NFTs</span>
                    <span>BW (Bronze Watch) : 600 NFTs</span>
                    <span>CW (Common Watch) : 800 NFTs</span>
                  </p>
                </div>
              </div>
              <div className='icons'>
                <img src={idea} alt='idea' />
                <img src={loupe} alt='loupe' />
                <img src={chart} alt='chart' />
              </div>
            </div>
            <div className='bande'></div>
          </div>
        </>
      ) : (
        <>
          <div id='project' className='part'>
            <p className='part-title'>Qu&apos;est-ce que VSWatch?</p>
            <div className='pres'>
              <p>
                ValSan est une collection 3D de 2022 montres.
                <br />
                <br />
                L’innovation d’un titre de propriété liée à un objet, ici une
                montre, orchestrée par la technologie de la Blockchain.
                <br />
                <br />
                ValSan c’est l’ambition de donner naissance à une nouvelle
                manière de détenir un bien matériel à partir d’un outil
                dématérialisé, un NFT.
                <br />
                Communément utilisé pour son côté artistique ou pour des projets
                de création de jeux P2E, VSWatch souhaite mettre en avant
                l’utilisation propre d’un NFT dans le monde actuel afin d’avoir
                une traçabilité sur les transactions effectuées, une sécurité et
                une authenticité sans faille. Notre ambition à long terme est de
                devenir la 1ère boutique de référence de Elrond.
              </p>

              <div className='container-watchbox'>
                <div className='sft-video'>
                  <video src={sft} autoPlay muted loop></video>
                </div>
                <div className='watchbox-right'>
                  <p className='part-title'>Ecrin VSWATCH</p>
                  <p>
                    Le mint vous permettra de recevoir un écrin, qui, lorsque
                    vous le brûlerez, sera échangé contre un des 5 modèles de
                    montres.
                    <br />
                    <br />
                    1 SFT = 1 Ecrin
                    <br />
                    1 Ecrin = 1 NFT Montre
                    <br />
                    <br />
                    La première série sera composée de 5 modèles:
                    <br />
                    <br />
                    <span>DW (Diawond Watch) : 42 NFTs</span>
                    <span>GW (Gold Watch) : 180 NFT</span>
                    <span>SW (Silver Watch) : 400 NFTs</span>
                    <span>BW (Bronze Watch) : 600 NFTs</span>
                    <span>CW (Common Watch) : 800 NFTs</span>
                  </p>
                </div>
              </div>
              <div className='icons'>
                <img src={idea} alt='idea' />
                <img src={loupe} alt='loupe' />
                <img src={chart} alt='chart' />
              </div>
            </div>
            <div className='bande'></div>
          </div>
        </>
      )}
      <div id='watchmap' className='part'>
        <div className='pres'>
          {category === 'English' ? (
            <>
              <div className='part-title title-watchmap'>WATCHMAP</div>
              <div className='roadmap'>
                <div className='item-left'>
                  <div className='roadmap-item'>
                    <div className='item-header'>
                      <h2>Chap1: Start</h2>
                      <div className='q'>Q1 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• VSWatch settle on ElrondNetwork </span>
                      <span>• Socials: Twitter/Discord/Website/Instagram</span>
                      <span>• Opening of the watchlist to the public</span>
                      <span>• Various giveaways and games </span>
                      <span>• Watchpaper v1</span>
                      <span>• Network marketing</span>
                      <span>• First Reveal</span>
                    </div>
                  </div>
                  <div className='roadmap-item opacity'>
                    <div className='item-header'>
                      <h2>Chap2: Construction</h2>
                      <div className='q'>Q2 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• Partnerships with Elrond Projects</span>
                      <span>• Watchpaper v2</span>
                      <span>• Second Reveal</span>
                      <span>• Various giveaways and games </span>
                      <span>• Presale: First drop (WL/OG supply 500)</span>
                      <span>• Public sale: Second drop (supply 1522)</span>
                    </div>
                  </div>
                  <div className='roadmap-item'>
                    <div className='item-header'>
                      <h2>Chap3: Production</h2>
                      <div className='q'>Q3-Q4 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• Rewards for holders </span>
                      <span>• Lottery</span>
                      <span>• Watchpaper V3</span>
                      <span>• Burn of Watch box </span>
                      <span>• Partnership IRL</span>
                      <span>• Work on IRL Watch product</span>
                      <span>• Working on $VST token governance</span>
                    </div>
                  </div>
                  <div className='roadmap-item opacity'>
                    <div className='item-header'>
                      <h2>Chap 4: Launch of our Store!</h2>
                      <div className='q'>2023</div>
                    </div>
                  </div>
                </div>
                <div className='light-line'></div>
                <div className='item-right'>
                  <div className='roadmap-item opacity'>
                    <div className='item-header'>
                      <h2>Chap1: Start</h2>
                      <div className='q'>Q1 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• VSWatch settle on ElrondNetwork </span>
                      <span>• Socials: Twitter/Discord/Website/Instagram</span>
                      <span>• Opening of the watchlist to the public</span>
                      <span>• Various giveaways and games </span>
                      <span>• Watchpaper v1</span>
                      <span>• Network marketing</span>
                      <span>• First Reveal</span>
                    </div>
                  </div>
                  <div className='roadmap-item'>
                    <div className='item-header'>
                      <h2>Chap2: Construction</h2>
                      <div className='q'>Q2 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• Partnerships with Elrond Projects</span>
                      <span>• Watchpaper v2</span>
                      <span>• Second Reveal</span>
                      <span>• Various giveaways and games </span>
                      <span>• Presale: First drop (WL/OG supply 500)</span>
                      <span>• Public sale: Second drop (supply 1522)</span>
                    </div>
                  </div>
                  <div className='roadmap-item opacity'>
                    <div className='item-header'>
                      <h2>Chap3: Production</h2>
                      <div className='q'>Q3-Q4 2022</div>
                    </div>
                    <div className='steps'>
                      <span>• Rewards for holders </span>
                      <span>• Lottery</span>
                      <span>• Watchpaper V3</span>
                      <span>• Burn of Watch box </span>
                      <span>• Partnership IRL</span>
                      <span>• Work on IRL Watch product</span>
                      <span>• Working on $VST token governance</span>
                    </div>
                  </div>
                  <div className='roadmap-item'>
                    <div className='item-header'>
                      <h2>Chap 4: Launch of our Store!</h2>
                      <div className='q'>2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='part-title title-watchmap'>WATCHMAP</div>

              <div className='roadmap'>
                <div className='roadmap-item'>
                  <div className='item-header'>
                    <h2>Chap1: Lancement</h2>
                    <div className='q'>Q1 2022</div>
                  </div>
                  <div className='steps'>
                    <span>• Lancement de VSWatch sur ElrondNetwork</span>
                    <span>• Réseaux : Twitter/Discord/Website/Instagram</span>
                    <span>• Ouverture de la Watchlist au public</span>
                    <span>• Divers jeux et concours</span>
                    <span>• Watchpaper v1</span>
                    <span>• Network marketing</span>
                    <span>• Premier reveal</span>
                  </div>
                </div>
                <div className='roadmap-item'>
                  <div className='item-header'>
                    <h2>Chap2: Construction</h2>
                    <div className='q'>Q1 2022</div>
                  </div>
                  <div className='steps'>
                    <span>• Partenariats avec d’autres projets Elrond</span>
                    <span>• Watchpaper v2</span>
                    <span>• Second Reveal</span>
                    <span>• Divers jeux et concours</span>
                    <span>• Pré-vente : premier drop (WL / OG supply 500)</span>
                    <span>• Vente publique: second drop (supply 1522)</span>
                  </div>
                </div>
                <div className='roadmap-item'>
                  <div className='item-header'>
                    <h2>Chap3: Production</h2>
                    <div className='q'>Q1 2022</div>
                  </div>
                  <div className='steps'>
                    <span>• Récompenses pour les détenteurs</span>
                    <span>• Loterie</span>
                    <span>• Watchpaper V3</span>
                    <span>• Burn de la Watch Box</span>
                    <span>• Partenariats IRL</span>
                    <span>• Lancement de la production des montres IRL</span>
                    <span>• Lancement du token $VST</span>
                  </div>
                </div>
                <div className='roadmap-item'>
                  <div className='item-header'>
                    <h2>Chap 4: Lancement de la boutique!</h2>
                    <div className='q'>2023</div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className='container-clock'>
            <img src={clock} alt='clock' className='clock' />
          </div>
        </div>

        <div className='bande'></div>
      </div>
      {category === 'English' ? (
        <>
          <div id='team' className='part'>
            <p className='part-title'>TEAM</p>
            <div className='container-team'>
              <div className='team-member'>
                <h3>Valentin</h3>
                <img src={val} alt='Valentin' />
                <div className='member-info'>CEO</div>
              </div>
              <div className='team-member'>
                <h3>Sandro</h3>
                <img src={san} alt='Sandro' />
                <div className='member-info'>CTO</div>
              </div>
              <div className='team-member'>
                <h3>Theo</h3>
                <img src={theo} alt='Théo' />
                <div className='member-info'>Designer</div>
              </div>
              <div className='team-member'>
                <h3>Cyrielle</h3>
                <img src={cyr} alt='Cyrielle' />
                <div className='member-info'>Designer</div>
              </div>
              <div className='team-member'>
                <h3>Jim</h3>
                <img src={jim} alt='Jim' />
                <div className='member-info'>Dev</div>
              </div>
            </div>
            <div className='icons'>
              <img src={hands} alt='hands' />
              <img src={work} alt='work' />
              <img src={bag} alt='bag' />
            </div>
            <div className='bande'></div>
          </div>
        </>
      ) : (
        <>
          <div id='team' className='part'>
            <p className='part-title'>EQUIPE</p>
            <div className='container-team'>
              <div className='team-member'>
                <h3>Valentin</h3>
                <img src={val} alt='Valentin' />
                <div className='member-info'>CEO</div>
              </div>
              <div className='team-member'>
                <h3>Sandro</h3>
                <img src={san} alt='Sandro' />
                <div className='member-info'>CTO</div>
              </div>
              <div className='team-member'>
                <h3>Theo</h3>
                <img src={theo} alt='Théo' />
                <div className='member-info'>Designer</div>
              </div>
              <div className='team-member'>
                <h3>Cyrielle</h3>
                <img src={cyr} alt='Cyrielle' />
                <div className='member-info'>Designer</div>
              </div>
              <div className='team-member'>
                <h3>Jim</h3>
                <img src={jim} alt='Jim' />
                <div className='member-info'>Dev</div>
              </div>
            </div>
            <div className='icons'>
              <img src={hands} alt='hands' />
              <img src={work} alt='work' />
              <img src={bag} alt='bag' />
            </div>
            <div className='bande'></div>
          </div>
        </>
      )}

      {category === 'English' ? (
        <>
          <div id='faq' className='part'>
            <p className='part-title'>FAQ</p>
            <div className='faq-container'>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>
                  Is there a “whitelist” role and an “og” role?
                </div>
                <div className='answer'>
                  Yes, we have given the name of the “watchlist” role, which is
                  commonly called the whitelist role. This role gives the
                  advantage over the price of mint and participate in the
                  presale. This role will be limited to 400 members.
                  <br />
                  <br />
                  The “OG” role gives the right to many significant benefits,
                  without penalizing newcomers. This role will be limited to 50
                  members. THE BENEFITS of the OG role are:
                  <br />
                  <br />
                  • Be WL automatically for all our series
                  <br />
                  • Mint before wl
                  <br />
                  • Have exclusive information in advance
                  <br />• Votes for certain decisions <br />• Exclusive rewards
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>What’s the date of the mint?</div>
                <div className='answer'>
                  We will announce 3 weeks in advance the date when we will
                  launch the mint. The date will be communicated in the next
                  version of the watchpaper.
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>
                  How will you start the production of watches?
                </div>
                <div className='answer'>
                  We have two options that are important to both of us:
                  <br />
                  • Work directly with a French/Swiss manufacturer <br />
                  • Work in partnership with a brand that wants to gain
                  visibility
                  <br />
                  <br />
                  We work every day on the best solution to offer you
                  exceptional and quality watches.
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
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
                  We are open to discussion if you would like to work with us.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id='faq' className='part'>
            <p className='part-title'>FAQ</p>
            <div className='faq-container'>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>
                  Existe-t-il un rôle “Whitelist” et un rôle “OG” ?
                </div>
                <div className='answer'>
                  Oui, nous avons donné le nom du rôle “Watchlist” qui remplace
                  communément le rôle Whitelist. Ce rôle donne l’avantage sur le
                  prix du mint et de participer à la presale. Ce rôle sera
                  limité à 400 membres.
                  <br />
                  <br />
                  Le rôle “OG” donne le droit à de nombreux avantages
                  significatifs, sans pour autant être pénalisant pour les
                  nouveaux arrivants. Ce rôle sera limité à 50 membres. les
                  avantages du rôle OG sont les suivants :
                  <br />
                  <br />
                  • Être WL automatiquement pour toutes nos séries
                  <br />
                  • Mint avant les WL
                  <br />
                  • Avoir des informations exclusives en avance
                  <br />• Votes pour certaines décisions
                  <br />• Récompenses exclusives
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>Quelle est la date du mint ?</div>
                <div className='answer'>
                  Nous annoncerons 3 semaines en avance la date où nous allons
                  lancer le mint. Celle-ci sera communiquée sur nos réseaux
                  (Discord, Twitter, Site Web).
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>
                  Comment allez-vous lancer la production des montres ?
                </div>
                <div className='answer'>
                  Nous avons deux possibilités qui nous tiennent toutes deux à
                  coeur :
                  <br />• Travailler directement avec un manufacturier
                  français/suisse <br />
                  • Travailler en partenariat avec une marque qui souhaite
                  gagner en visibilité
                  <br />
                  <br />
                  Nous travaillons tous les jours sur la meilleure solution pour
                  vous proposer des montres exceptionnelles et de qualité.
                </div>
              </div>
              <div
                className='faq'
                onClick={(event: any) => {
                  event.currentTarget.lastElementChild.classList.toggle(
                    'active'
                  );
                }}
              >
                <div className='question'>
                  Avez-vous des partenariats avec des projets Elrond ?
                </div>
                <div className='answer'>
                  Pour l’instant nous sommes en discutions avec plusieurs
                  projets. Nous avons identifié les différents projets avec qui
                  nous partageons les mêmes valeurs et les stratégies de
                  partenariats avec chacun. L’annonce des partenariats se fera
                  au fur et à mesure du projet.
                  <br />
                  <br />
                  Nous sommes ouverts à la discussion si vous souhaitez
                  travailler avec nous.
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
