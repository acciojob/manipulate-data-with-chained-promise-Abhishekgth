//your JS code here. If required.
function manipulateData(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
    .then((array) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = array.filter((num) => num % 2 === 0);
          document.getElementById("output").innerText = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map((num) => num * 2);
          document.getElementById("output").innerText =
            doubledNumbers.join(",");
          resolve(doubledNumbers);
        }, 2000);
      });
    });
}

const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);