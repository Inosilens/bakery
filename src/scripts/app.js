import { comments } from "./comments";

comments();
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
let topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

let btn = document.querySelector(".toTop");

btn.addEventListener("click", topFunction);


let pancakesImg  = document.querySelector(".pancaaker__img")
let pancaakesMenu = document.querySelector(".pancaakes__menu")
let setHeight = () =>
{
  pancakesImg.style.height = pancaakesMenu.clientHeight + "px"

}
setHeight()
