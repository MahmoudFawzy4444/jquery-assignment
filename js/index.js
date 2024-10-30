"use strict";

let sideBar = $("div.sidebar");
let sidebarWidth = sideBar.width();
let openBtn = $(".open-btn");
let closeBtn = $(".x-btn");
openBtn.animate({ left: 0 }, 0);
sideBar.css("width", "0");
$(".container .item p").slideUp(0);

$(".container .item h4").click((e) => {
  $(e.target).next().slideToggle(400);
});
openBtn.click(() => {
  sideBar.animate({ width: sidebarWidth }, 700);
  openBtn.animate({ left: sidebarWidth }, 700);
});
closeBtn.click(() => {
  sideBar.animate({ width: "0" }, 700);
  openBtn.animate({ left: 0 }, 700);
});

//-----------------------Sidebar Navigations---------------//
$(".sidebar a").click((e) => {
  let sectionOffsetTop = $(`section#${$(e.target).attr("sec")}`).offset().top;
  console.log(sectionOffsetTop);
  $("html").animate({ scrollTop: sectionOffsetTop }, 500);
});

//-------------------------Fate Count Down-----------------------\\
let countDownDate = new Date("Mar 1, 2025 15:37:25").getTime();

var getTime = setInterval(() => {
  let now = new Date();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("p.days").text(`-${days} D`);
  $("p.hours").text(`${hours} h`);
  $("p.minutes").text(`${minutes} m`);
  $("p.seconds").text(`${seconds} s`);
}, 1000);
let availableCharacterNum = 100;
let characterSpan = $("p.character span");
$("textarea.message-text").on("input", (e) => {
  characterSpan.text(`${100 - $(e.target).val().length}`);
  if ($(e.target).val().length >= 100) {
    characterSpan.text("your available character finished");
  }
});
