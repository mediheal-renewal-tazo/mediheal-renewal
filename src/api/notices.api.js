/*
공지사항 담당

필요한 함수예시

- getNotices()
- getNoticeById(noticeId)

공지 리스트
공지 상세

등을 위함
*/

// src/api/notices.api.js
import noticeData from '@/mock/noticeData';
import { delay } from '@/utils/delay';

export const getNotices = async () => {
    await delay(250);

    return [...noticeData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const getNoticeById = async (noticeId) => {
    await delay(250);

    const notice = noticeData.find((item) => item.id === noticeId);
    if (!notice) return null;

    notice.views += 1;
    return notice;
};
