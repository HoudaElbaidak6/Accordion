let divs = document.getElementsByClassName("accordian-header");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    let bodys = document.getElementsByClassName("accordian-body");
    bodys[i].classList.toggle("active");
  });
}
