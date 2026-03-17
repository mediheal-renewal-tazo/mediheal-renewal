import React from 'react';
import './order-detail.scss';

const OrderDetail = ({ orderItems = [], orderSummary, onBack }) => {
    // 실제 데이터 기반 계산 로직 (orderSummary에서 가져옴)
    const {
        originalProductPrice = 0,
        itemDiscounts = 0,
        couponDiscountAmount = 0,
        actualPointsToUse = 0,
        shippingFee = 0,
        totalTotalPayment = 0,
    } = orderSummary || {};

    let originalPrice = 0;
    let itemDiscount = 0;
    // 고정 데모값 대신 전달받은 데이터 사용
    let pointUsage = actualPointsToUse;
    let couponDiscount = couponDiscountAmount;

    const productPrice = originalProductPrice - itemDiscounts; // 상품 금액 (할인가 적용)
    const totalPrice = totalTotalPayment;

    const orderInfo = {
        date: '26.03.16(일)',
        orderNumber: '20260318123120440001',
        name: '장*진',
        address: '수원시 장안구 창훈로 70-3 ****',
        phone: '010-****-0000',
        memo: '부재 시 집 앞에 놔주세요.',
    };

    const benefits = {
        basePoint: Math.floor(totalPrice * 0.005),
        reviewPoint: 2500,
    };
    benefits.totalPoint = benefits.basePoint + benefits.reviewPoint;

    return (
        <div className="order-detail">
            <div className="inner">
                <div className="order-detail__header">
                    <h2 className="title">주문 상세</h2>
                </div>

                <div className="order-detail__info">
                    <div className="date">{orderInfo.date}</div>
                    <div className="order-number">주문번호 {orderInfo.orderNumber}</div>

                    <div className="user-info">
                        <div className="name">{orderInfo.name}</div>
                        <p>{orderInfo.address}</p>
                        <p>{orderInfo.phone}</p>
                        <p className="memo">{orderInfo.memo}</p>
                    </div>
                </div>

                <div className="order-detail__section">
                    <h3 className="section-title">주문 상품 {orderItems.length}개</h3>
                    <div className="product-list">
                        {orderItems.map((item) => (
                            <div className="product-item" key={item.id}>
                                <div className="thumb"></div>
                                <div className="info">
                                    <div className="name">{item.product.name}</div>
                                    <div className="qty">수량 : {item.quantity}개</div>
                                    <div className="price">
                                        {(
                                            (item.product.price - item.product.discount) *
                                            item.quantity
                                        ).toLocaleString()}
                                        원
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="btn-tracking">
                        배송 조회
                    </button>
                </div>

                <div className="order-detail__summary">
                    <h3 className="summary-title">결제 금액</h3>
                    <div className="kv-list">
                        <div className="kv-item">
                            <span className="key">상품 금액</span>
                            <span className="val">{productPrice.toLocaleString()}원</span>
                        </div>
                        <div className="kv-item blue">
                            <span className="key">쿠폰 할인</span>
                            <span className="val">-{couponDiscount.toLocaleString()}원</span>
                        </div>
                        <div className="kv-item">
                            <span className="key">적립금 사용</span>
                            <span className="val">-{pointUsage.toLocaleString()}원</span>
                        </div>
                        <div className="kv-item">
                            <span className="key">배송비</span>
                            <span className="val">
                                {shippingFee === 0
                                    ? '무료 배송'
                                    : `${shippingFee.toLocaleString()}원`}
                            </span>
                        </div>
                        <div className="kv-item total">
                            <span className="key">총 결제 금액</span>
                            <span className="val">{totalPrice.toLocaleString()}원</span>
                        </div>
                    </div>
                </div>

                <div className="order-detail__benefits">
                    <h3 className="benefits-title">적립 혜택</h3>
                    <div className="kv-list">
                        <div className="kv-item">
                            <span className="key">기본 적립</span>
                            <span className="val">{benefits.basePoint.toLocaleString()}원</span>
                        </div>
                        <div className="kv-item">
                            <span className="key">후기 적립</span>
                            <span className="val">
                                최대 {benefits.reviewPoint.toLocaleString()}원
                            </span>
                        </div>
                        <div className="kv-item total">
                            <span className="key">총 적립 금액</span>
                            <span className="val">{benefits.totalPoint.toLocaleString()}원</span>
                        </div>
                    </div>
                </div>

                <div className="order-detail__actions">
                    <button type="button" className="btn-review">
                        리뷰 쓰기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
