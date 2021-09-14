const insertionSort = async () => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      const bar1 = document.getElementById(`bar-${j - 1}`);
      const bar2 = document.getElementById(`bar-${j}`);
      bar1.style.background = "yellow";
      bar2.style.background = "yellow";
      await delayAlgo();
      array[j] = array[j] + array[j - 1];
      array[j - 1] = array[j] - array[j - 1];
      array[j] = array[j] - array[j - 1];
      const t = bar1.style.height;
      bar1.style.height = bar2.style.height;
      bar2.style.height = t;
      bar1.style.background = "orange";
      bar2.style.background = "orange";
      j -= 1;
    }
  }
};
