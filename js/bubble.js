const bubbleSort = async () => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const bar1 = document.getElementById(`bar-${i}`);
      const bar2 = document.getElementById(`bar-${j}`);
      bar1.style.background = "yellow";
      bar2.style.background = "yellow";
      await delayAlgo();
      if (array[i] > array[j]) {
        array[j] = array[j] + array[i];
        array[i] = array[j] - array[i];
        array[j] = array[j] - array[i];
        const t = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = t;
      }
      bar1.style.background = "orange";
      bar2.style.background = "orange";
    }
  }
};
