// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
};

let user1: User = {
  id: 1,
  name: "김두부",
  nickname: "dubu",
};

let user2: User = {
  id: 2,
  name: "박커스터드",
  nickname: "cust",
};

// 주의사항 :  같은  블록 스코프 {} 내에서 동일한 이름의 타입값 선언 불가
// type User = { // 'User' 식별자가 중복되었습니다
//   id: number;
//   name: string;
//   nickname: string;
// };

function User() {
  type User = {
    // 이건 다른 블록 스코프니까 가능
    id: number;
    name: string;
    nickname: string;
  };
}

// 인덱스 시그니처
// 객체 타입의 별칭을 더 유연하게 하도록 도와줌

// 필요한 경우
type CountryCodes1 = {
  Korea: string;
  UnitedStates: string;
};
let countryCodes1: CountryCodes1 = {
  Korea: "ko",
  UnitedStates: "us",
};

// 인덱스 시그니처 적용
// 규칙을 이용해서 적용하는 방식
type CountryCodes2 = {
  [key: string]: string;
};
let countryCodes2: CountryCodes2 = {
  Korea: "ko",
  UnitedStates: "us",
};

// 활용
type NumberCodes = {
  [key: string]: number;
};

let numberCodes: NumberCodes = {
  Korea: 410,
  UnitedStates: 840,
};

// 주의사항
let numberCodes2: NumberCodes = {}; // 빈 객체여도 오류 안남
type NumberCodes2 = {
  [key: string]: number;
  Korea: number; // 반드시 가져야할 key 값이 있을 경우, 이런 식으로 설정하면 됨. value 타입이 다르면 안됨
};

let numberCodes3: NumberCodes2 = {
  Korea: 1,
};
