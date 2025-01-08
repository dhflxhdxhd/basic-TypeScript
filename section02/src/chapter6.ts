// any와 unknown

// any
// 특정 변수의 타입을 확실히 모를 때 사용 가능한 타입
// 무분별 난사 지양

// let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();

// let num: number = 10;
// num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = {};
unknownVar = 1;
unknownVar = () => {};

// [error] 'unknownVar'은(는) 'unknown' 형식입니다
// unknownVar.toUpperCase();
// num = unknownVar;
