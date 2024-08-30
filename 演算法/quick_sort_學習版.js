// const array = [8, 3, 6, 10, 1, 2];
const array = [5, 4, 3, 2, 1];
// const array = [4, 5, 3, 2, 1];
console.log('Original array:', array);
quickSort(array);
console.log('Sorted array:', array);

function quickSort(arr) {
  function swap(i, j, A = arr) {
    console.log(`swap ${i} ${j}`);
    if (i === j) {
      return;
    }
    [A[i], A[j]] = [A[j], A[i]];
  }

  // 將陣列分為小於 pivot value，與大於等於 pivot value 的兩部分；
  // 並回傳 pivot 的 index
  // 透過傳入 L, R 替代傳入整個陣列，L 為陣列的起始 index，R 為陣列結束 index
  function partition(LIndex, RIndex, A = arr) {
    console.log(
      `%c LIndex: ${LIndex}, RIndex: ${RIndex}`,
      'background: #222; color: #fff'
    );

    // 隨機選擇 pivot
    // const randomPivotIndex =
    //   LIndex + Math.floor(Math.random() * (RIndex - LIndex + 1));

    // // 將隨機選擇的 pivot 放到開頭
    // swap(LIndex, randomPivotIndex);

    const pivotValue = A[LIndex]; // 選擇陣列的第 1 個做為 pivot，也就是剛剛隨機選擇的 pivot
    console.warn('pivotValue', pivotValue);
    console.log('array', JSON.stringify(array));
    let splitIndex = LIndex + 1;
    console.log('splitIndex value', arr[splitIndex]);
    console.log('--- for loop 前 ---');

    // 因為選擇陣列的第 1 個做為 pivot，所以從第 2 個開始遍歷到結尾
    // 這個 for loop 跑完之後，所有大於等於 pivotValue 的元素都會被放到 splitIndex 右邊 (有沒有含 splitIndex 要再想一下)
    for (let i = LIndex + 1; i <= RIndex; i++) {
      console.log(`i: ${i}, index value: ${A[i]}`);

      if (A[i] < pivotValue) {
        console.log(
          '%c --- --- A[i] < pivotValue',
          'background: #222; color: #bada55'
        );
        if (i !== splitIndex) {
          swap(i, splitIndex);
        } else {
          console.log(
            '%c --- --- index 相等，不需要換',
            'background: #222; color: #bada55'
          );
        }

        console.log('array', JSON.stringify(array));
        splitIndex++;
        console.log('splitIndex after swap', splitIndex);
      } else {
        console.log('%c --- --- 不換', 'background: #222; color: #bada55');
      }
    }

    // 將樞紐元素放到正確的位置
    swap(LIndex, splitIndex - 1);
    console.warn('arr 2', JSON.stringify(arr));
    return splitIndex - 1;
  }

  // 快速排序的主函數
  // 每一次 partition 完，pivot 都會被放到正確的位置上，並且被回傳，做為下一次重新分割的參考
  function _quickSort(L, R) {
    // 當 L >= R 時，表示該陣列已被排序完成，因為該陣列要麼是空的（L > R），要麼只有一個元素（L === R）；
    // 而只有 0 或 1 個元素的陣列，必然是已經被排序好的陣列
    if (L >= R) {
      return;
    }

    const middle = partition(L, R);
    _quickSort(L, middle - 1);
    _quickSort(middle + 1, R);
  }

  // 初始化排序過程
  _quickSort(0, arr.length - 1);
}

/* 
這個 quick sort 的實做，在傳入的陣列非常大的時候，是否會造成 stack overflow？
*/
