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

let animation_umbrella = anime({
  targets: ".icon_umbrella",
  rotate: [80, -60],
  scale: [1.5, 0.8],
  duration: 3000,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_tornado = anime({
  targets: ".icon_tornado",
  translateX: 70,
  translateY: 22,
  scale: [0.6],
  duration: 1200,
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let animation_drop = anime({
  targets: ".icon_drop",
  translateX: 40,
  translateY: 90,
  scale: [0.7],
  duration: 1500,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_drops3 = anime({
  targets: ".icon_drops3",
  translateX: [20, -20],
  translateY: 20,
  scale: [0.7],
  duration: 1200,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_cloud_rain = anime({
  targets: ".icon_cloud_rain",
  translateX: [20, -30],
  duration: 1200,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_sunny = anime({
  targets: ".icon_sunny",
  rotate: 180,
  duration: 1800,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_big_storm = anime({
  targets: ".foto_big_storm",
  rotate: [10, -10],
  translateX: 100,
  duration: 1200,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_cloud_wind = anime({
  targets: ".icon_cloud_wind",
  rotate: [5, -1],
  translateX: [200, -20],
  duration: 1200,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

let animation_cloud = anime({
  targets: ".icon_cloud",
  rotate: [3, -1],
  translateX: [50, -100],
  scale: [1.5],
  duration: 1500,
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let animation_snow = anime({
  targets: ".icon_snow",
  translateX: [20, -400],
  scale: [1.3, 0.8],
  duration: 1500,
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let animation_light = anime({
  targets: ".icon_light",
  translateX: 90,
  rotate: [5, -1],
  duration: 1500,
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let animation_weather = anime({
  targets: ".icon_weather",
  translateX: 170,
  rotate: [6, -7],
  scale: 1.4,
  duration: 1500,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});
