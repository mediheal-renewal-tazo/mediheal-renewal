import React, { useState } from 'react';
import { getAuthUser } from '@/utils/auth';
import './OrderStep.scss';

const OrderStep = ({ orderItems, onPayment, onCancel }) => {
    const user = getAuthUser();

    // 상품 금액 및 기본 정보 계산
    let originalProductPrice = 0;
    let itemDiscounts = 0;
    orderItems.forEach((item) => {
        const { price = 0, discount = 0 } = item.product || {};
        originalProductPrice += price * item.quantity;
        itemDiscounts += discount * item.quantity;
    });

    const basePrice = originalProductPrice - itemDiscounts; // 기본 할인 적용된 금액

    // 할인/적립금 상태 관리
    const [usedPoints, setUsedPoints] = useState(0);
    const [pointsInputValue, setPointsInputValue] = useState('0');
    const [selectedCoupon, setSelectedCoupon] = useState('');

    const MAX_POINTS = 3000;

    // 쿠폰 할인 계산 (신규가입쿠폰 20%)
    const couponDiscountAmount = selectedCoupon === 'new' ? Math.floor(basePrice * 0.2) : 0;

    // 배송비 계산 (20,000원 이상 무료)
    // 배송비 판단 기준은 '상품 금액 - 쿠폰 할인' 기준으로 잡거나 사용자 요구사항에 맞춤
    const isFreeShipping = (basePrice - couponDiscountAmount) >= 20000;
    const shippingFee = orderItems.length > 0 && !isFreeShipping ? 3000 : 0;

    // 총 결제 금액 계산
    // 결제 금액이 0원 미만이 되지 않도록 적립금 사용액 조정
    const subTotal = basePrice - couponDiscountAmount + shippingFee;
    const actualPointsToUse = Math.min(usedPoints, subTotal);
    const totalTotalPayment = Math.max(0, subTotal - actualPointsToUse);

    // 적립 혜택 (결제 금액의 1%)
    const earnedPoints = Math.floor(totalTotalPayment * 0.01);

    const handlePointsChange = (e) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        if (val === '') {
            setPointsInputValue('');
            setUsedPoints(0);
            return;
        }

        let numVal = parseInt(val, 10);
        if (numVal > MAX_POINTS) numVal = MAX_POINTS;

        setPointsInputValue(numVal.toLocaleString());
        setUsedPoints(numVal);
    };

    const handleCancelPoints = () => {
        setPointsInputValue('0');
        setUsedPoints(0);
    };

    return (
        <div className="order-payment">
            <div className="inner">
                <h2 className="order-payment__title">주문/결제</h2>

                <div className="order-payment__container">
                    {/* 왼쪽 영역 */}
                    <div className="order-payment__left">
                        {/* 배송지 */}
                        <div className="order-payment__section order-payment__delivery">
                            <div className="delivery-header">
                                <div className="title-area">
                                    <strong className="delivery-header__username">{user?.name || '이름 없음'}</strong>
                                    <span className="badge">기본 배송지</span>
                                </div>
                                <button type="button" className="btn-change">배송지 변경</button>
                            </div>
                            <div className="delivery-info">
                                <p>수원시 장안구 창훈로 70-3</p>
                                <p className="phone">010-0000-0000</p>
                            </div>
                            <div className="delivery-memo">
                                <select defaultValue="">
                                    <option value="" disabled>직접 입력</option>
                                    <option value="1">문 앞에 놓고 가주세요</option>
                                    <option value="2">경비실에 맡겨주세요</option>
                                </select>
                                <div className="memo-textarea-wrap">
                                    <textarea placeholder="부재 시 집 앞에 놔주세요" defaultValue="부재 시 집 앞에 놔주세요"></textarea>
                                    <span className="word-count">14/50</span>
                                </div>
                            </div>
                        </div>

                        {/* 주문 상품 */}
                        <div className="order-payment__section order-payment__products">
                            <h3 className="order-payment__section-title">주문 상품</h3>
                            <div className="product-list">
                                {orderItems.map((item) => (
                                    <div className="product-item" key={item.id}>
                                        <div className="thumb">
                                            {item.product?.image && <img src={item.product.image} alt={item.product.name} />}
                                        </div>
                                        <div className="info">
                                            <p className="name">{item.product.name}</p>
                                            <p className="qty">수량 : {item.quantity}개</p>
                                            <p className="price">{((item.product.price - item.product.discount) * item.quantity).toLocaleString()}원</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 할인 */}
                        <div className="order-payment__section order-payment__discount">
                            <h3 className="order-payment__section-title">할인</h3>
                            <div className="form-row">
                                <div className="label-row">쿠폰</div>
                                <div className="input-group">
                                    <select
                                        value={selectedCoupon}
                                        onChange={(e) => setSelectedCoupon(e.target.value)}
                                    >
                                        <option value="">쿠폰을 선택해주세요</option>
                                        <option value="new">신규가입쿠폰 (20% 할인)</option>
                                    </select>
                                </div>
                                <div className="desc">보유 쿠폰 1장</div>
                            </div>
                            <div className="form-row">
                                <div className="label-row">적립금</div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        value={pointsInputValue}
                                        onChange={handlePointsChange}
                                        placeholder="0"
                                    />
                                    <button
                                        type="button"
                                        className="btn-cancel"
                                        onClick={handleCancelPoints}
                                    >
                                        사용 취소
                                    </button>
                                </div>
                                <div className="desc">보유 3,000 / 사용가능 3,000</div>
                            </div>
                        </div>

                        {/* 결제 수단 */}
                        <div className="order-payment__section order-payment__methods">
                            <h3 className="order-payment__section-title">결제 수단</h3>
                            <div className="label-row">결제수단 선택</div>
                            <div className="method-list">
                                <div className="method-item active">카드 결제</div>
                                <div className="method-item">에스크로(실시간 계좌이체)</div>
                                <div className="method-item">에스크로(가상계좌)</div>
                                <div className="method-item">간편결제</div>
                            </div>
                            <label className="save-method">
                                <input type="checkbox" defaultChecked />
                                결제수단 다음에도 사용
                            </label>
                        </div>
                    </div>

                    {/* 오른쪽 영역 */}
                    <div className="order-payment__right">
                        {/* 결제 금액 */}
                        <div className="order-payment__summary-box">
                            <h4 className="box-title">결제 금액</h4>
                            <div className="kv-list">
                                <div className="kv-item">
                                    <span className="key">상품 금액</span>
                                    <span className="val">{originalProductPrice.toLocaleString()}원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">상품 할인</span>
                                    <span className="val">-{itemDiscounts.toLocaleString()}원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">쿠폰 할인</span>
                                    <span className="val">-{couponDiscountAmount.toLocaleString()}원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">적립금 사용</span>
                                    <span className="val">-{actualPointsToUse.toLocaleString()}원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">배송비</span>
                                    <span className="val">{shippingFee === 0 ? '무료 배송' : `${shippingFee.toLocaleString()}원`}</span>
                                </div>
                                <div className="kv-item total">
                                    <span className="key">총 결제 금액</span>
                                    <span className="val">{totalTotalPayment.toLocaleString()}원</span>
                                </div>
                            </div>
                        </div>

                        {/* 적립 혜택 */}
                        <div className="order-payment__summary-box">
                            <h4 className="box-title">적립 혜택</h4>
                            <div className="kv-list">
                                <div className="kv-item">
                                    <span className="key">기본 적립</span>
                                    <span className="val">{earnedPoints.toLocaleString()}원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">후기 적립</span>
                                    <span className="val">최대 2,500원</span>
                                </div>
                                <div className="kv-item">
                                    <span className="key">총 적립 금액</span>
                                    <span className="val">{(earnedPoints + 2500).toLocaleString()}원</span>
                                </div>
                            </div>
                        </div>

                        {/* 하단 결제 버튼 */}
                        <div className="order-payment__action">
                            <button
                                type="button"
                                className="btn-submit"
                                onClick={() => onPayment({
                                    originalProductPrice,
                                    itemDiscounts,
                                    couponDiscountAmount,
                                    actualPointsToUse,
                                    shippingFee,
                                    totalTotalPayment
                                })}
                            >
                                {totalTotalPayment.toLocaleString()}원 결제하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStep;
