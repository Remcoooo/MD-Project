const button = document.getElementById("button");
const navigation = document.getElementById("primary-navigation");

button.onclick = () => {
  button.classList.toggle("toggled");
  navigation.classList.toggle("toggled");
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal = window.matchMedia("(max-width: 48em)")