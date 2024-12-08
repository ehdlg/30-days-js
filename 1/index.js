function createHelloWorld() {
  return () => console.log('Hello wolrd');
}

const f = createHelloWorld();

f();
