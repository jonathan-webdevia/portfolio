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

init();
