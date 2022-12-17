"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const hamburgerItems = document.getElementById("hamburgerItems");

  hamburger.addEventListener("click", function onClick() {
    hamburgerItems.classList.toggle("mobile-href");
  });
});
