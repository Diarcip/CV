function MenuClick() {
  let menuBox = document.getElementById("nav-box");
  let boxHasClass = menuBox.classList.contains("nav-box-visible");
  let menuButton = document.getElementById("burger-icon");

  if (!boxHasClass) {
    menuBox.classList.add("nav-box-visible");
    menuButton.classList.add("fa-times");
    menuButton.classList.remove("fa-bars");
  } else {
    menuBox.classList.remove("nav-box-visible");
    menuButton.classList.remove("fa-times");
    menuButton.classList.add("fa-bars");
  }
}
