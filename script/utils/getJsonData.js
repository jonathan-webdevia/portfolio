export const getJsonData = async () => {
  let certificate = null;

  return fetch("./data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      certificate = data.certif;
      return certificate;
    });
};
