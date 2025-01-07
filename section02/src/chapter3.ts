// 객체 object

// 구조적 타입 시스템 -> Property Type based System
let user: { id?: number; name: string } = {
  id: 1,
  name: "김밥",
};

// ? 선택적 프로퍼티

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "black",
// };

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

config.apiKey = "hacked";
