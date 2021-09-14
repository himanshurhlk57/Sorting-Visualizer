const sizeRange = document.getElementById("sizeRange");
const speedRange = document.getElementById("speedRange");
const bars = document.getElementById("bars");
const algoInput = document.getElementById("algoInput");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// DOM varialbles
let array = [];
let speedX = 0;

//------------function for all algo----------//

const delayAlgo = async (delay = 40) => {
    delay = delay - speedRange.value*4
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, delay);
  });
};

//----------------------------------------//

const clearArray = () => {
  array = [];
  bars.innerHTML = "";
};

const createNewArray = (val = 0) => {
  clearArray();
  const noOfBars = 25 + 20 * val;
  
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.setAttribute("id", `bar-${i}`);
    bars.appendChild(bar);
  }
};

// check if algo is selected or not
const checkAlgo = () => {
  if (algoInput.value > 0) {
    return true;
  } else {
    return false;
  }
};

const disableAll = () => {
  btn1.disabled = true;
  btn2.disabled = true;
  sizeRange.disabled = true;
  speedRange.disabled = true;
};

const enableAll = () => {
  btn1.disabled = false;
  btn2.disabled = false;
  sizeRange.disabled = false;
  speedRange.disabled = false;
};

// function that will start on load
const init = () => {
    createNewArray(sizeRange.value);
};

init();

//-----------------event listeners-----------------------//

// buttons
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  createNewArray(sizeRange.value);
});

btn2.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!checkAlgo()) {
    alert("Choose Sorting Algorithm");
  } else {
    disableAll();
    if (algoInput.value == "1") {
      await bubbleSort();
    } else if (algoInput.value == "2") {
      await selectionSort();
    } else if (algoInput.value == "3") {
      await insertionSort();
    } else if (algoInput.value == "4") {
      await mergeSort();
    } else if (algoInput.value == "5") {
      await quickSort();
    }
    enableAll();
  }
});

// drag inputs
sizeRange.addEventListener("change", (e) => {
  createNewArray(sizeRange.value);
});

speedRange.addEventListener("change", (e) => {
  speedX = speedRange.value;
});
