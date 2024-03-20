var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the left position of the side navigation to 0 */
function openNav() {
  sidenav.classList.add("active");
  sidenav.style.right = 0;
}

function closeNav() {
  sidenav.classList.remove("active");
  sidenav.style.right = "-250px"; /* Réglez la position initiale sur la droite */
}