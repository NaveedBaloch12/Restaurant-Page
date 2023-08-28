import '../style.css';
import logo from '../img/logo.png';

const content = document.getElementById('content');

const navBar = document.createElement("div");
navBar.classList.add('navbar');
content.appendChild(navBar);

// div for navbar logo
const left_nav = document.createElement("div");
left_nav.classList.add('left_nav');
navBar.appendChild(left_nav);

// adding navbar logo
const WebLogo = new Image();
WebLogo.src = logo;
left_nav.appendChild(WebLogo);

// div for navbar links
const right_nav = document.createElement("div");
right_nav.classList.add('right_nav');
navBar.appendChild(right_nav);

//adding links in right nav

const nav_link_home = document.createElement("a");
nav_link_home.classList.add('nav_link_home');
nav_link_home.classList.add('nav_links');
nav_link_home.textContent = "Home";
right_nav.appendChild(nav_link_home);

const nav_link_services = document.createElement("a");
nav_link_services.classList.add('nav_link_services');
nav_link_services.classList.add('nav_links');
nav_link_services.textContent = "Services";
right_nav.appendChild(nav_link_services);

const nav_link_contact = document.createElement("a");
nav_link_contact.classList.add('nav_link_home');
nav_link_contact.classList.add('nav_links');
nav_link_contact.textContent = "Contact Us";
right_nav.appendChild(nav_link_contact);