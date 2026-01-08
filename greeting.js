console.log("greeting.js berjalan");

document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");

  if (!greeting) {
    console.error("Elemen greeting tidak ditemukan");
    return;
  }

  const hour = new Date().getHours();
  let text;

  if (hour >= 5 && hour < 12) {
    text = "Selamat Pagi";
  } else if (hour >= 12 && hour < 15) {
    text = "Selamat Siang";
  } else if (hour >= 15 && hour < 18) {
    text = "Selamat Sore";
  } else {
    text = "Selamat Malam";
  }

  greeting.textContent = text;
});