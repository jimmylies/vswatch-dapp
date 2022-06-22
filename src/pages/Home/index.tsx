import * as React from 'react';
// import { routeNames } from 'routes';
// import sal from 'sal.js';
// import {
//   DappUI,
//   useGetLoginInfo,
//   useGetAccountInfo
// } from '@elrondnetwork/dapp-core';
// import { Link } from 'react-router-dom';

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
          <p>
            ValSan est une collection 3D de 2022 Montres. Dans ce
            Watchpaper,vous allez découvrir comment la team VSWatch souhaite
            vous offrir une nouvelle expérience des NFTs. L’innovation d’un
            titre de propriété liée à un objet, ici une montre, orchestrée par
            la technologie de la Blockchain. ValSan c’est l’ambition de donner
            naissance à une nouvelle manière de détenir un bien matériel à
            partir d’un outil dématérialisé, un NFT. Communément utilisé pour
            son côté artistique ou pour des projets de création de jeux P2E,
            VSWatch souhaite mettre en avant l’utilisation propre d’un NFT dans
            le monde actuel afin d’avoir une traçabilité sur les transactions
            effectuées, une sécurité et une authenticité sans faille. Notre
            ambition à long terme est de devenir la 1ère boutique de référence
            d’Elrond. Ainsi, pour le devenir, nous allons axer notre
            développement sur plusieurs piliers importants:
            <br />
            <br />
            1/ Avoir unecommunauté engagée et soudée qui sera récompensée pour
            son soutien.
            <br />
            2/ Respecter les délais et les différentes étapes annoncés sur la
            Watchmap.
            <br />
            3/ Travailler avec despersonnes qualifiées, délivrer des produits et
            services de haute qualité.
          </p>
        </div>
      </div>
      <div id='watchmap' className='part'>
        <p className='part-title'>WATCHMAP</p>
      </div>
      <div id='team' className='part'>
        <p className='part-title'>TEAM</p>
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
              Existe-t-il un rôle whitelist et un rôle og?
            </div>
            <div className='answer'>
              Oui, nous avons donné le nom du rôle watchlist qui remplace
              communément appelé le rôle whitelist. Ce rôle donne
              l&apos;avantage sur le prix du mint et de participer à la presale.
              Ce rôle sera limité à 400 membres. Le rôle OG donne le droit à de
              nombreux avantages significatifs, sans pour autant être pénalisant
              pour les nouveaux arrivants. Ce rôle sera limité à 50 membres.
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>Quelle est la date du mint?</div>
            <div className='answer'>
              Nous annoncerons 3 semaines en avance la date où nous allons
              lancer le mint. La date sera communiquée dans la prochaine version
              du watchpaper.
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>
              Comment allez-vous lancer la production des montres?
            </div>
            <div className='answer'>
              Nous avons deux possibilités qui nous tiennent toutes deux à coeur
              : - Travailler directement avec un manufacturier français/suisse;
              - travailler en partenariat avec une marque qui souhaite gagner en
              visibilité. Nous travaillons tous les jours sur la meilleure
              solution pour vous proposer des montres exceptionnelles et de
              qualité.
            </div>
          </div>
          <div
            className='faq'
            onClick={(event: any) => {
              event.currentTarget.lastElementChild.classList.toggle('active');
            }}
          >
            <div className='question'>
              Avez-vous des partenariats avec des projets Elrond?
            </div>
            <div className='answer'>
              Pour l&apos;instant non. Nous avons identifié les différents
              projets avec qui nous partageons les mêmes valeurs et les
              stratégies de partenariats avec chacun. L’annonce des partenariats
              se fera au fur et à mesure du projet. Nous sommes ouverts à la
              discussion si vous souhaitez travailler avec nous.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
