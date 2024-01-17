function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      var temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  var temp = arr[swapIdx];
  arr[swapIdx] = arr[start];
  arr[start] = temp;
  return swapIdx;
}

// pivot = 4 -> 1,2,3이 더 작으므로 pivot index=3이 되어야 한다
// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  // 하나의 arr 배열로 내부를 가르면서 정렬하는 것이다
  if (left < right) {
    let swapIndex = pivot(arr, left, right);
    quickSort(arr, left, swapIndex - 1); // 왼쪽 재귀
    quickSort(arr, swapIndex + 1, right); // 오른쪽 재귀
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
