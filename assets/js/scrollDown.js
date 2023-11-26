//: SHOW SCROLL Down  */
function scrollDown() {
  const scrollDown = document.getElementById("scroll-down");
  // When the scroll is higher than 50 and less 800 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 50 && this.scrollY <= 800)
    scrollDown.classList.add("show-scrollDown");
  else scrollDown.classList.remove("show-scrollDown");
}
window.addEventListener("scroll", scrollDown);
