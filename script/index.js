import { getJsonData } from "./utils/getJsonData.js";
import { certifTemplate, moocTemplate } from "./templates/certif.js";

const certifDisplayer = async (certifList, moocList) => {
  /* ***** DOM's elmts ***** */
  const container = document.querySelector("#certif .items");

  certifList.forEach((certif) => {
    container.appendChild(certifTemplate(certif));
  });

  for (let index = 0; index < 6 - certifList.length; index++) {
    container.appendChild(moocTemplate(moocList[index]));
  }
};

const init = async () => {
  const { certifList, moocList } = await getJsonData();
  certifDisplayer(certifList, moocList);
};

/* ***** mobil menu controller ***** */
const mobilMenuController = () => {
  /* ***** DOM's elmts ***** */
  const hamburgerMenuIcon = document.querySelector("#hamburgerMenu");
  const linkList = document.querySelector("header nav ul.linkList");

  hamburgerMenuIcon.addEventListener("click", () => {
    if (hamburgerMenuIcon.dataset.deployed === "false") {
      hamburgerMenuIcon.dataset.deployed = true;
      linkList.classList.remove("unActive");
      linkList.classList.add("active");
    } else {
      hamburgerMenuIcon.dataset.deployed = false;
      linkList.classList.remove("active");
      linkList.classList.add("unActive");
    }
  });
};

mobilMenuController();
init();
