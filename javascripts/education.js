function prss_menu() {
  elem = document.getElementById("list");
  state = elem.style.display;
  if (state == "") elem.style.display = "none";
  else elem.style.display = "";
  spinner.style.animationName = "spinner";
  setTimeout(function () {
    spinner.style.animationName = "";
  }, 4000);
}

function changingWords1() {
  let phraseElement = document.querySelector(".shopper_bag_text");

  let words = ["ФУТБОЛКА", "СУМКА ШОППЕР"];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;

    phraseElement.textContent = ` ${words[currentIndex]}`;
  }, 4900);
}

changingWords1();

function changingWords() {
  let phraseElement = document.querySelector(".Books_first_text");

  let words = [
    "подарочные геливые шары",
    "книги первого издания от самой школы",
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;

    phraseElement.textContent = ` ${words[currentIndex]}`;
  }, 4900);
}

changingWords();
