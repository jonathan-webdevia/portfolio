const lightboxFunc = (objects, index) => {
  /* ***** DOM's elmts ***** */
  const lightboxCtn = document.querySelector("#lightbox .lightboxContainer");
  const previousBtn = document.querySelector("#lightbox .previousBtn");
  const nextlyBtn = document.querySelector("#lightbox .nextBtn");
  const docTitle = document.querySelector("#lightbox h1");
  const keySkillsCtn = document.querySelector("#lightbox .skills");

  let currentIndex = index;

  const displayer = (i) => {
    objects[i].certificate
      ? (docTitle.innerText = objects[i].certificate)
      : (docTitle.innerText = objects[i].mooc);
    lightboxCtn.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", `./assets/img/${objects[i].img}`);
    const counter = document.createElement("div");
    counter.setAttribute("class", "counter");
    counter.textContent = `${i + 1} / ${objects.length}`;
    lightboxCtn.appendChild(counter);
    lightboxCtn.appendChild(img);

    keySkillsCtn.innerHTML = "";
    objects[i].keySkills.forEach((skill) => {
      const span = document.createElement("span");
      span.textContent = `#${skill.keySkill}`;
      keySkillsCtn.appendChild(span);
    });
  };

  const nextly = () => {
    currentIndex += 1;
    if (currentIndex === objects.length) {
      currentIndex = 0;
    }
    displayer(currentIndex);
  };

  const previously = () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = objects.length - 1;
    }
    displayer(currentIndex);
  };

  window.addEventListener("keydown", (event) => {
    // lightBox controller
    if (event.code === "ArrowRight") {
      nextly();
    } else if (event.code === "ArrowLeft") {
      previously();
    }
    // close lightBox
    if (event.code === "Escape") {
      const lightbox = document.querySelector("#lightbox");
      lightbox.style.display = "none";
    }
  });

  /* ***** event checking ***** */
  nextlyBtn.addEventListener("click", nextly);
  previousBtn.addEventListener("click", previously);

  displayer(currentIndex);
};

export { lightboxFunc };
