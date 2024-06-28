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

let animation_earth_classr = anime({
  targets: ".earth_class",
  translateX: -30,
  rotate: [3, -2],
  duration: 1500,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_stone = anime({
  targets: ".about_stone",
  translateX: 30,
  rotate: [5, -1],
  duration: 1500,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_recreation_area_foto = anime({
  targets: ".recreation_area_foto",
  scale: [1.2],
  duration: 4500,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_water_slide = anime({
  targets: ".water_slide",
  scale: [0.8],
  rotate: [8, -8],
  duration: 1800,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_water_class = anime({
  targets: ".about_water_class",
  translateX: -40,
  duration: 3800,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_cone = anime({
  targets: ".about_cone",
  translateY: -40,
  rotate: 8,
  duration: 3800,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_chairs_library = anime({
  targets: ".chairs_library",
  scale: 1.5,
  duration: 3000,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_chairs_angle = anime({
  targets: ".about_chairs_angle",
  scale: 1.2,
  rotate: [1, -3],
  duration: 3000,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_tornado_foto = anime({
  targets: ".about_tornado_foto",
  rotate: [4, -1],
  duration: 2000,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_class_storm = anime({
  targets: ".about_class_storm",
  translateY: -40,
  rotate: [2, -4],
  duration: 1700,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});

let animation_about_storm = anime({
  targets: ".about_storm",
  translateY: [-30, 10],
  rotate: [3, -2],
  duration: 1700,
  easing: "easeInOutSine",
  direction: "anime.stagger(100, {start: 1000})",
  loop: true,
});
