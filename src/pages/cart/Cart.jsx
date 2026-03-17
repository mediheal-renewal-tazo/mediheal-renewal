import React, { useState } from 'react';
import CartItem from '../../components/common/cart/CartItem';
import OrderComplete from '../../components/common/cart/OrderComplete';
import CartSummary from '../../components/common/cart/CartSummary';
import CartTotal from '../../components/common/cart/CartTotal';
import OrderStep from '../../components/common/cart/OrderStep';
import OrderDetail from '../../components/common/cart/order-detail/OrderDetail';

// API 모킹 함수 (필요시 활성화)
// import { getCart, updateCartItem, removeCartItem } from '../../api/cart.api';

import './cart.scss';

// 초기 더미 데이터 작성
const initialDummyData = [
    {
        id: 'c1',
        userId: 'user1',
        productId: 'p1',
        quantity: 1,
        product: {
            id: 'p1',
            name: '마데카소사이드 흔적 토너패드 100매',
            price: 26000,
            discount: 5400,
            shippingFee: 3000,
        },
    },
    {
        id: 'c2',
        userId: 'user1',
        productId: 'p2',
        quantity: 1,
        product: {
            id: 'p2',
            name: '티트리 에센셜 마스크 진정 수분 10매',
            price: 20000,
            discount: 8100,
            shippingFee: 3000,
        },
    },
];

const Cart = () => {
    // 흐름 제어: 'cart' -> 'order' -> 'complete'
    const [step, setStep] = useState('cart');
    const [orderItems, setOrderItems] = useState([]); // 주문할(결제할) 상품 목록
    const [orderSummary, setOrderSummary] = useState(null); // 최종 결제 정보 (할인, 적립금 등)

    const [cartItems, setCartItems] = useState(initialDummyData);
    const [selectedIds, setSelectedIds] = useState(initialDummyData.map((item) => item.id));

    // 전체 선택 / 해제
    const handleToggleAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(cartItems.map((item) => item.id));
        } else {
            setSelectedIds([]);
        }
    };

    // 개별 선택 / 해제
    const handleToggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((selId) => selId !== id) : [...prev, id]
        );
    };

    // 수량 변경
    const handleUpdateQuantity = async (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );
    };

    // 아이템 삭제
    const handleRemove = async (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        setSelectedIds((prev) => prev.filter((selId) => selId !== id));
    };

    // 선택 항목 삭제
    const handleRemoveSelected = async () => {
        setCartItems((prev) => prev.filter((item) => !selectedIds.includes(item.id)));
        setSelectedIds([]);
    };

    // 하단 '주문하기': 전체/선택 항목 주문결제 화면으로 전환
    const handleOrder = () => {
        const itemsToOrder = cartItems.filter((item) => selectedIds.includes(item.id));
        if (itemsToOrder.length === 0) {
            alert('주문할 상품을 선택해주세요.');
            return;
        }
        setOrderItems(itemsToOrder);
        setStep('order');
    };

    // 각 row '주문하기': 해당 단일 상품만 주문결제 화면으로 전환
    const handleOrderSingle = (item) => {
        setOrderItems([item]);
        setStep('order');
    };

    // '결제하기': 결제완료 화면으로 전환
    const handlePayment = (summary) => {
        setOrderSummary(summary);
        setStep('complete');
    };

    // if (step === 'complete') {
    //     return <OrderComplete orderItems={orderItems} />;
    // }

    // 계산 로직 (선택된 상품들 기준)
    const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));

    let totalOriginalPrice = 0;
    let totalDiscount = 0;

    selectedItems.forEach((item) => {
        const { price = 0, discount = 0 } = item.product || {};
        totalOriginalPrice += price * item.quantity;
        totalDiscount += discount * item.quantity;
    });

    const isFreeShipping = totalOriginalPrice - totalDiscount >= 20000;
    const totalShippingFee = selectedItems.length > 0 && !isFreeShipping ? 3000 : 0;

    const totalPayment = totalOriginalPrice - totalDiscount + totalShippingFee;
    const isAllSelected = cartItems.length > 0 && selectedIds.length === cartItems.length;

    const renderCart = () => (
        <div className="cart">
            <div className="inner">
                <h2 className="cart__title">장바구니</h2>

                <div className="cart__table">
                    <div className="cart__head">
                        <div className="cart__head-col cart__head-col--checkbox">
                            <label className="cart__checkbox-label">
                                <input
                                    type="checkbox"
                                    className="cart__checkbox"
                                    checked={isAllSelected}
                                    onChange={handleToggleAll}
                                />
                                <span className="cart__checkbox-custom"></span>
                            </label>
                        </div>
                        <div className="cart__head-col cart__head-col--info">상품정보</div>
                        <div className="cart__head-col cart__head-col--qty">수량</div>
                        <div className="cart__head-col cart__head-col--price">상품구매금액</div>
                        <div className="cart__head-col cart__head-col--discount">할인 금액</div>
                        <div className="cart__head-col cart__head-col--shipping">배송비</div>
                        <div className="cart__head-col cart__head-col--total">결제 금액</div>
                        <div className="cart__head-col cart__head-col--action"></div>
                    </div>

                    <div className="cart__body">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    isSelected={selectedIds.includes(item.id)}
                                    onToggleSelect={handleToggleSelect}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemove={handleRemove}
                                    onOrderSingle={handleOrderSingle}
                                />
                            ))
                        ) : (
                            <div className="cart__empty">장바구니에 담긴 상품이 없습니다.</div>
                        )}
                    </div>
                </div>

                <div className="cart__all-delete">
                    <button
                        type="button"
                        className="cart__btn cart__btn--select-delete"
                        onClick={handleRemoveSelected}
                    >
                        선택 삭제
                    </button>
                </div>

                <CartSummary
                    totalOriginalPrice={totalOriginalPrice}
                    totalDiscount={totalDiscount}
                    totalShippingFee={totalShippingFee}
                />

                <CartTotal totalPayment={totalPayment} freeShippingThreshold={20000} />

                {/* 결제완료로 가는 버튼 */}
                <div className="cart__all-order">
                    <button
                        type="button"
                        className="cart__btn cart__btn--all-order"
                        onClick={handleOrder}
                    >
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    );

    const renderOrderDetail = () => (
        <OrderDetail 
            orderItems={orderItems} 
            orderSummary={orderSummary}
            onBack={() => setStep('cart')} 
        />
    );

    const renderContent = () => {
        switch (step) {
            case 'cart':
                return renderCart();
            case 'order':
                return (
                    <OrderStep
                        orderItems={orderItems}
                        onBack={() => setStep('cart')}
                        onPayment={handlePayment}
                    />
                );
            case 'complete':
                return (
                    <OrderComplete 
                        orderItems={orderItems} 
                        orderSummary={orderSummary}
                        onGoDetail={() => setStep('detail')} 
                    />
                );
            case 'detail':
                return renderOrderDetail();
            default:
                return renderCart();
        }
    };

    return renderContent();
};

export default Cart;
