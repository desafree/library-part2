export const managerArray = manageBooksArray();

function manageBooksArray() {
  let array = [];

  function addToArray(bookObj) {
    array.push(bookObj);
  }

  function removeFromArray() {
    console.log(addToArray);
  }

  function getArray() {
    return array;
  }

  function refreshArray() {
    let newArray = array.filter((elem) => {
      return !elem.deleted;
    });

    console.log(newArray);

    array = newArray;
  }

  return { addToArray, removeFromArray, getArray, refreshArray };
}
