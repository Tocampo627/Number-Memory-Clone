export const randomNumberGenerator = (numberOfDigits) => {
  //Your code here
  if (typeof numberOfDigits !== 'number') {
    throw Error('numbers expected');
  }
  let max = Math.floor(10 ** numberOfDigits);
  let min = Math.ceil(10 ** (numberOfDigits - 1));
  let randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum || 1;
};
