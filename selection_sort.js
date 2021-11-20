const numbers = [54, 53, 22, 90, -5, -33, 30];
console.log(numbers);

function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        // get the min index number
        min = j;
      }
    }
    // swap the ith index with min index
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

const sorted = selection_sort(numbers);
console.log(sorted);
