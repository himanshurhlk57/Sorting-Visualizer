const partition = async (array, left, right) => {
  let pivot = array[right];
  let i = left - 1;
  //   console.log(pivot)
  let bar = document.getElementById(`bar-${right}`);
  bar.style.background = "red";
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i += 1;
      let bar1 = document.getElementById(`bar-${i}`);
      let bar2 = document.getElementById(`bar-${j}`);
      bar1.style.background = "yellow";
      bar2.style.background = "yellow";
      await delayAlgo();
      const x = array[i];
      array[i] = array[j];
      array[j] = x;
      const t = bar1.style.height;
      bar1.style.height = bar2.style.height;
      bar2.style.height = t;
      bar1.style.background = "orange";
      bar2.style.background = "orange";
    }
  }

  i += 1;
  const x = array[i];
  let bar1 = document.getElementById(`bar-${i}`);
  bar1.style.background = "yellow";
  await delayAlgo();
  array[i] = array[right];
  array[right] = x;
  const t = bar1.style.height;
  bar1.style.height = bar.style.height;
  bar.style.height = t;
  bar1.style.background = "orange";
  bar.style.background = "orange";
  return i;
};

const callAlgo2 = async (array, left, right) => {
  if (left < right) {
    let p = await partition(array, left, right);
    await callAlgo2(array, left, p - 1);
    await callAlgo2(array, p + 1, right);
  }
};

const quickSort = async () => {
  let n = array.length;
  await callAlgo2(array, 0, n - 1);
};
