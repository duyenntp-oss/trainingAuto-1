//  Bài tập 3: Data-driven test đăng nhập (20')
// Tạo 2 file:

// File 1: data/login-data.ts

// Định nghĩa type LoginCase gồm: username, password, expectedResult
// Tạo mảng chứa 3 bộ data: 1 đăng nhập đúng, 1 sai password, 1 trống
// File 2: tests/login-driven.spec.ts

// Import data từ file trên
// Dùng vòng lặp for...of tạo test case tự động
// Mỗi test: đăng nhập và kiểm tra kết quả thành công/thất bại*/

export type LoginCase = {
  username: string;
  password: string;
  expectedResult: string;
};

export const loginCases: LoginCase[] = [
  {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    expectedResult: 'success'
  },
  {
    username: 'tomsmith',
    password: 'wrongPassword',
    expectedResult: 'Invalid password'
  },
  {
    username: '',
    password: '',
    expectedResult: 'Username is required'
  }
];