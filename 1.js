function createHelloWorld() {
  return () => 'Hello World';
}

const f = createHelloWorld();

f();
