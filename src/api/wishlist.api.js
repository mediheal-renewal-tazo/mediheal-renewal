// src/api/wishlist.api.js
import wishlistData from "@/mock/wishlistData";
import productsData from "@/mock/productsData";
import { delay } from "@/utils/delay";

export const getWishlist = async (userId) => {
  await delay(200);

  const wishlist = wishlistData.filter((item) => item.userId === userId);

  return wishlist.map((wishlistItem) => {
    const product = productsData.find(
      (productItem) => productItem.id === wishlistItem.productId
    );

    return {
      ...wishlistItem,
      product,
    };
  });
};

export const getWishlistRaw = async (userId) => {
  await delay(200);
  return wishlistData.filter((item) => item.userId === userId);
};

export const isWishlisted = async (userId, productId) => {
  await delay(100);

  return wishlistData.some(
    (item) => item.userId === userId && item.productId === productId
  );
};

export const addWishlist = async ({ userId, productId }) => {
  await delay(200);

  const exists = wishlistData.find(
    (item) => item.userId === userId && item.productId === productId
  );

  if (exists) return exists;

  const newItem = {
    id: `w${Date.now()}`,
    userId,
    productId,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  wishlistData.push(newItem);
  return newItem;
};

export const removeWishlist = async (userId, productId) => {
  await delay(200);

  const index = wishlistData.findIndex(
    (item) => item.userId === userId && item.productId === productId
  );

  if (index === -1) return false;

  wishlistData.splice(index, 1);
  return true;
};

export const toggleWishlist = async ({ userId, productId }) => {
  await delay(200);

  const existingIndex = wishlistData.findIndex(
    (item) => item.userId === userId && item.productId === productId
  );

  if (existingIndex !== -1) {
    wishlistData.splice(existingIndex, 1);
    return {
      status: "removed",
      productId,
    };
  }

  const newItem = {
    id: `w${Date.now()}`,
    userId,
    productId,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  wishlistData.push(newItem);

  return {
    status: "added",
    productId,
    item: newItem,
  };
};