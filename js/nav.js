const mainNavLinks = document.querySelectorAll("#navigation ul li a");
const mainSections = document.querySelectorAll("section");
const Section1 = mainSections[0].offsetTop;
const Section2 = mainSections[1].offsetTop;
const Section3 = mainSections[2].offsetTop;
const Section4 = mainSections[3].offsetTop;
const Section1X = mainSections[0].offsetHeight;
const home = mainNavLinks[0];
const link1 = mainNavLinks[1];
const link2 = mainNavLinks[2];
const link3 = mainNavLinks[3];
const link4 = mainNavLinks[4];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

function linkActive(){

  const fromTop = document.documentElement.scrollTop;
    if (Section1 < fromTop && Section2 > fromTop) {
      link1.classList.add("current");
      link2.classList.remove("current");
      link3.classList.remove("current");
      link4.classList.remove("current");
      home.classList.remove("current");
    } else if (Section2 < fromTop && Section3 > fromTop){
      link2.classList.add("current");
      link1.classList.remove("current");
      link3.classList.remove("current");
      link4.classList.remove("current");
      home.classList.remove("current");
    } else if (Section3 < fromTop && Section4 > fromTop){
      link3.classList.add("current");
      link2.classList.remove("current");
      link1.classList.remove("current");
      link4.classList.remove("current");
      home.classList.remove("current");
    }else if (Section4 < fromTop){
      link4.classList.add("current");
      link3.classList.remove("current");
      link2.classList.remove("current");
      link1.classList.remove("current");
      home.classList.remove("current");
    } else {
      home.classList.add("current");
    }
};

window.addEventListener("scroll", linkActive);
