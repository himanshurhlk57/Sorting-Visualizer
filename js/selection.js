const selectionSort = async () => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let idx = i;
    const bar1 = document.getElementById(`bar-${i}`);
    for (let j = i + 1; j < n; j++) {
        if (array[idx] > array[j]) {
            idx = j;
        }
    }
    const bar2 = document.getElementById(`bar-${idx}`);
    bar1.style.background = "yellow";
    bar2.style.background = "yellow";
    await delayAlgo();
    if (array[i] > array[idx]) {
        console.log(array[i] + '  ' + array[idx])
      array[idx] = array[idx] + array[i];
      array[i] = array[idx] - array[i];
      array[idx] = array[idx] - array[i];
      const t = bar1.style.height;
      bar1.style.height = bar2.style.height;
      bar2.style.height = t;
    }
    bar1.style.background = "orange";
    bar2.style.background = "orange";
  }
};
