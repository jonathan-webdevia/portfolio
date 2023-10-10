export const getJsonData = async () => {
  let certifList = null;
  let moocList = null;

  return fetch("./data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      certifList = data.titrePro;
      moocList = data.MOOC;
      return { certifList, moocList };
    });
};
