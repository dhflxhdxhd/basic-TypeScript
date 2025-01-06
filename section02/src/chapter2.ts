// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "bye", "good"];

let boolArr1: boolean[] = [true, false, true];
let boolArr2: Array<boolean> = [true, true, false]; // 제네릭 방식

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr1: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];

let doubleArr2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const userInfo: [number, string][] = [
  [1, "김"],
  [2, "이"],
  [3, "박"],
  //   ["최", 4], //[error] 'string' 형식은 'number' 형식에 할당할 수 없습니다.
];
