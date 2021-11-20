const numbers = [14, 34, 56, 67, 89, 99, 239, 450];

function binary_search(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == target) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else if (target > array[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}

const index = binary_search(numbers, 450);
console.log(index);
