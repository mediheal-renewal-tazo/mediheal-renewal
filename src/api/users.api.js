/*
유저 상세 정보 담당

필요한 함수예시
- getUserById(userId)
- updateUserProfile(userId, payload)

마이페이지
회원 정보 표시/수정
리뷰 작성자 정보 표시
등을 위함

-> auth와 users를 합쳐도 되지만, 분리하면 더 실무스럽게 보임

*/

// src/api/users.api.js
import userData from '@/mock/userData';
import { delay } from '@/utils/delay';

export const getUsers = async () => {
    await delay(200);
    return [...userData];
};

export const getUserById = async (userId) => {
    await delay(200);

    const user = userData.find((item) => item.id === userId);
    return user || null;
};

export const getUserByEmail = async (email) => {
    await delay(200);

    const user = userData.find((item) => item.email === email);
    return user || null;
};

export const updateUserProfile = async (userId, payload) => {
    await delay(250);

    const target = userData.find((item) => item.id === userId);
    if (!target) return null;

    Object.assign(target, payload);
    return target;
};

export const updateUserPoint = async (userId, nextPoint) => {
    await delay(200);

    const target = userData.find((item) => item.id === userId);
    if (!target) return null;

    target.point = nextPoint;
    return target;
};

export const updateUserMembership = async (userId, membership) => {
    await delay(200);

    const target = userData.find((item) => item.id === userId);
    if (!target) return null;

    target.membership = membership;
    return target;
};
