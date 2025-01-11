export const sum = (a, b) => {
  return Number(a) + Number(b);
};

export const sumArrayElements = (numbers) => {
  let sum = 0;

  for (const number of numbers) {
    sum += Number(number);
  }

  return sum;
};
