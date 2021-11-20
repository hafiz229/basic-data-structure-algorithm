const numbers = [45, 34, 4, 23, 45, 3, 54, 63, 97, 34];

// linear search
function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}

const index = linear_search(numbers, 34);
console.log("index number: ", index);
