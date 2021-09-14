const merge = async (array, left, mid, right) => {
  let tmpArr = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let p = 0;
  while (i <= mid && j <= right) {
    let bar1 = document.getElementById(`bar-${i}`);
    let bar2 = document.getElementById(`bar-${j}`);
    bar1.style.background = "yellow";
    bar2.style.background = "yellow";
    await delayAlgo();
    if (array[i] < array[j]) {
      tmpArr[p] = array[i];
      bar1.style.background = "green";
      i += 1;
    } else {
      tmpArr[p] = array[j];
      bar2.style.background = "green";
      j += 1;
    }
    p += 1;
  }
  while (i <= mid) {
    tmpArr[p] = array[i];
    let bar1 = document.getElementById(`bar-${i}`);
    bar1.style.background = "green";
    i += 1;
    p += 1;
  }
  while (j <= right) {
    tmpArr[p] = array[j];
    let bar2 = document.getElementById(`bar-${j}`);
    bar2.style.background = "green";
    j += 1;
    p += 1;
  }
  for(i=0; i<p; i++){
    const bar = document.getElementById(`bar-${left+i}`);
    array[left+i] = tmpArr[i]
    bar.style.background = 'red'
    bar.style.height = `${tmpArr[i] * 2}px`;
    await delayAlgo()
    bar.style.background = 'orange'
  }
};

const callAlgo = async (array, left, right) => {
  if (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    await callAlgo(array, left, mid);
    await callAlgo(array, mid + 1, right);
    await merge(array, left, mid, right);
  }
};

const mergeSort = async () => {
  let n = array.length;
  await callAlgo(array, 0, n - 1);
};
