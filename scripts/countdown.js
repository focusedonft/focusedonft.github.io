const countdown = () => {
  const countDate = new Date("July 22, 2029 18:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const years = day * 365;

  const textYears = Math.floor(gap / years);
  const textDay = Math.floor((gap % years) / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".year").innerText = textYears;
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

  if (gap < 0) {
    clearInterval(x);
    document.getElementsByTagName("aside")[0].innerText =
      "HOPE TO NOT SEE THIS";
  }
};
setInterval(countdown, 1000);
