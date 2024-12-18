/**
 *Given two promises promise1 and promise2, 
 return a new promise. promise1 and promise2 will both resolve with a number. 
 The returned promise should resolve with the sum of the two numbers. 
 */
type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const result = await Promise.all([promise1, promise2]);

  return Promise.resolve(result.reduce((acc, cur) => acc + cur, 0));
}
