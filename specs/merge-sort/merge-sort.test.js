/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (a1, a2) => {
  const c = [];
  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] > a2[0]) {
      c.push(a2.shift());
    } else {
      c.push(a1.shift());
    }
  }

  return c.concat(a1, a2);
};

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  }

  const index = Math.floor(nums.length / 2);
  const array1 = mergeSort(nums.slice(0, index));
  const array2 = mergeSort(nums.slice(index));

  return merge(array1, array2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
