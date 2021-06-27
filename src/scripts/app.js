import { comments } from "./comments";

comments();
// add button
let top = document.querySelector(".toTop");
window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st < 500) {
    top.style.display = "none";
  } else {
    top.style.display = "block";
  }
  console.log(st);
});

//add button logic
let topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
let btn = document.querySelector(".toTop");
btn.addEventListener("click", topFunction);

//set pancakkes Height

let pancakesImg  = document.querySelector(".pancaakes__img")
let pancaakesMenu = document.querySelector(".pancaakes__menu")
let setHeight = () =>
{
  pancakesImg.style.height = pancaakesMenu.clientHeight + "px"

}
