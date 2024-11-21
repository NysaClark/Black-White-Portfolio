const handleArrowDown = () => {
  bg = document.getElementById("bg");
  // bg.classList.replace("split-bg", "black-bg");
  document.getElementById("header").style.display = "none";

  bg.style.width = "100%";
  bg.style.height = "100%";

  //! NOTE: animation is very slow on mobile for some reason
  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 200) {
      document.getElementById("aboutMe").style.display = "block";
      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) + 1 + "%";
    bg.style.height = parseInt(bg.style.height) + 1 + "%";
  }, 5);
};

const handleArrowUp = () => {
  // console.log("HERE");
  bg = document.getElementById("bg");
  // bg.classList.replace("black-bg", "split-bg");
  document.getElementById("aboutMe").style.display = "none";

  bg.style.width = "200%";
  bg.style.height = "200%";

   //! NOTE: animation is very slow on mobile for some reason
  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 100) {
      document.getElementById("header").style.display = "flex";
      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) - 1 + "%";
    bg.style.height = parseInt(bg.style.height) - 1 + "%";
  }, 5);
};

window.addEventListener("load", () => {
  setTimeout(() => {
    // wait 2.5 seconds before the down button can be pressed to move down
    window.addEventListener("keydown", (event) => {
      if (
        event.key == "ArrowDown" &&
        document.getElementById("header").style.display != "none"
      ) {
        handleArrowDown();
      } else if (
        event.key == "ArrowUp" &&
        document.getElementById("aboutMe").style.display == "block"
      ) {
        handleArrowUp();
      }
    });
  }, 2500);

  document
    .getElementById("headerArrowDown")
    .addEventListener("click", handleArrowDown);
});