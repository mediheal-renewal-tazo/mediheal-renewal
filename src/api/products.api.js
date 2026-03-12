/*
상품 리스트/상세 담당

필요한 함수예시

- getProducts(params)
params 예시
{
  category: "pad",
  sort: "latest",
  keyword: "티트리"
}

- getProductById(productId)
- getRelatedProducts(productId) 선택사항
- getProductsByCategory(category) 선택사항

메인
상품 리스트
상품 상세
각 페이지에 일부 상품 노출

등을 위함
*/

// src/api/products.api.js

import productsData from "@/mock/productsData";
import { delay } from "@/utils/delay";

export const getProducts = async (params = {}) => {
  await delay(300);

  let result = [...productsData];

  if (params.category) {
    result = result.filter((item) => item.category === params.category);
  }

  if (params.line) {
    result = result.filter((item) => item.line === params.line);
  }

  if (params.function) {
    result = result.filter((item) => item.function === params.function);
  }

  if (params.keyword) {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(params.keyword.toLowerCase())
    );
  }

  if (params.tag === "new") {
    result = result.filter((item) => item.isNew);
  }

  if (params.tag === "only") {
    result = result.filter((item) => item.isOnly);
  }

  if (params.sort === "priceLow") {
    result.sort((a, b) => a.discountPrice - b.discountPrice);
  }

  if (params.sort === "priceHigh") {
    result.sort((a, b) => b.discountPrice - a.discountPrice);
  }

  if (params.sort === "latest") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return result;
};

export const getProductById = async (productId) => {
  await delay(300);
  return productsData.find((item) => item.id === productId) || null;
};

export const getRelatedProducts = async (productId) => {
  await delay(200);

  const target = productsData.find((item) => item.id === productId);
  if (!target) return [];

  return productsData
    .filter(
      (item) => item.id !== productId && item.category === target.category
    )
    .slice(0, 4);
};