/**
 * unknown 타입
 */

function unknownExam() {
  // unknown 타입은 최상위 계층
  // 어떤 타입을 업캐스팅해도 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

/**
 * Never 타입 = 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  // never 타입은 최하위 타입이므로 모든 타입이 never 타입을 할당할 수 있음
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅으로 불가능
  // never 타입은 최하위 타입이므로 어떤 타입도 할당할 수 없음
  //   let never1: never = 10;
  //   let never2: never = "hi";
  //   let never3: never = true;
}

/**
 * void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  // void 타입은 undefinded 타입의 서브타입
  let voidVar: void = undefined;
}

/**
 * any 타입 - 치트키
 * **타입 계층도 완벽히 무시.
 * 모든 타입의 슈퍼타입, 모든 타입의 서브 타입 (never 타입 제외)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  anyVar = unknownVar; // 계층도 무시하고 가능
  neverVar = anyVar; // [error] any 타입은 never 타입까지 다운캐스팅은 불가능 (유일하게 못하는 것)
}
