const arr = [12, 11, 5, 6, 7, 135, 6];
const res = mergeSort(arr);
console.log('res', res);

const arr1 = [3, 5, 9, 1, 4, 8];
const res1 = mergeSort(arr1);
console.log('res1', res1);

function merge(lArr, rArr) {
  let res = [];
  let l = 0;
  let r = 0;

  // 比較左右兩陣列的元素，將較小的元素加入結果陣列
  // 會進到 while loop，代表左右兩陣列都還有元素
  while (l < lArr.length && r < rArr.length) {
    if (lArr[l] > rArr[r]) {
      res.push(rArr[r]);
      r++;
    } else {
      res.push(lArr[l]);
      l++;
    }
  }

  // 將剩下的元素直接通通加進 res 中
  return res.concat(lArr.slice(l)).concat(rArr.slice(r));
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // 將陣列切成左右兩半
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 遞迴地對左右兩半進行排序，然後合併
  return merge(mergeSort(right), mergeSort(left));
}
