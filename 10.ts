import { JSONValue } from './9';
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let called = false;

  return function (...args) {
    if (called) return undefined;

    called = true;

    return fn(args);
  };
}
