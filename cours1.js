// document.querySelector("H4").style.background ="yellow";

// const baliseHtml = document.querySelector("h4");
// console.log(baliseHtml);
// baliseHtml.style.background = "yellow";

// click event

const questionconteneur = document.querySelector(".click_event");

console.log(questionconteneur);

questionconteneur.style.borderRadius ="150px";

questionconteneur.addEventListener("click", () => {
  // questionconteneur.style.background ="red";
  // questionconteneur.style.border = "3px solid teal";
   questionconteneur.classList.toggle("question_clicked");

});