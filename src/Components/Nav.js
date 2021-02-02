import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Pizza from './images/pizza.png';
import Filterimg from './images/slider_03.png';
import Chicken from './images/chiken.png';
import Burger from './images/BURGER.png';
import Thai from './images/thai.png';
import Chinese from './images/Wokbox.png';
import Asian from './images/asian.png';
import Indian from './images/Indian.png';
import Sushi from './images/Sushi.png';
import Italian from './images/Italian.png';
import Desert from './images/Desert.png';
import Healthy from './images/Healthy.png';
import Breakfast from './images/Breakfast.png';




function Navbar() {
  const [hoverNav, setHoverNav] = useState('fixxedbutton'); 
  const [notification, setNotification] = useState('remove-notification'); 
  let minusPlus = {
  /* We need to stop minus at 0*/
  stopCounting: false
};

  const scrollChange = () => {
    const element = document.getElementById('ulmain');
    const x = element.scrollLeft;
    if(x > 25) {
      setHoverNav();
      setNotification();
    } else {
      setHoverNav('fixxedbutton');
      setNotification('remove-notification');
    }
}


  return (
      <>
    <nav className="nav-menu">
          <button className={hoverNav ? 'fixedbutton' : 'smaller-button'}>
            <img className="img-space" src={Filterimg}/>
            <span className={hoverNav ?'control-text-button': 'remove-text'}>Filter</span>
            <span className={!hoverNav ? "notification" : 'remove-notification'}>4</span>
          </button>
          <ul onScroll={scrollChange} id="ulmain" className="ul-main">
            <li className="space-link"><img className="img-space" src={Pizza}/>Pizza</li>
            <li><img className="img-space" src={Chicken}/>Chiken</li>
            <li><img className="img-space" src={Burger}/>Burgers</li>
            <li><img className="img-space" src={Chinese}/>Chinese</li>
            <li><img className="img-space" src={Thai}/>Thai</li>
            <li><img className="img-space" src={Asian}/>Asian</li>
            <li><img className="img-space" src={Indian}/>Indian</li>
            <li><img className="img-space" src={Sushi}/>Sushi</li>
            <li><img className="img-space" src={Italian}/>Italian</li>
            <li><img className="img-space" src={Desert}/>Desert</li>
            <li><img className="img-space" src={Healthy}/>Healthy</li>
            <li><img className="img-space" src={Breakfast}/>Breakfast</li>
            <li><Link style={{color: '#FC6C44'}} to="/">See all</Link></li>
          </ul>
      </nav>
      </>
  );
}

export default Navbar;
