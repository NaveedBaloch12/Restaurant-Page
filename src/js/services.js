import '../style.css';
import pic_1 from '../img/pic-1.jpg';
import pic_2 from '../img/pic-2.jpg';
import pic_3 from '../img/pic-3.jpg';

const content = document.getElementById('content');

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "Our Services";
content.append(heading);

const services = document.createElement("div");
services.classList.add('services');
content.appendChild(services);



// card 1
const card1 = document.createElement("div");
card1.classList.add("card");
services.append(card1);

const Img_1 = new Image();
Img_1.src = pic_1;
Img_1.classList.add('box_img')
card1.appendChild(Img_1);

const Sub_heading_1 = document.createElement("h2");
Sub_heading_1.textContent = "Food Rendering";
Sub_heading_1.classList.add('sub_heading')
card1.append(Sub_heading_1);

const para_1 = document.createElement("p");
para_1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum numquam corrupti tempore consequatur est.Lorem ipsum dolor sit amet consectetur adipisicing elit.";
para_1.classList.add('para');
card1.append(para_1);


// card 2
const card2 = document.createElement("div");
card2.classList.add("card");
services.append(card2);

const Img_2 = new Image();
Img_2.src = pic_2;
Img_2.classList.add('box_img')
card2.appendChild(Img_2);

const Sub_heading_2 = document.createElement("h2");
Sub_heading_2.textContent = "Food Rendering";
Sub_heading_2.classList.add('sub_heading')
card2.append(Sub_heading_2);

const para_2 = document.createElement("p");
para_2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum numquam corrupti tempore consequatur est.Lorem ipsum dolor sit amet consectetur adipisicing elit.";
para_2.classList.add('para');
card2.append(para_2);


// card 3
const card3 = document.createElement("div");
card3.classList.add("card");
services.append(card3);

const Img_3 = new Image();
Img_3.src = pic_3;
Img_3.classList.add('box_img')
card3.appendChild(Img_3);

const Sub_heading_3 = document.createElement("h2");
Sub_heading_3.textContent = "Food Rendering";
Sub_heading_3.classList.add('sub_heading')
card3.append(Sub_heading_3);

const para_3 = document.createElement("p");
para_3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum numquam corrupti tempore consequatur est.Lorem ipsum dolor sit amet consectetur adipisicing elit.";
para_3.classList.add('para');
card3.append(para_3);
