import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import './fonts/einafont.ttf';
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
            <img className="img-space filter-control" src={Filterimg}/>
            <span className={hoverNav ?'control-text-button': 'remove-text'}>Filter</span>
            <span className={!notification ? "notification" : 'remove-notification'}>4</span>
          </button>
          <ul onScroll={scrollChange} id="ulmain" className="ul-main">
            <li className="space-link"><img className="img-space" src={Pizza} alt="Pizza section"/>Pizza</li>
            <li><img className="img-space" src={Chicken} alt="Chicken section"/>Chiken</li>
            <li><img className="img-space" src={Burger} alt="Burger section"/>Burgers</li>
            <li><img className="img-space" src={Chinese} alt="Chinese food section"/>Chinese</li>
            <li> <img className="img-space" src={Thai} alt="Thai section" />Thai</li>
            <li> <img className="img-space" src={Asian} alt="Asian Food section" />Asian</li>
            <li><img className="img-space" src={Indian} alt="Indian food section"/>Indian</li>
            <li><img className="img-space" src={Sushi} alt="Sushi section"/>Sushi</li>
            <li><img className="img-space" src={Italian} alt="Italian food section"/>Italian</li>
            <li><img className="img-space" src={Desert} alt="Desert section"/>Desert</li>
            <li><img className="img-space" src={Healthy} alt="Healthy section"/>Healthy</li>
            <li><img className="img-space" src={Breakfast} alt="Breakfast section"/>Breakfast</li>
            <li><Link style={{color: '#FC6C44'}} to="/">See all</Link></li>
          </ul>
      </nav>
      </>
  );
}

export default Navbar;
