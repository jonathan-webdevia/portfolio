import { getJsonData } from "./utils/getJsonData.js";
import { Templates } from "./templates/Templates.js";
import { lightboxFunc } from "./functions/lightbox.js";

/* ***** utils var ***** */
let certificateList = [];

const certifDisplayer = async (certificate) => {
  /* ***** DOM's elmts ***** */
  const container = document.querySelector("#certif .items");

  const templates = new Templates();

  for (let index = 0; index < 6; index++) {
    container.appendChild(templates.certifTemplate(certificate[index]));
    certificateList.push(certificate[index]);
  }
};

const lightBoxController = async (listElmt) => {
  /* ***** DOM's elmts ***** */
  const lightbox = document.querySelector("#lightbox");

  listElmt.forEach((article) => {
    article.addEventListener("click", () => {
      const index = certificateList.findIndex(
        (data) => data.id === article.dataset.id
      );
      lightboxFunc(certificateList, index);
      lightbox.style.display = "flex";
    });
  });
};

const init = async () => {
  const certificate = await getJsonData();
  certifDisplayer(certificate);

  const certifList = document.querySelectorAll("article.certifList");
  lightBoxController(certifList);
};

/* ***** mobil menu controller ***** */
const mobilMenuController = () => {
  /* ***** DOM's elmts ***** */
  const hamburgerMenuIcon = document.querySelector("#hamburgerMenu");
  const linkList = document.querySelector("header nav ul.linkList");

  hamburgerMenuIcon.addEventListener("click", () => {
    if (hamburgerMenuIcon.dataset.deployed === "false") {
      hamburgerMenuIcon.dataset.deployed = true;
      linkList.classList.add("active");
    } else {
      hamburgerMenuIcon.dataset.deployed = false;
      linkList.classList.remove("active");
    }
  });
};

mobilMenuController();
init();
