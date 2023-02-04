insert_days();

function insert_days() {
  let lines = document.querySelectorAll(".day-of-week");

  let today_index = (6 + new Date().getDay()) % 7;
  lines[today_index].classList.add("bold");
 
  let days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  days.forEach((day, i) => {
    if (i == 5 || i == 6) lines[i].classList.add("italic");
    lines[i].textContent = days[i];
  });
}
