const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Full Stack Developer";
  }, 4000);
};

textLoad();
setInterval(textLoad, 8000);

//navbar buttons & menubar buttons

var home = document.getElementById("home");
var secondary = document.getElementById("secondary");
var intermediate = document.getElementById("intermediate");
var jee = document.getElementById("jee");
var neet = document.getElementById("neet");
var gate = document.getElementById("gate");

document.querySelectorAll("#home-btn, #menu-home-btn").forEach((ele) => {
  ele.addEventListener("click", function (e) {
    home.style.cssText = "display: flex";
    secondary.style.cssText = "display: none";
    intermediate.style.cssText = "display: none";
    jee.style.cssText = "display: none";
    neet.style.cssText = "display: none";
    gate.style.cssText = "display: none";
    menu_click_navbar.style.cssText = "display: none";
  });
});
document
  .querySelectorAll("#secondary-btn, #menu-secondary-btn")
  .forEach((ele) => {
    ele.addEventListener("click", function (e) {
      home.style.cssText = "display: none";
      secondary.style.cssText = "display: block";
      intermediate.style.cssText = "display: none";
      jee.style.cssText = "display: none";
      neet.style.cssText = "display: none";
      gate.style.cssText = "display: none";
      menu_click_navbar.style.cssText = "display: none";
    });
  });
document
  .querySelectorAll("#intermediate-btn, #menu-intermediate-btn")
  .forEach((ele) => {
    ele.addEventListener("click", function (e) {
      home.style.cssText = "display: none";
      secondary.style.cssText = "display: none";
      intermediate.style.cssText = "display: block";
      jee.style.cssText = "display: none";
      neet.style.cssText = "display: none";
      gate.style.cssText = "display: none";
      menu_click_navbar.style.cssText = "display: none";
    });
  });
document.querySelectorAll("#jee-btn, #menu-jee-btn").forEach((ele) => {
  ele.addEventListener("click", function (e) {
    home.style.cssText = "display: none";
    secondary.style.cssText = "display: none";
    intermediate.style.cssText = "display: none";
    jee.style.cssText = "display: block";
    neet.style.cssText = "display: none";
    gate.style.cssText = "display: none";
    menu_click_navbar.style.cssText = "display: none";
  });
});
document.querySelectorAll("#neet-btn, #menu-neet-btn").forEach((ele) => {
  ele.addEventListener("click", function (e) {
    home.style.cssText = "display: none";
    secondary.style.cssText = "display: none";
    intermediate.style.cssText = "display: none";
    jee.style.cssText = "display: none";
    neet.style.cssText = "display: block";
    gate.style.cssText = "display: none";
    menu_click_navbar.style.cssText = "display: none";
  });
});
document.querySelectorAll("#gate-btn, #menu-gate-btn").forEach((ele) => {
  ele.addEventListener("click", function (e) {
    home.style.cssText = "display: none";
    secondary.style.cssText = "display: none";
    intermediate.style.cssText = "display: none";
    jee.style.cssText = "display: none";
    neet.style.cssText = "display: none";
    gate.style.cssText = "display: block";
    menu_click_navbar.style.cssText = "display: none";
  });
});

// menubar
var i = 0;
var menubar = document.getElementById("menubar");
var menu_click_navbar = document.getElementById("menu-click-navbar");

menubar.addEventListener("click", function () {
  menu_click_navbar.style.cssText = "display: flex";
});

// color handling
var setting = document.getElementById("setting");
var orange_btn = document.getElementById("orange-btn");
var blue_btn = document.getElementById("blue-btn");
var pink_btn = document.getElementById("pink-btn");
var maroon_btn = document.getElementById("maroon-btn");

var orange_icon = document.getElementById("orange-icon");
var blue_icon = document.getElementById("blue-icon");
var pink_icon = document.getElementById("pink-icon");
var maroon_icon = document.getElementById("maroon-icon");

setting.addEventListener("click", function () {
  orange_btn.style.cssText = "right: 68px";
  blue_btn.style.cssText = "right: 108px";
  pink_btn.style.cssText = "right: 148px";
  maroon_btn.style.cssText = "right: 188px";
});

const state = "--lava";
var r = document.querySelector(":root");

orange_btn.addEventListener("click", function () {
  r.style.setProperty("--color", "#f5400a");
  orange_btn.style.cssText = "right: 28px";
  blue_btn.style.cssText = "right: 28px";
  pink_btn.style.cssText = "right: 28px";
  maroon_btn.style.cssText = "right: 28px";
});
blue_btn.addEventListener("click", function () {
  r.style.setProperty("--color", "#0203e2");
  orange_btn.style.cssText = "right: 28px";
  blue_btn.style.cssText = "right: 28px";
  pink_btn.style.cssText = "right: 28px";
  maroon_btn.style.cssText = "right: 28px";
});
pink_btn.addEventListener("click", function () {
  r.style.setProperty("--color", "#d90166");
  orange_btn.style.cssText = "right: 28px";
  blue_btn.style.cssText = "right: 28px";
  pink_btn.style.cssText = "right: 28px";
  maroon_btn.style.cssText = "right: 28px";
});
maroon_btn.addEventListener("click", function () {
  r.style.setProperty("--color", "#cf1020");
  orange_btn.style.cssText = "right: 28px";
  blue_btn.style.cssText = "right: 28px";
  pink_btn.style.cssText = "right: 28px";
  maroon_btn.style.cssText = "right: 28px";
});
