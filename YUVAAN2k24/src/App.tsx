import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from "./components/Navbar/Navbar";
import Timeline from "./components/Timeline/Timeline";
import Preview from "./components/Preview/Preview";
import LoadingPage from "./components/loading_page"

import './App.css'

function App() {
  
  
  

gsap.registerPlugin(ScrollTrigger);
const wrapper = document.querySelector('.wrapper');
const content = document.querySelector('.content');

ScrollTrigger.create({
  trigger: wrapper,
  start: 'bottom bottom',
  end: 'top top',
  pin: true,
});
const [isClicked, setIsClicked] = useState(false);

const handleButtonClick = () => {
  setIsClicked(true);
};



const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`);
}

document.addEventListener('scroll', () => {
  requestAnimationFrame(handleScroll);
  
});
document.addEventListener('DOMContentLoaded', function() {
  var total = 40,
      container = document.getElementById('container'),
      w = window.innerWidth,
      h = window.innerHeight,
      Tweens = [];

  for (var i = total; i--;) { 
      var Div = document.createElement('div');
      Div.classList.add('dot');
      if (container!=null){
      container.appendChild(Div);
      }
      
      Anim(Div);
      Tweens.push(Div);
  }

  function Anim(elm:HTMLDivElement) { 
      var randomX = R(w);
      var randomY = R(h);

      elm.style.transform = `translate(${randomX}px, ${randomY}px)`;
      elm.style.opacity = R(1).toString();
      elm.style.transform += `scale(${R(1) + 0.5})`;
      setTimeout(function() {
          Anim(elm);
      }, R(2000) + 1000);
  }

  function R(max: number) {
      return Math.random() * max;
  }
});



  return (
    <>
        <Navbar />
      
      {isClicked ? (
        ""
      ) : (
        <LoadingPage />
      )}
  
<div className="wrapper">
  <div className="content">
    <header className="header">
      <div className="layers">
        <div className="layer-title">
          <div className="subtitle">Welcome to</div>
          <div className="title">Yuvaan 2024</div>
          
        </div>
        <div className="layer layer-base"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-front"></div>
        

      </div>
      
      

    </header>
    <article className="article">
      <div className="article-content">
        <h2 className="article-title">Coming Soon ...</h2>
        <p className="article-text">
            Yuvaan, IIIT Guwahati's annual cultural festival, hosts talented scholars and media moguls, standing out as a majestic event amidst numerous college fests. It's a celebrated fusion of art, culture, and expression, attracting over 3,000 visitors from all over the country. YUVAAN aims to promote Indian Heritage, especially North East Art and Culture, inspiring young minds to embrace its values. The festival features diverse events, cultural pronites, talks by eminent speakers, and workshops. Yuvaan embodies IIITG's spirit of creative excellence and technical prowess while celebrating cultural diversity and creativity across various platforms.
        </p>
      </div>
      <div className="copy">© YUVAAN 2024</div>
    </article>
  </div>
</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script src="script.js" type="module"></script>


    </>
  )
}

export default App
