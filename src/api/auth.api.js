//로그인/회원가입/로그아웃 같은 인증 흐름 담당
/*
필요 함수 예시

- login(email, password)
- signup(newUser)
- logout()
- getCurrentUser()

로그인 페이지
회원가입 페이지
헤더 로그인 상태
마이페이지 접근

등을 위함
 */

// src/api/auth.api.js

import userData from "@/mock/userData";
import { delay } from "@/utils/delay";

export const login = async ({ email, password }) => {
  await delay(300);

  const user = userData.find(
    (item) => item.email === email && item.password === password
  );

  if (!user) {
    throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
  }

  return user;
};

export const signup = async (newUser) => {
  await delay(300);

  const exists = userData.some((item) => item.email === newUser.email);

  if (exists) {
    throw new Error("이미 가입된 이메일입니다.");
  }

  const createdUser = {
    id: `u${Date.now()}`,
    membership: "silver",
    point: 0,
    createdAt: new Date().toISOString().slice(0, 10),
    profileImage: "/images/profile/profile-default.png",
    ...newUser,
  };

  userData.push(createdUser);
  return createdUser;
};

export const getCurrentUser = async (userId) => {
  await delay(200);
  return userData.find((item) => item.id === userId) || null;
};

export const logout = async () => {
  await delay(100);
  return true;
};