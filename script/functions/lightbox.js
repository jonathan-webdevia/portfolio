const lightboxFunc = (objects, index) => {
  /* ***** DOM's elmts ***** */
  const lightboxCtn = document.querySelector("#lightbox .lightboxContainer");
  const previousBtn = document.querySelector("#lightbox .previousBtn");
  const nextlyBtn = document.querySelector("#lightbox .nextBtn");

  let currentIndex = index;

  const displayer = (i) => {
    lightboxCtn.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", `./assets/img/${objects[i].img}`);
    img.setAttribute("width", "50%");
    lightboxCtn.appendChild(img);
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

  /* ***** event checking ***** */
  nextlyBtn.addEventListener("click", nextly);
  previousBtn.addEventListener("click", previously);

  displayer(currentIndex);
};

export { lightboxFunc };
