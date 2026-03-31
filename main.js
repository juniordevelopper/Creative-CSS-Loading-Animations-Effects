const loader = document.querySelector(".loader");

for (let i=1; i<=20; i++) {
  let span = document.createElement('span');
  span.style.setProperty('--i', i);
  loader.appendChild(span);
}