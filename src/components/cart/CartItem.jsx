import React from 'react';

const CartItem = ({ item, isSelected, onToggleSelect, onUpdateQuantity, onRemove, onOrderSingle }) => {
    // 상품 기본 정보 꺼내기
    const { id, product, quantity } = item;
    const { name, price = 0, discount = 0, shippingFee = 0, image } = product;

    // 계산
    // dummyData 기반으로 볼 때
    // 마데카소사이드: 26,000, 5,400할인, 3,000배송 = 20,400 결제금액 (26000-5400)
    // 따라서 결제금액은 (판매가 - 할인)*수량
    const productPurchasePrice = price * quantity;
    const totalDiscount = discount * quantity;
    const itemFinalPrice = (price - discount) * quantity;

    return (
        <div className="cart__row">
            <div className="cart__col cart__col--checkbox">
                <label className="cart__checkbox-label">
                    <input
                        type="checkbox"
                        className="cart__checkbox"
                        checked={isSelected}
                        onChange={() => onToggleSelect(id)}
                    />
                    <span className="cart__checkbox-custom"></span>
                </label>
            </div>
            <div className="cart__col cart__col--info">
                <div className="cart__product">
                    <div className="cart__thumb">
                        {image && <img src={image} alt={name} />}
                    </div>
                    <p className="cart__name">{name}</p>
                </div>
            </div>
            <div className="cart__col cart__col--qty">
                <div className="cart__qty">
                    <button
                        type="button"
                        className="cart__qty-btn cart__qty-btn--minus"
                        onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
                    >
                        -
                    </button>
                    <span className="cart__qty-val">{quantity}</span>
                    <button
                        type="button"
                        className="cart__qty-btn cart__qty-btn--plus"
                        onClick={() => onUpdateQuantity(id, quantity + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="cart__col cart__col--price">
                <span className="cart__price-num">{productPurchasePrice.toLocaleString()}</span>
            </div>
            <div className="cart__col cart__col--discount">
                <span className="cart__price-num">{totalDiscount.toLocaleString()}</span>
            </div>
            <div className="cart__col cart__col--shipping">
                <span className="cart__price-num">{shippingFee.toLocaleString()}</span>
            </div>
            <div className="cart__col cart__col--total">
                <span className="cart__price-num cart__price-num--strong">
                    {itemFinalPrice.toLocaleString()}
                </span>
            </div>
            <div className="cart__col cart__col--action">
                <div className="cart__actions">
                    <button
                        type="button"
                        className="cart__btn cart__btn--order"
                        onClick={() => onOrderSingle(item)}
                    >
                        주문하기
                    </button>
                    <button type="button" className="cart__btn cart__btn--wish">
                        관심상품등록
                    </button>
                    <button
                        type="button"
                        className="cart__btn cart__btn--delete"
                        onClick={() => onRemove(id)}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
