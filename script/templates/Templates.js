export class Templates {
  certifTemplate(item) {
    const article = document.createElement("article");
    article.setAttribute("class", "item");
    article.classList.add("class", "certifList");
    article.dataset.id = item.id;
    article.setAttribute("role", "button");

    const img = document.createElement("img");
    img.setAttribute("src", `../../assets/img/${item.img}`);

    const h2 = document.createElement("h2");

    if (item.certificate) {
      h2.textContent = item.certificate;
    } else if (item.mooc) {
      h2.textContent = item.mooc;
    }

    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }
}
