const rozwin = document.querySelectorAll(".rozwin");
const invisible = document.querySelectorAll(".invisible");

console.log(rozwin.length - 1);
console.log(invisible);

// rozwin[0].addEventListener("click", () => {
//   invisible[0].classList.toggle("visible");
// });

// rozwin[1].addEventListener("click", () => {
//   invisible[1].classList.toggle("visible");
// });

for (let i = 0; i < rozwin.length; i++) {
  rozwin[i].addEventListener("click", () => {
    invisible[i].classList.toggle("visible");
  });
}
