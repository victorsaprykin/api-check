"use strict";

document.querySelector(".bored__btn").addEventListener("click", function () {
  const newColor = document.querySelector(".bored__wrapper");

  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status == "success") {
        return;
      }

      const letActive = data.activity;

      document.querySelector(".bored__text").innerHTML = `${letActive}`;
      document.querySelector(
        ".bored__title"
      ).innerHTML = `Ура, теперь не скучно 🔥`;
      newColor.style.background =
        "linear-gradient(180deg, rgba(0, 176, 28, 0.20) 24.48%, rgba(255, 255, 255, 0.00) 100%)";

      console.log(data);
    });
});
