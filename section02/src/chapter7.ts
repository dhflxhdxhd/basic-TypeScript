// void 타입과 never 타입

// void
// 아무것도 없음을 의미하는 타입
function fun1(): string {
  return "hello";
}

function fun2(): void {
  console.log("nothing");
}

// let a: void;
// a = 1;
// a = "hello";
// a = undefined;

// never
// 불가능한 타입

function fun3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}
