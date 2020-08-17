const countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
const d = document.querySelector('#days');
const h = document.querySelector('#hours');
const m = document.querySelector('#minutes');
const s = document.querySelector('#seconds');

const interval = setInterval(() => {
  //get the current time
  const now = new Date().getTime();

  //find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //output the result in the DOM
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;

}, 1000);