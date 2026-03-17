/*
1:1 문의 담당

필요한 함수예시
- getInquiriesByUser(userId)
- createInquiry(payload)
- deleteInquiry(inquiryId)
- updateInquiry(inquiryId, payload) 선택


1:1 문의 페이지
마이페이지 문의내역 연결

등을 위함
*/

// src/api/inquiries.api.js
import inquiryData from '@/mock/inquiryData';
import { delay } from '@/utils/delay';

export const getInquiriesByUser = async (userId) => {
    await delay(250);

    return inquiryData
        .filter((item) => item.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const createInquiry = async (payload) => {
    await delay(250);

    const newInquiry = {
        id: `q${Date.now()}`,
        status: '답변대기',
        createdAt: new Date().toISOString().slice(0, 10),
        ...payload,
    };

    inquiryData.push(newInquiry);
    return newInquiry;
};

export const deleteInquiry = async (inquiryId) => {
    await delay(200);

    const index = inquiryData.findIndex((item) => item.id === inquiryId);
    if (index === -1) return false;

    inquiryData.splice(index, 1);
    return true;
};

export const updateInquiry = async (inquiryId, payload) => {
    await delay(200);

    const target = inquiryData.find((item) => item.id === inquiryId);
    if (!target) return null;

    Object.assign(target, payload);
    return target;
};
