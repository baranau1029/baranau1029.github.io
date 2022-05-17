import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';

//import socialApp
import socialApp from '../img/socialapp/home.PNG';
import socialApp1 from '../img/socialapp/comments.PNG';
import socialApp2 from '../img/socialapp/profile.png';
import socialApp3 from '../img/socialapp/confirm.PNG';
import socialApp4 from '../img/socialapp/chat.PNG';
import socialApp5 from '../img/socialapp/resetpassword.PNG';

//import medeasy
import medeasy from '../img/medeasy/dashboard-cropped2.png';
import medeasy1 from '../img/medeasy/admin-orders.png';
import medeasy2 from '../img/medeasy/pending-orders.png';
import medeasy3 from '../img/medeasy/home.png';
import medeasy4 from '../img/medeasy/cart.PNG';
import medeasy5 from '../img/medeasy/orders.PNG';
import medeasy6 from '../img/medeasy/order-details.PNG';

// import chatapp
import chatapp from '../img/chat-app/1.PNG';
import chatapp1 from '../img/chat-app/2.PNG';

// import shop app
import shopapp from '../img/shop-app/2.png';
import shopapp1 from '../img/shop-app/1.png';
import shopapp2 from '../img/shop-app/3.png';
import shopapp3 from '../img/shop-app/4.png';
import shopapp4 from '../img/shop-app/5.png';
import shopapp5 from '../img/shop-app/6.png';
import shopapp6 from '../img/shop-app/7.png';

// socialapp RN
import socialapp from '../img/socialapp-rn/1.jpg';
import socialapp1 from '../img/socialapp-rn/2.jpg';
import socialapp2 from '../img/socialapp-rn/3.jpg';
import socialapp3 from '../img/socialapp-rn/4.jpg';
import socialapp4 from '../img/socialapp-rn/5.jpg';
import socialapp7 from '../img/socialapp-rn/8.jpg';
import socialapp8 from '../img/socialapp-rn/9.jpg';
import socialapp10 from '../img/socialapp-rn/11.jpg';

//chatify jpg
import chatify from '../img/chatify/2.jpg';
import chatify1 from '../img/chatify/3.jpg';
import chatify2 from '../img/chatify/4.jpg';
import chatify3 from '../img/chatify/5.jpg';
import chatify4 from '../img/chatify/6.jpg';
import chatify5 from '../img/chatify/7.jpg';
import chatify6 from '../img/chatify/8.jpg';
import chatify7 from '../img/chatify/9.jpg';

// ----------------WebP Images----------------

// import chatapp
import chatappWebP from '../img/chat-app/1.webp';
import chatappWebP1 from '../img/chat-app/2.webp';

//import medeasy
import medeasyWebP from '../img/medeasy/dashboard-cropped2.webp';
import medeasyWebP1 from '../img/medeasy/admin-orders.webp';
import medeasyWebP2 from '../img/medeasy/pending-orders.webp';
import medeasyWebP3 from '../img/medeasy/home.webp';
import medeasyWebP4 from '../img/medeasy/cart.webp';
import medeasyWebP5 from '../img/medeasy/orders.webp';
import medeasyWebP6 from '../img/medeasy/order-details.webp';

//import socialApp
import socialAppWebP from '../img/socialapp/home.webp';
import socialAppWebP1 from '../img/socialapp/comments.webp';
import socialAppWebP2 from '../img/socialapp/profile.webp';
import socialAppWebP3 from '../img/socialapp/confirm.webp';
import socialAppWebP4 from '../img/socialapp/chat.webp';
import socialAppWebP5 from '../img/socialapp/resetpassword.webp';

// import shop app
import shopappWebP from '../img/shop-app/2.webp';
import shopappWebP1 from '../img/shop-app/1.webp';
import shopappWebP2 from '../img/shop-app/3.webp';
import shopappWebP3 from '../img/shop-app/4.webp';
import shopappWebP4 from '../img/shop-app/5.webp';
import shopappWebP5 from '../img/shop-app/6.webp';
import shopappWebP6 from '../img/shop-app/7.webp';

// socialapp RN
import socialappWebP from '../img/socialapp-rn/1.webp';
import socialappWebP1 from '../img/socialapp-rn/2.webp';
import socialappWebP2 from '../img/socialapp-rn/3.webp';
import socialappWebP3 from '../img/socialapp-rn/4.webp';
import socialappWebP4 from '../img/socialapp-rn/5.webp';
import socialappWebP7 from '../img/socialapp-rn/8.webp';
import socialappWebP8 from '../img/socialapp-rn/9.webp';
import socialappWebP10 from '../img/socialapp-rn/11.webp';

//chatify
import chatifyWebP from '../img/chatify/2.webp';
import chatifyWebP1 from '../img/chatify/3.webp';
import chatifyWebP2 from '../img/chatify/4.webp';
import chatifyWebP3 from '../img/chatify/5.webp';
import chatifyWebP4 from '../img/chatify/6.webp';
import chatifyWebP5 from '../img/chatify/7.webp';
import chatifyWebP6 from '../img/chatify/8.webp';
import chatifyWebP7 from '../img/chatify/9.webp';

import Projects from './projects';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'SocialApp-RN',
          webLink: 'https://socialapp-serverr.herokuapp.com/static/socialapp-rn-2.apk',
          githubLink: 'https://github.com/baranau1029/SocialApp',
          description: 'Social Networking mobile app similar to Instagram in React Native.',
          stack: ['REACT-NATIVE', 'REDUX', 'SOCKET.IO', 'MONGODB', 'NODEJS', 'EXPRESS'],

          image: socialapp,
          image1: socialapp1,
          images: [socialapp2, socialapp3, socialapp4, socialapp7, socialapp8, socialapp10],

          imageWebP: socialappWebP,
          imageWebP1: socialappWebP1,
          imagesWebP: [socialappWebP2, socialappWebP3, socialappWebP4, socialappWebP7, socialappWebP8, socialappWebP10],

          dataLightbox: 'gallery-socialapp-rn',
          type: 'app',
        },

        {
          title: 'ShopApp',

          githubLink: 'https://github.com/baranau1029/ShopApp',
          description: 'An E-commerce shop app in React Native.',
          stack: ['REACTJS', 'REACT-NATIVE', 'REDUX', 'FIREBASE'],
          image: shopapp,
          image1: shopapp1,
          images: [shopapp2, shopapp3, shopapp4, shopapp5, shopapp6],

          imageWebP: shopappWebP,
          imageWebP1: shopappWebP1,
          imagesWebP: [shopappWebP2, shopappWebP3, shopappWebP4, shopappWebP5, shopappWebP6],
          dataLightbox: 'gallery-shopapp',
          type: 'app',
        },

        {
          title: 'Chatify',
          webLink: 'https://drive.google.com/drive/folders/110ropjkiKC5FIHfkLiHjSIPOlsfM1UMU?usp=sharing',
          githubLink: 'https://github.com/baranau1029/Chatify',
          description: 'Chat Application in flutter.',
          stack: ['FLUTTER', 'FIREBASE', 'AGORA-RTC'],

          image: chatify,
          image1: chatify1,
          images: [chatify2, chatify3, chatify4, chatify5, chatify6, chatify7],

          imageWebP: chatifyWebP,
          imageWebP1: chatifyWebP1,
          imagesWebP: [chatifyWebP2, chatifyWebP3, chatifyWebP4, chatifyWebP5, chatifyWebP6, chatifyWebP7],

          dataLightbox: 'gallery-chatify',
          type: 'app',
        },

        {
          title: 'SocialApp',
          webLink: 'https://sociallappp.herokuapp.com/',
          githubLink: 'https://github.com/baranau1029/SocialApp-MERN',
          description: 'This is a social networking webapp similar to Instagram.',
          stack: ['REACTJS', 'NODEJS', 'EXPRESSJS', 'MONGODB', 'BOOTSTRAP-MATERIAL'],
          image: socialApp,
          image1: socialApp1,
          images: [socialApp2, socialApp3, socialApp4, socialApp5],

          imageWebP: socialAppWebP,
          imageWebP1: socialAppWebP1,
          imagesWebP: [socialAppWebP2, socialAppWebP3, socialAppWebP4, socialAppWebP5],

          dataLightbox: 'gallery-socialapp',
          type: 'web',
        },
        {
          title: 'MedEasy',
          webLink: 'https://medeasyy.herokuapp.com/',
          githubLink: 'https://github.com/baranau1029/medEasy',
          description: 'MedEasy is an E-commerce website for medicines.',
          stack: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'NODEJS', 'EXPRESSJS', 'MONGODB'],
          image: medeasy,
          image1: medeasy1,
          images: [medeasy2, medeasy3, medeasy4, medeasy5, medeasy6],

          imageWebP: medeasyWebP,
          imageWebP1: medeasyWebP1,
          imagesWebP: [medeasyWebP2, medeasyWebP3, medeasyWebP4, medeasyWebP5, medeasyWebP6],

          dataLightbox: 'gallery-medeasy',
          type: 'web',
        },
        {
          title: 'Chat-App',
          webLink: 'https://chat-appln.netlify.com/',
          githubLink: 'https://github.com/baranau1029/chat-app',
          description: 'This is a Realtime chat app where users can join any room to chat.',
          stack: ['REACTJS', 'NODEJS', 'EXPRESSJS', 'SOCKET.IO'],
          image: chatapp1,
          image1: chatapp,
          images: [],

          imageWebP: chatappWebP1,
          imageWebP1: chatappWebP,
          imagesWebP: [],
          dataLightbox: 'gallery-chatapp',
          type: 'web',
        },
      ],
    };
  }
  render() {
    return (
      <section id='work' className='portfolio-mf sect-pt4 route'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='title-box text-center'>
                <h3 className='title-a s-port '>Portfolio</h3>
                <p className='subtitle-a'>Check Out Few Of My Selected Projects.</p>
                <div className='line-mf'></div>
              </div>
            </div>
          </div>

          <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label='All (6)'>
              <Projects projects={this.state.projects} type='All' />
            </Tab>
            <Tab label='App Developement (3)'>
              <Projects projects={this.state.projects} type='app' />
            </Tab>
            <Tab label='Web Developement (3)'>
              <Projects projects={this.state.projects} type='web' />
            </Tab>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default Portfolio;
