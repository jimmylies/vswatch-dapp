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
import cyr from '../../assets/img/cyr.png';
import hands from '../../assets/img/hands.png';
import idea from '../../assets/img/idea.png';
import loupe from '../../assets/img/loupe.png';
import san from '../../assets/img/san.png';
import theo from '../../assets/img/theo.png';
import val from '../../assets/img/val.png';
import work from '../../assets/img/work.png';

import sft from '../../assets/vid/sft.mp4';

const Home = ({ category }) => {
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
                ? 'https://drive.google.com/file/d/1ei0QEZcMU7WqZCpft5LuZr6N_kM5u5rJ/view?usp=sharing'
                : 'https://drive.google.com/file/d/1GBtD1tEp5LJz9rqCdD3hOIOEavfcqwMT/view?usp=sharing'
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
            <p className='part-title'>Project</p>
            <div className='pres'>
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[0]
                    .classList.toggle('display-pres');
                }}
              >
                ▼ Introduction
              </h2>
              <p>
                ValSan is a 3D collection of 2022 Watches. In this Watchpaper,
                you will discover how the VSWatch team wants to offer you a new
                NFT experience. The innovation of a title of ownership linked to
                an object, here a watch, orchestrated by the technology of the
                Blockchain. <br />
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
                <br />
                <br />
                Thus, in order to become so, we will focus our development on
                several important pillars:
                <br />
                <br />
                1 • Having a committed and cohesive community that will be
                rewarded for its support.
                <br />
                2 • Respect the deadlines and the various stages announced on
                the Watchmap.
                <br />3 • Working with qualified people, delivering high quality
                products and services.
              </p>
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[1]
                    .classList.toggle('display-pres');
                  event.currentTarget?.parentElement
                    ?.querySelector('.container-supply')
                    ?.classList.toggle('display-pres');
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
                We chose to create a first collection of a 2022 supply to mark
                the first series of VSWatch. The Smart Contract based on the
                Elrond Blockchain technology will guarantee a random
                distribution of NFT during the launch of our mint.
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
              </p>
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
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[2]
                    .classList.toggle('display-pres');
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('.sft-video')[0]
                    .classList.toggle('display-pres');
                }}
              >
                ▼ Watch Box
              </h2>
              <div className='container-watchbox'>
                <div className='sft-video'>
                  <video src={sft} autoPlay muted loop></video>
                </div>
                <p>
                  In order not to influence the dirty public on sales and to
                  keep a little suspense on the different models of watches, we
                  opted for a case sft when we proceed with mint.
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
                  This strategy will allow us to delay but also to avoid a drop
                  in the price for our holders.
                </p>
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
            <p className='part-title'>Projet</p>
            <div className='pres'>
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[0]
                    .classList.toggle('display-pres');
                }}
              >
                ▼ Introduction
              </h2>
              <p>
                ValSan est une collection 3D de 2022 montres. Dans ce
                Watchpaper, vous allez découvrir comment la team VSWatch
                souhaite vous offrir une nouvelle expérience des NFT.
                L’innovation d’un titre de propriété liée à un objet, ici une
                montre, orchestrée par la technologie de la Blockchain. <br />
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
                <br />
                <br />
                Ainsi, pour le devenir, nous allons axer notre développement sur
                plusieurs piliers importants :
                <br />
                <br />
                1 • Avoir une communauté engagée et soudée qui sera récompensée
                pour son soutien.
                <br />
                2 • Respecter les délais et les différentes étapes annoncés sur
                la Watchmap.
                <br />3 • Travailler avec des personnes qualifiées, délivrer des
                produits et services de haute qualité.
              </p>
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[1]
                    .classList.toggle('display-pres');
                  event.currentTarget?.parentElement
                    ?.querySelector('.container-supply')
                    ?.classList.toggle('display-pres');
                }}
              >
                ▼ Collection
              </h2>
              <p>
                Hébergés sur la Blockchain Elrond, chaque NFT sera catégorisé
                par différents attributs (cadran, bracelet, couleurs utilisées),
                ce qui permettra d’établir un niveau de rareté entre chaque
                modèle.
                <br />
                <br />
                Nous avons fait le choix de créer une première collection d’une
                supply de 2022 afin de marquer la première série de VSWatch. Le
                Smart Contract basé sur la technologie de la Blockchain Elrond
                garantira une distribution aléatoire des NFT lors du lancement
                de notre mint.
                <br />
                <br />
                La première série sera composée de 5 modèles:
                <br />
                <br />
                <span className='dw'>DW (Diawond Watch) : 42 NFTs</span>
                <br />
                <span className='gw'>GW (Gold Watch) : 180 NFT</span> <br />
                <span className='sw'>SW (Silver Watch) : 400 NFTs</span> <br />
                <span className='bw'>BW (Bronze Watch) : 600 NFTs</span> <br />
                <span className='cw'>CW (Common Watch) : 800 NFTs</span>
              </p>
              <div className='container-supply'>
                <div className='supply'>
                  <FontAwesomeIcon icon={faArrowTurnUp} />
                  <span>Quantité: 2022</span>
                  <FontAwesomeIcon icon={faArrowTurnDown} />
                </div>
                <div className='container-details'>
                  <div>
                    Prévente <br />
                    500 SFTs <br />
                    0.75 $EGLD
                  </div>
                  <div>
                    Vente publique <br />
                    1522 SFTs <br />1 $EGLD
                  </div>
                </div>
              </div>
              <h2
                onClick={(event) => {
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('p')[2]
                    .classList.toggle('display-pres');
                  event.currentTarget?.parentElement
                    ?.querySelectorAll('.sft-video')[0]
                    .classList.toggle('display-pres');
                }}
              >
                ▼ Ecrin
              </h2>
              <div className='container-watchbox'>
                <div className='sft-video'>
                  <video src={sft} autoPlay muted loop></video>
                </div>
                <p>
                  Afin de ne pas influencer la public sale sur les ventes et
                  pour garder un peu de suspens sur les différents modèles de
                  montres, nous avons opté pour un SFT d’écrin lorsque nous
                  procéderons au mint.
                  <br />
                  <br />
                  Ce SFT d’écrin sera à burn sur le site VSWatch et le smart
                  contract vous renverra automatiquement un modèle de montre
                  aléatoire
                  <br />
                  <br />
                  1 SFT = 1 ECRIN
                  <br />1 ECRIN = 1 NFT MONTRE
                  <br />
                  <br />
                  Cette stratégie nous permettra de temporiser mais aussi
                  d’éviter une chute du prix pour nos holders.
                </p>
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
        <p className='part-title'>WATCHMAP</p>
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
                <div className='member-info'>
                  <p>
                    After obtaining my engineering degree, I specialized in
                    operational safety in the Naval field for 3 years. Since
                    2019, I am in the world of Blockchain as an investor at
                    first and in the NFT since September. I am passionate about
                    watches, new technologies and motor sport. I handle the
                    project strategy, administrative/financial tasks and
                    partnerships of VSWatch.
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
                    blockchain. I am one of the creators of the VSWatch project
                    and My role is to manage the team with the help of Valentin
                    as well as implement the strategies for the smooth running
                    of the project and the action plans. I also take care of
                    community management and sometimes produce some visuals for
                    communication.
                  </p>
                </div>
              </div>
              <div className='team-member'>
                <h3>Theo</h3>
                <img src={theo} alt='Théo' />
                <div className='member-info'>
                  <p>
                    Currently in master of industrial design for 4 years, I
                    specialized in automotive design. I started to take an
                    interest in cryptocurrencies in 2016, but then in 2019 I
                    started to invest. Loving beautiful objects, I have always
                    been interested in watches and have the opportunity to work
                    on an NFT related to this world is exciting. For my part, I
                    am part of the design team, I imagine and I model the models
                    of VSWatch watches.
                  </p>
                </div>
              </div>
              <div className='team-member'>
                <h3>Cyrielle</h3>
                <img src={cyr} alt='Cyrielle' />
                <div className='member-info'>
                  <p>
                    After I got my engineering degree, I became interested in
                    design and design, I wanted to learn new skills, to see new
                    horizons. I knew by name the world of cryptocurrencies and
                    NFT, seeing passing from time to time people talking about
                    this subject on networks. It was with the VSWatch team that
                    I had the opportunity to get started. A set of elements,
                    such as project values, content, and the desire to learn,
                    pushed me to join the project.To date, I am part of the
                    design team, where I imagine and model the first NFT of
                    VSWatch.
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
        </>
      ) : (
        <>
          <div id='team' className='part'>
            <p className='part-title'>EQUIPE</p>
            <div className='container-team'>
              <div className='team-member'>
                <h3>Valentin</h3>
                <img src={val} alt='Valentin' />
                <div className='member-info'>
                  <p>
                    Après avoir obtenu mon diplôme d’ingénieur, je me suis
                    spécialisé dans la sûreté de fonctionnement dans le domaine
                    Naval depuis 3 ans. Depuis 2019, je suis dans le monde de la
                    Blockchain en tant qu’investisseur dans un premier temps et
                    dans les NFT depuis Septembre. Je suis passionné par les
                    montres, les nouvelles technologies et par le sport
                    automobile. Je m’occupe de la stratégie projet, les tâches
                    administratives/financières et les partenariats de VSWatch.
                  </p>
                </div>
              </div>
              <div className='team-member'>
                <h3>Sandro</h3>
                <img src={san} alt='Sandro' />
                <div className='member-info'>
                  <p>
                    Anciennement dans l’industrie graphique, je suis une
                    personne passionnée par les montres et la technologie en
                    général et donc la Blockchain. je suis l’un des créateurs du
                    projet VSWatch et mon rôle est de manager la team à l’aide
                    de Valentin ainsi que mettre en place les stratégies pour le
                    bon déroulement du projet et les plans d’action. Je m’occupe
                    aussi du community management et parfois de produire
                    quelques visuels pour la communication.
                  </p>
                </div>
              </div>
              <div className='team-member'>
                <h3>Theo</h3>
                <img src={theo} alt='Théo' />
                <div className='member-info'>
                  <p>
                    Actuellement en master de design industriel depuis 4 ans, je
                    me suis spécialisé dans le design automobile. J’avais
                    commencé à m’intéresser aux crypto-monnaies en 2016 mais
                    c’est qu’ensuite en 2019 que j’ai commencé à investir.
                    Aimant les beaux objets, je me suis toujours intéressé aux
                    montres et avoir l’occasion de travailler sur une NFT en
                    rapport avec ce monde est passionnant. Pour ma part, je fais
                    partie de l’équipe design, j’imagine et je modélise les
                    modèles de montres de VSWatch.
                  </p>
                </div>
              </div>
              <div className='team-member'>
                <h3>Cyrielle</h3>
                <img src={cyr} alt='Cyrielle' />
                <div className='member-info'>
                  <p>
                    Après l’obtention de mon diplôme d’ingénieur, je me suis
                    intéressé au design et à la conception, j’ai voulu acquérir
                    de nouvelles compétences et voir de nouveaux horizons. C’est
                    avec l’équipe de VSWatch que j’ai eu l’opportunité de me
                    lancer. Un ensemble d’éléments, comme les valeurs du projet,
                    le contenu, et le désir d’apprendre, m’a poussé à rejoindre
                    le projet. À ce jour, je fais partie de l’équipe design, où
                    j’imagine et modélise les SFTS de VSWatch.
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
