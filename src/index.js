import './main.scss';
import Icon from './img/favicon.ico';
import { HeaderElement } from './app/header-element/header-element';
import { MainElement } from './app/main-element/main-element';

//Change favicon
const myIcon = Icon;
document.getElementById('favicon').setAttribute('href',myIcon);

//Create main app
const element = document.querySelector('.app');
const mainElement = new MainElement();
const headerElement = new HeaderElement();

const component = () => {
  element.appendChild(headerElement.header);
  element.appendChild(mainElement.main);
  }

component();




