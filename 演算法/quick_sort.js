// const array = [8, 3, 6, 10, 1, 2];
// const array = [5, 4, 3, 2, 1];
const array = [4, 5, 3, 2, 1];
console.log('Original array:', array);
quickSort(array);
console.log('Sorted array:', array);

function quickSort(arr) {
  function swap(i, j, A = arr) {
    if (i === j) {
      return;
    }
    [A[i], A[j]] = [A[j], A[i]];
  }

  function partition(L, R, A = arr) {
    const randomPivot = L + Math.floor(Math.random() * (R - L + 1));

    swap(L, randomPivot);

    const pivotValue = A[L]; // 選擇陣列的第 1 個做為 pivot，也就是剛剛隨機選擇的 pivot
    let split = L + 1;

    for (let i = L + 1; i <= R; i++) {
      if (A[i] < pivotValue) {
        swap(i, split);
        split++;
      }
    }

    swap(L, split - 1);
    return split - 1;
  }

  function _quickSort(L, R) {
    if (L >= R) {
      return;
    }

    const middle = partition(L, R);
    _quickSort(L, middle - 1);
    _quickSort(middle + 1, R);
  }

  _quickSort(0, arr.length - 1);
}
