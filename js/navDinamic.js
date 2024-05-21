
const nav = document.querySelector('#navigation');
const topOfNav = nav.offsetTop;


function fixNav(){
  if(document.documentElement.scrollTop >= topOfNav){
    document.body.classList.add('fixed-nav');
  } else{
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
