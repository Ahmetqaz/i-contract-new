import { fetchData } from "/js/fetchData.js";

class ContractUI {
  constructor(data) {
    let unusedKeys = [];
    Object.keys(data).forEach((key) => {
      const input = document.getElementById(key);
      if (!input) {
        unusedKeys.push(key);
        return;
      }

      input.value = data[key];
    });
    console.log("unusedKeys \n", unusedKeys);
  }
}

const fetchContractData = () =>
  new Promise((resolve, reject) => {
    fetchData({
      url: "./data/carData.json",
      onSuccess: (data) => resolve(data),
      onError: (error) => reject(error),
    });
  });

fetchContractData().then((data) => {
  const contractUI = new ContractUI(data);
});
