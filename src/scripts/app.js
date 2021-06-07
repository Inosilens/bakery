import { comments } from "./comments";

comments();
let top = document.querySelector(".toTop");


window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st < 500) {
    top.classList.add("hiden");
  } else {
    top.classList.remove("hiden");
  }
  console.log(st);
});
