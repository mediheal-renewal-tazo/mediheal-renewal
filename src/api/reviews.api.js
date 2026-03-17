/*
리뷰 담당

필요한 함수예시
- getReviewsByProduct(productId)
- getReviewById(reviewId) 선택사항
- createReview(payload) 선택사항
- deleteReview(reviewId) 선택사항

상품 상세 리뷰 영역
마이페이지 리뷰 목록

등을 위함
*/

// src/api/reviews.api.js
import reviewData from "@/mock/reviewData";
import userData from "@/mock/userData";
import { delay } from "@/utils/delay";

export const getReviewsByProduct = async (productId) => {
  await delay(250);

  return reviewData
    .filter((item) => item.productId === productId)
    .map((review) => {
      const user = userData.find((item) => item.id === review.userId);

      return {
        ...review,
        userName: user?.name || "알 수 없음",
      };
    });
};

export const createReview = async (payload) => {
  await delay(250);

  const newReview = {
    id: `r${Date.now()}`,
    images: [],
    createdAt: new Date().toISOString().slice(0, 10),
    ...payload,
  };

  reviewData.push(newReview);
  return newReview;
};

export const deleteReview = async (reviewId) => {
  await delay(200);

  const index = reviewData.findIndex((item) => item.id === reviewId);
  if (index === -1) return false;

  reviewData.splice(index, 1);
  return true;
};