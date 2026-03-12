/*
장바구니 담당

필요한 함수예시
- getCart(userId)
- addCartItem(payload)
- updateCartItem(cartItemId, payload)
- removeCartItem(cartItemId)
- clearCart(userId)

상품 상세에서 담기
장바구니 페이지
주문 완료 후 비우기

등을 위함
*/

// src/api/cart.api.js
import cartData from "@/mock/cartData";
import productsData from "@/mock/productsData";
import { delay } from "@/utils/delay";

export const getCart = async (userId) => {
  await delay(250);

  const userCart = cartData.filter((item) => item.userId === userId);

  return userCart.map((cartItem) => {
    const product = productsData.find(
      (productItem) => productItem.id === cartItem.productId
    );

    return {
      ...cartItem,
      product,
    };
  });
};

export const addCartItem = async ({ userId, productId, quantity = 1 }) => {
  await delay(250);

  const existingItem = cartData.find(
    (item) => item.userId === userId && item.productId === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    return existingItem;
  }

  const newItem = {
    id: `c${Date.now()}`,
    userId,
    productId,
    quantity,
    addedAt: new Date().toISOString().slice(0, 10),
  };

  cartData.push(newItem);
  return newItem;
};

export const updateCartItem = async (cartItemId, payload) => {
  await delay(200);

  const target = cartData.find((item) => item.id === cartItemId);
  if (!target) return null;

  Object.assign(target, payload);
  return target;
};

export const removeCartItem = async (cartItemId) => {
  await delay(200);

  const index = cartData.findIndex((item) => item.id === cartItemId);
  if (index === -1) return false;

  cartData.splice(index, 1);
  return true;
};

export const clearCart = async (userId) => {
  await delay(200);

  for (let i = cartData.length - 1; i >= 0; i -= 1) {
    if (cartData[i].userId === userId) {
      cartData.splice(i, 1);
    }
  }

  return true;
};