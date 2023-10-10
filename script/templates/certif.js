const certifTemplate = (certif) => {
  const article = document.createElement("article");
  article.setAttribute("class", "item");

  const img = document.createElement("img");
  img.setAttribute("src", `../../assets/img/${certif.img}`);

  const h2 = document.createElement("h2");
  h2.textContent = certif.name;

  article.appendChild(img);
  article.appendChild(h2);
  return article;
};

const moocTemplate = (mooc) => {
  const article = document.createElement("article");
  article.setAttribute("class", "item");

  const img = document.createElement("img");
  img.setAttribute("src", `../../assets/img/${mooc.img}`);

  const h2 = document.createElement("h2");
  h2.textContent = mooc.mooc;

  article.appendChild(img);
  article.appendChild(h2);
  return article;
};

export { certifTemplate, moocTemplate };
