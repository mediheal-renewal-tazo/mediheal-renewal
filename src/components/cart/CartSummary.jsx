import React from 'react';

const CartSummary = ({ totalOriginalPrice, totalDiscount, totalShippingFee }) => {
    return (
        <div className="cart-summary">
            <div className="cart-summary__item">
                <span className="cart-summary__title">판매가</span>
                <span className="cart-summary__val">
                    {totalOriginalPrice.toLocaleString()}<span className="cart-summary__unit">원</span>
                </span>
            </div>
            <div className="cart-summary__sign cart-summary__sign--minus">-</div>
            <div className="cart-summary__item">
                <span className="cart-summary__title">할인금액</span>
                <span className="cart-summary__val">
                    {totalDiscount.toLocaleString()}<span className="cart-summary__unit">원</span>
                </span>
            </div>
            <div className="cart-summary__sign cart-summary__sign--plus">+</div>
            <div className="cart-summary__item">
                <span className="cart-summary__title">배송비</span>
                <span className="cart-summary__val">
                    {totalShippingFee.toLocaleString()}<span className="cart-summary__unit">원</span>
                </span>
            </div>
        </div>
    );
};

export default CartSummary;
