const WINDOW_SIZE = 5;
let windowStore = [];
let sum = 0;
const calculateAverage = (numbers) => {
  const windowPrevState = [...windowStore];

  let fetchedNumbers = numbers|| [];

  fetchedNumbers.map((num) => {
      if (!windowStore.includes(num)) {
      if (windowStore.length >= WINDOW_SIZE) {
          windowStore.shift();
      }
      windowStore.push(num);
    }
  })
  sum = 0;
  windowStore.forEach((num) => {
    sum += num;
  });
  const average = sum / windowStore.length; 
 

  return{
    windowPrevState: windowPrevState,
    windowCurrentState: windowStore,
    numbers: fetchedNumbers,
    avg: parseFloat(average),
  }
};

module.exports = calculateAverage;