import '../style.css';

const content = document.getElementById('content');

const header = document.createElement("div");
header.classList.add('header');
content.appendChild(header);

const heading = document.createElement("h1");
heading.classList.add("heading");
heading.textContent = "Welcome to myfastfoods";
header.appendChild(heading);

const sub_heading = document.createElement("p");
sub_heading.classList.add("para");
sub_heading.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cum numquam corrupti tempore consequatur est.Lorem ipsum dolor sit amet consectetur adipisicing elit.";
header.appendChild(sub_heading);

const order_btn = document.createElement("button");
order_btn.classList.add("button");
order_btn.textContent = "Order Now";
header.appendChild(order_btn);

