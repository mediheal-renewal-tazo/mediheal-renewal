const CART_KEY = 'mediheal_cart';

const getAll = () => {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

const saveAll = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('cartChange'));
};

/** 현재 유저의 장바구니 항목 반환 */
export const getCartItems = (userId) => {
    return getAll().filter((i) => i.userId === userId);
};

/**
 * 장바구니에 상품 추가
 * 동일 유저 + 동일 상품이면 수량만 합산
 */
export const addCartItem = ({ userId, productId, quantity, product }) => {
    const all = getAll();
    const existing = all.find((i) => i.userId === userId && i.productId === productId);

    if (existing) {
        saveAll(
            all.map((i) =>
                i.id === existing.id ? { ...i, quantity: i.quantity + quantity } : i
            )
        );
        return;
    }

    const nextId = all.length > 0 ? Math.max(...all.map((i) => i.id)) + 1 : 1;
    saveAll([...all, { id: nextId, userId, productId, quantity, product }]);
};

/** 수량 변경 */
export const updateCartItemQuantity = (id, quantity) => {
    saveAll(getAll().map((i) => (i.id === id ? { ...i, quantity } : i)));
};

/** 단일 항목 삭제 */
export const removeCartItem = (id) => {
    saveAll(getAll().filter((i) => i.id !== id));
};
