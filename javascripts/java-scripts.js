document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.getElementById("main");
  const navLinks = document.querySelectorAll(".nav-link");
  const loadingOverlay = document.querySelector(".loading-overlay");

  const showLoadingOverlay = () => {
    loadingOverlay.style.opacity = "1";
  };

  const hideLoadingOverlay = () => {
    loadingOverlay.style.opacity = "0";
  };

  const loadPage = (url) => {
    showLoadingOverlay();

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newMain = doc.getElementById("main").innerHTML;
        console.log(newMain);
      });
  };

  // document.querySelector("nav-link").onclick = function () {
  //   window.location.href = "redirect-url";
  // };
  // document.querySelector("nav-link1").onclick = function () {
  //   window.location.href = "redirect-url";
  // };

  navLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const url = e.currentTarget.getAttribute("href");
      showLoadingOverlay();
      loadPage(url);
    });
  });
});

function changingWords() {
  let phraseElement = document.querySelector(".changing");

  let words = ["СИЛА", "могущество", "знания"];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;

    phraseElement.textContent = ` ${words[currentIndex]}`;
  }, 5000);
}

changingWords();

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

document.addEventListener("DOMContentLoaded", () => {
  const main_line = document.querySelector(".main_line");
  const handleScroll = () => {
    const elementPosition = main_line.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (elementPosition < viewportHeight) {
      main_line.classList.add("visible");
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
ScrollReveal().reveal(".main_line", {
  delay: 1000,
  distance: "59px",
  origin: "top",
});

document.addEventListener("DOMContentLoaded", () => {
  const main_text = document.querySelector(".main_text");
  const handleScroll = () => {
    const elementPosition = main_text.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (elementPosition < viewportHeight) {
      main_text.classList.add("visible");
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

let resizeReset = function () {
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
};

const opts = {
  particleColor: "rgb(206, 0, 255)",
  lineColor: "rgb(206, 0, 255)",
  particleAmount: 30,
  defaultSpeed: 1,
  variantSpeed: 1,
  defaultRadius: 2,
  variantRadius: 2,
  linkRadius: 200,
};

window.addEventListener("resize", function () {
  deBouncer();
});

let deBouncer = function () {
  clearTimeout(tid);
  tid = setTimeout(function () {
    resizeReset();
  }, delay);
};

let checkDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function (point1, hubs) {
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / opts.linkRadius;
    if (opacity > 0) {
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      drawArea.beginPath();
      drawArea.moveTo(point1.x, point1.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
};

Particle = function (xPos, yPos) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
  this.directionAngle = Math.floor(Math.random() * 360);
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed,
  };
  this.update = function () {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };
  this.border = function () {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };
  this.draw = function () {
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  particles = [];
  resizeReset();
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }
  window.requestAnimationFrame(loop);
}

function loop() {
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
let delay = 200,
  tid,
  rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();

let pathEls = document.getElementById("images_main");
for (let i = 0; i < pathEls.length; i++) {
  let pathEl = pathEls[i];
  let offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}

var pathEls1 = document.querySelectorAll("path");
for (let i = 0; i < pathEls.length; i++) {
  let pathEl = pathEls1[i];
  let offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}

let animation_arrow = anime({
  targets: ".arrow",
  translateX: 70,
  scale: 1.4,
  duration: 1500,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});
