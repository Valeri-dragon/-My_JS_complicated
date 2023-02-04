const body = document.querySelector('body');

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let weekend= week.findIndex(function (item) {
  if (item === "Суббота" || item === "Воскресенье")
   return item;
});

const arr = week.splice(0, weekend).join("<br>");
const arr2 = week.join("<br>");

body.insertAdjacentHTML(
  "beforeend",

  `<p>${arr}<br>
  <i>${arr2}</i>
  </p>

  `
);
  