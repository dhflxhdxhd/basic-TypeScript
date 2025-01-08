// Enum : 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// Enum은 컴파일 결과 객체로 반환

// enum Role {
//   Admin = 0,
//   User = 1,
//   Guest = 2,
// }

enum Role {
  Admin, // 지정하지 않은 첫번째 값 0
  User = 10, // 지정한 문자 기준으로 밑에 값 +1
  Guest,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김밥",
  role: Role.Admin,
  language: Language.korean,
};
const user2 = {
  name: "홍당무",
  role: Role.User,
  language: Language.korean,
};
const user3 = {
  name: "바크콜",
  role: Role.Guest,
  language: Language.korean,
};

console.log(user1, user2, user3);
