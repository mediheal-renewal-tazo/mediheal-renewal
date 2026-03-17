import React from 'react';
import './order-complete.scss';

const dummyOrderData = [
    {
        id: 'o1',
        name: '마데카소사이드 흔적 토너패드 100매',
        quantity: 1,
        shippingFee: '무료배송',
        discount: 5400,
        totalPrice: 20400,
        thumbnail: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="%23ffffff"/><rect y="5" width="5" height="5" fill="%23ffffff"/></svg>',
    },
    {
        id: 'o2',
        name: '티트리 에센셜 마스크 진정 수분 10매',
        quantity: 1,
        shippingFee: '무료배송',
        discount: 8100,
        totalPrice: 11900,
        thumbnail: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="%23ffffff"/><rect y="5" width="5" height="5" fill="%23ffffff"/></svg>',
    },
];

const OrderComplete = ({ orderItems = [], orderSummary, onGoDetail }) => {
    // orderSummary가 없는 경우(직접 진입 등)를 대비한 기본값
    const {
        originalProductPrice = 0,
        itemDiscounts = 0,
        couponDiscountAmount = 0,
        actualPointsToUse = 0,
        shippingFee = 0,
        totalTotalPayment = 0
    } = orderSummary || {};

    const basePriceTotal = originalProductPrice - itemDiscounts; // 전체 상품 합계 (상품할인 적용 후)
    const totalGlobalDiscount = couponDiscountAmount + actualPointsToUse; // 쿠폰 + 적립금

    return (
        <div className="order-complete">
            <div className="inner">
                {/* 상단 타이틀 영역 */}
                <div className="order-complete__header">
                    <h2 className="order-complete__title">주문 완료</h2>
                    <p className="order-complete__subtitle">3/26(목) 도착 예정입니다</p>
                </div>

                {/* 주문 상품 리스트 영역 */}
                <div className="order-complete__list">
                    <div className="order-complete__list-head">
                        <div className="order-complete__col order-complete__col--info">
                            <span className="order-complete__info-head">제품</span>
                        </div>
                        <div className="order-complete__col order-complete__col--qty">수량</div>
                        <div className="order-complete__col order-complete__col--shipping">배송비</div>
                        <div className="order-complete__col order-complete__col--discount">할인 금액</div>
                        <div className="order-complete__col order-complete__col--total">결제 금액</div>
                    </div>

                    <div className="order-complete__list-body">
                        {orderItems.map((item) => {
                            const pName = item.product?.name || '';
                            const pThumb = item.thumbnail || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="5" height="5" fill="%23f0f0f0"/><rect x="5" y="5" width="5" height="5" fill="%23f0f0f0"/><rect x="5" width="5" height="5" fill="%23ffffff"/><rect y="5" width="5" height="5" fill="%23ffffff"/></svg>';
                            const pQty = item.quantity || 1;
                            const pPrice = item.product?.price || 0;
                            const pItemDiscount = (item.product?.discount || 0) * pQty;

                            const pBasePrice = (pPrice * pQty) - pItemDiscount;

                            // 전역 할인(쿠폰, 적립금)을 상품 가격 비율에 맞춰 안분 계산 (가장 합리적인 방식)
                            // 단일 품목일 경우 100% 적용됨
                            const shareRatio = basePriceTotal > 0 ? pBasePrice / basePriceTotal : 0;
                            const pGlobalDiscount = Math.floor(totalGlobalDiscount * shareRatio);

                            // 최종 할인 금액 = 상품 자체 할인 + 쿠폰/적립금 안분액
                            const pTotalDiscount = pItemDiscount + pGlobalDiscount;
                            const pFinalTotal = pBasePrice - pGlobalDiscount;

                            const pShipping = pBasePrice >= 20000 ? '무료배송' : '3,000원';

                            return (
                                <div className="order-complete__row" key={item.id}>
                                    <div className="order-complete__col order-complete__col--info">
                                        <div className="order-complete__product">
                                            <div
                                                className="order-complete__thumb"
                                                style={{ backgroundImage: `url('${pThumb}')` }}
                                            />
                                            <span className="order-complete__name">{pName}</span>
                                        </div>
                                    </div>
                                    <div className="order-complete__col order-complete__col--qty">
                                        {pQty}
                                    </div>
                                    <div className="order-complete__col order-complete__col--shipping">
                                        {pShipping}
                                    </div>
                                    <div className="order-complete__col order-complete__col--discount">
                                        {pTotalDiscount.toLocaleString()}
                                    </div>
                                    <div className="order-complete__col order-complete__col--total">
                                        <strong>{pFinalTotal.toLocaleString()}</strong>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 하단 최종 결제금액 영역 */}
                <div className="order-complete__summary">
                    <span className="order-complete__summary-title">최종 결제금액</span>
                    <span className="order-complete__summary-val">
                        {totalTotalPayment.toLocaleString()}<span className="order-complete__summary-unit">원</span>
                    </span>
                </div>

                {/* 최하단 버튼 */}
                <div className="order-complete__actions">
                    <button
                        type="button"
                        className="order-complete__btn"
                        onClick={onGoDetail}
                    >
                        주문 상세보기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;
