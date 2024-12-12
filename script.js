const NUM_PROJECTS = 6;

const headerArrowDown = () => {
  bg = document.getElementById("bg");
  // bg.classList.replace("split-bg", "black-bg");
  document.getElementById("header").style.display = "none";

  bg.style.width = "100%";
  bg.style.height = "100%";

  //! NOTE: animation is very slow on mobile for some reason
  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 200) {
      document.getElementById("aboutMe").style.display = "flex";
      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) + 1 + "%";
    bg.style.height = parseInt(bg.style.height) + 1 + "%";
  }, 5);
};

const aboutArrowUp = () => {
  bg = document.getElementById("bg");
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

const aboutArrowDown = () => {
  bg = document.getElementById("bg");
  document.getElementById("aboutMe").style.display = "none";

  bg.style.width = "200%";
  bg.style.height = "200%";

  var modalAnimate = setInterval(() => {
    document
      .querySelector(".desktop")
      .querySelector(".projects")
      .classList.remove("modalShow");
    
    clearInterval(modalAnimate);
  }, 2000);

  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 0) {
      document.getElementById("projects").style.display = "flex";

      document
        .querySelector(".desktop")
        .querySelector(".projects")
        .classList.add("modalShow");

      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) - 1 + "%";
    bg.style.height = parseInt(bg.style.height) - 1 + "%";
  }, 5);
};

const projectsArrowUp = () => {
  bg = document.getElementById("bg");
  document.getElementById("projects").style.display = "none";
  document
    .querySelector(".desktop")
    .querySelector(".projects")
    .classList.add("modalShow");
  bg.style.width = "0%";
  bg.style.height = "0%";

  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 200) {
      document.getElementById("aboutMe").style.display = "flex";
      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) + 1 + "%";
    bg.style.height = parseInt(bg.style.height) + 1 + "%";
  }, 5);
};

window.addEventListener("load", () => {
  setTimeout(() => {
    // wait 2.5 seconds before the down button can be pressed to move down
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowDown") {
        if (document.getElementById("header").style.display != "none") {
          headerArrowDown();
        } else if (document.getElementById("aboutMe").style.display != "none") {
          aboutArrowDown();
        }
      } else if (event.key == "ArrowUp") {
        if (document.getElementById("aboutMe").style.display == "flex") {
          aboutArrowUp();
        } else if (
          document.getElementById("projects").style.display == "flex"
        ) {
          projectsArrowUp();
        }
      }
    });
  }, 2500);
});

// MOBILE PROJECTS
let mobileProjects = document
  .querySelector(".mobile .projects")
  .querySelectorAll(".project-container");

const handleMobileProjsClick = (id) => {
  for (let i = 1; i <= NUM_PROJECTS; i++) {
    let pj = document.getElementById(`project-m-${i}`).parentElement;

    if (i < id) {
      pj.removeAttribute("id");
      pj.style.transform = `translateX(-${(id - i) * 100 + 10}%) scale(.9)`;
      pj.style.opacity = ".7";
    } else if (i == id) {
      pj.setAttribute("id", "m-current");
      pj.style.transform = `translateX(0%) scale(1)`;
      pj.style.opacity = "1";

      if (id == 1) {
        document.getElementById("leftArrow").classList.add("disabled");
      } else if (id == 6) {
        document.getElementById("rightArrow").classList.add("disabled");
      } else {
        document.getElementById("leftArrow").classList.remove("disabled");
        document.getElementById("rightArrow").classList.remove("disabled");
      }
    } else if (i > id) {
      pj.removeAttribute("id");
      pj.style.transform = `translateX(${(i - id) * 100 + 10}%) scale(.9)`;
      pj.style.opacity = ".7";
    }
  }
};

mobileProjects.forEach((project) => {
  let projectID = Number(project.getAttribute("data-el"));

  if (projectID === 1) {
    project.setAttribute("id", "m-current");
    project.style.transform = "translateX(0%) scale(1)";
    project.style.opacity = "1";
  } else {
    let translateValue = (projectID - 1) * 100 + 10;

    project.style.transform = `translateX(${translateValue}%) scale(0.9)`;
    project.style.opacity = "0.7";
  }

  project.addEventListener("click", () => handleMobileProjsClick(projectID));
});

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    if (document.getElementById("projects").style.display != "none") {
      // headerArrowDown();
      let id =
        Number(document.getElementById("m-current").getAttribute("data-el")) -
        1;

      if (id !== 0) handleMobileProjsClick(id);
    }
  } else if (event.key == "ArrowRight") {
    if (document.getElementById("projects").style.display != "none") {
      // aboutArrowUp
      let id =
        Number(document.getElementById("m-current").getAttribute("data-el")) +
        1;

      if (id !== NUM_PROJECTS + 1) handleMobileProjsClick(id);
    }
  }
});

document.getElementById("leftArrow").addEventListener("click", (e) => {
  let id =
    Number(document.getElementById("m-current").getAttribute("data-el")) - 1;

  if (id !== 0) {
    handleMobileProjsClick(id);
  }
  // else e.target.classList.add("disabled");
});

document.getElementById("rightArrow").addEventListener("click", (e) => {
  let id =
    Number(document.getElementById("m-current").getAttribute("data-el")) + 1;

  if (id !== NUM_PROJECTS + 1) {
    handleMobileProjsClick(id);
  }
  // else e.target.classList.add("disabled");
});
