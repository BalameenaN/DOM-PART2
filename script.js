// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

//LAB1
//Part 1: Getting Started
//step1 --- set the element
const mainEl = document.querySelector("main");

//step2 ---- set the bgcolor
let bgColor = 'var(--main-bg)';
mainEl.style.backgroundColor = bgColor;

//step3---Set the content of mainEl
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//step4----Add a class of flex-ctr 
mainEl.classList.add("flex-ctr");
console.log(mainEl);

//PART 2:Creating a Menu Bar

// step1 ---- cache the element in a variable
const topMenuEl = document.querySelector("#top-menu");

//step2 ---Set the height
topMenuEl.style.height = "100%";

//step3 --- Set the background color
topMenuEl.style.backgroundColor = "#0e9aa7";

//step4 --- Add a class
topMenuEl.classList.add("flex-around");

//Part 3: Adding Menu Buttons

//step1 ---- Iterate over the entire menuLinks array
menuLinks.forEach((links) => {

  //step2---- Create an <a> element
  const anchorEl = document.createElement("a");

  // step3--- add an href attribute
  anchorEl.setAttribute("href", links.href);

  //step4-- Set the new element's content
  anchorEl.textContent = links.text;

  //step5-- Append the new element
  topMenuEl.append(anchorEl);
})
console.log(topMenuEl);

//LAB2
//Part 3: Creating the Submenu
//step1 --- cache the  element in a variable 
let subMenuEl = document.querySelector("#sub-menu");

//step2 ---- Set the height
subMenuEl.style.height = "100%";

//step3 ---- Set the background color
subMenuEl.style.backgroundColor = "#3da4ab";

//step4 ---- Add the class 
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

//Part 4: Adding Menu Interaction

const topMenuLinks = document.querySelectorAll("#top-menu a");


//event listener to topMenuEl
topMenuEl.addEventListener('click', function (event) {

  event.preventDefault();

  if (event.target.tagName != 'A') {
    return;
  }
  console.log(event.target.textContent);


})

console.log(topMenuLinks);
console.log(subMenuEl);

//create a helper function 
function buildSubmenu(sub) {
  subMenuEl.innerHTML = '';
  sub.forEach((link) => {
    let a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    subMenuEl.append(a);
  })
}
let hEl = document.querySelector("h1");
//
topMenuLinks.forEach((link) => {

  link.addEventListener('click', function (event) {

    const activeLink = menuLinks.find((link) => link.text === event.target.textContent);


    topMenuLinks.forEach(link => link.classList.remove('active'));
    
    event.target.classList.add('active');
    if (event.target.classList.contains("active") && activeLink.subLinks) {
    
      buildSubmenu(activeLink.subLinks);
      

      console.log("inside if");

      if(subMenuEl.style.top === '100%'){
        subMenuEl.style.top = 0;
      } else {
        subMenuEl.style.top = '100%';
      }
      
    } 
    else {
      subMenuEl.style.top = 0;
      hEl.textContent = event.target.textContent;

      console.log("else");
    }

  })
})

subMenuEl.addEventListener("click",function(event){
  event.preventDefault();
  if(event.target.tagName !== 'A'){
    return ;
  }
  console.log(event.target.textContent);

  subMenuEl.style.top = 0;
  topMenuLinks.forEach(link => link.classList.remove('active'));
  
  
  
  hEl.textContent = event.target.textContent;

})








