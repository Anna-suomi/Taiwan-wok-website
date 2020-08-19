import image from './data.js';
// console.log(image);
const navbar= document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-link');
 

window.addEventListener('scroll', () =>{

mainFn();

  
});


const mainFn=()=>{

    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add('sticky')

    } else {
        navbar.classList.remove('sticky')
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
            navbarLinks[i].classList.add('change')
        }
    });

}
mainFn();
window.addEventListener('resize', ()=>{

    window.loacation.reload();
})



const container = document.querySelector('.card-container-wrapper');

container.innerHTML = image.map((card,i)=>{
const {image,name, price,link} = card;

return `
 <div class="card-content center">
                   <div class="card-overlay center">
                       <h1 class="card-overlay-heading">${name}</h1>
                       <p class="card-price">P ${price}</p>
                       <a href="${link}" class="card-btn btn" target="_blank">Order now</a>
                    </div>
                       <img src="${image}" alt="">
                   
               </div>

`

})

const scroll = document.querySelector('.scroll-btn');
 scroll.addEventListener('click', ()=>{

     document.querySelector('html').style.scrollBehavior = 'smooth'

    setTimeout(()=>{
        document.querySelector('html').style.scrollBehavior = 'unset';

    },1000);
 })