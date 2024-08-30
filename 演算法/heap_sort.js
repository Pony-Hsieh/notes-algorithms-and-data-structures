/** Heap Sort 的主要步驟
 * 1. 建立最大堆積： 將陣列轉換為 max heap，使得最大值位於根節點。
 * 2. 將根節點（即最大值）與陣列的最後一個元素交換。
 * 3. 將 heap 的範圍縮小一個單位，然後對新的 heap 進行堆積整理（heapify），再次使其成為最大堆積。
 *
 * 以上適用遞增排序；遞減排序的話，只需要將 max heap 改為 min heap，最大值改為最小值
 */

/**
 * 遞增排序(小 => 大)用 max-heap
 * 遞減排序(大 => 小)用 min-heap
 */

const arr = [12, 11, 5, 6, 7, 135, 6];
const res = heapSort(arr);
console.log('res', res);

const arr1 = [3, 5, 9, 1, 4, 8];
const res1 = heapSort(arr1, false);
console.log('res1', res1);

/**
 * 使用 heap sort 對陣列進行排序。
 *
 * heap sort 是一種基於比較的排序算法，利用 heap 這種資料結構來實現排序。這個實現可以用於升序或降序排序，取決於 `isAscending` 參數。
 *
 * @param {number[]} arr - 要排序的陣列。
 * @param {boolean} [isAscending=true] - 指定排序順序。如果為 `true`，則進行升序排序；如果為 `false`，則進行降序排序。
 * @returns {number[]} 排序後的陣列。
 */
function heapSort(arr, isAscending = true) {
  const len = arr.length;
  const isMaxHeap = isAscending;

  /**
   * 對指定範圍內的陣列進行堆化操作。
   *
   * 堆化操作會將陣列範圍內的元素重新排列，使其滿足堆的性質（最大堆或最小堆）。
   *
   * @param {number[]} arr - 要堆化的陣列。
   * @param {number} n - 陣列範圍的長度。
   * @param {number} i - 需要堆化的節點的索引。
   * @param {boolean} isMaxHeap - 指定是否使用最大堆。為 `true` 則使用最大堆，為 `false` 則使用最小堆。
   * @returns {void}
   */
  function heapify(arr, n, i, isMaxHeap) {
    let extremeIndex = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (
      l < n &&
      (isMaxHeap ? arr[l] > arr[extremeIndex] : arr[l] < arr[extremeIndex])
    ) {
      extremeIndex = l;
    }

    if (
      r < n &&
      (isMaxHeap ? arr[r] > arr[extremeIndex] : arr[r] < arr[extremeIndex])
    ) {
      extremeIndex = r;
    }

    if (extremeIndex !== i) {
      [arr[i], arr[extremeIndex]] = [arr[extremeIndex], arr[i]];
      heapify(arr, n, extremeIndex, isMaxHeap);
    }
  }

  /**
   * 建立初始堆結構。
   *
   * 對陣列進行堆化，以建立最大堆或最小堆結構。
   *
   * @returns {void}
   */
  function buildHeap() {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i, isMaxHeap);
    }
  }

  /**
   * 執行堆排序操作。
   *
   * 使用建立的堆結構對陣列進行排序。
   *
   * @returns {void}
   */
  function doSort() {
    buildHeap();
    for (let i = len - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0, isMaxHeap);
    }
  }

  doSort();
  return arr;
}
