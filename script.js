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

  var animation = setInterval(function () {
    if (parseInt(bg.style.width) == 0) {
      document.getElementById("projects").style.display = "flex";
      clearInterval(animation);
    }
    bg.style.width = parseInt(bg.style.width) - 1 + "%";
    bg.style.height = parseInt(bg.style.height) - 1 + "%";
  }, 5);
};

const projectsArrowUp = () => {
  bg = document.getElementById("bg");
  document.getElementById("projects").style.display = "none";

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

let projects = document.querySelectorAll(".project-container");

const handleProjectClick = (id) => {
  document.getElementById("current").removeAttribute("id");
  console.log(id);
  // console.log(currProject);

  for (let i = 1; i < 4; i++) {
    let pj = document.getElementById(`project-${i}`).parentElement;
    if (i < id) {
      pj.style.transform = `translateX(-${(id - i) * 100 + 10}%) scale(.9)`;
      pj.style.opacity = ".7";
    } else if (i == id) {
      pj.setAttribute("id", "current");
      pj.style.transform = `translateX(0%) scale(1)`;
      pj.style.opacity = "1";
    } else if (i > id) {
      pj.style.transform = `translateX(${(i - id) * 100 + 10}%) scale(.9)`;
      pj.style.opacity = ".7";
    }
  }
};

projects.forEach((project) => {
  let projectID = Number(project.getAttribute("data-el"));
  // console.log(projectID);
  switch (projectID) {
    case 1:
      project.setAttribute("id", "current");
      project.style.transform = "translateX(0%) scale(1)";
      project.style.opacity = "1";
      break;
    case 2:
      project.style.transform = "translateX(110%) scale(0.9)";
      project.style.opacity = ".7";
      break;
    case 3:
      project.style.transform = "translateX(210%) scale(.9)";
      project.style.opacity = ".7";
      break;
  }

  project.addEventListener("click", () => handleProjectClick(projectID));
});


// TODO left and right project btns