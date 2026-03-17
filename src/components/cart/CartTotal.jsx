import React from 'react';

const CartTotal = ({ totalPayment, freeShippingThreshold = 20000 }) => {
    return (
        <div className="cart-total">
            <div className="cart-total__desc">
                <span className="cart-total__point">{freeShippingThreshold.toLocaleString()}원</span> 이상 구매 시 무료배송
            </div>
            <div className="cart-total__price-wrap">
                <span className="cart-total__title">최종 결제금액</span>
                <span className="cart-total__val">
                    {totalPayment.toLocaleString()}<span className="cart-total__unit">원</span>
                </span>
            </div>
        </div>
    );
};

export default CartTotal;
