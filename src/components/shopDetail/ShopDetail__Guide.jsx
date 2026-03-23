import React from 'react';

const ShopDetail__Guide = () => {
    return (
        <div className="ShopDetail__GuideBox">
            <div className="ProductPayment-info">
                <div className="ShopDetail__Guide-title">상품 결제 정보</div>
                <div className="ShopDetail__Guide-detail">
                    <p>
                        고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
                        확인과정에서 도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이
                        아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
                    </p>
                    <p>
                        무통장 입금은 상품 구매 대금을 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운
                        은행에서 직접 입금하시면 됩니다.<br />
                        주문 시 입력한 입금자명과 실제 입금자의 성명이 반드시 일치하여야 하며,
                        7일 이내로 입금하셔야 하며 입금되지 않은 주문은 자동 취소됩니다.
                    </p>
                    
                    <span>
                        비정상적 대량 구매 또는 재판매 목적의 주문은 사전 안내 후 취소될 수 있습니다.
                    </span>
                </div>
            </div>

            <div className="Shipping-info">
                <div className="ShopDetail__Guide-title">배송정보</div>
                <div className="ShopDetail__Guide-detail">
                    <div className="Guide-detail-text">
                        <p>배송 방법: 택배</p>
                        <p>배송 지역: 전국지역</p>
                        <p>배송 비용: 3,000원</p>
                        <p>배송 기간: 3일~7일</p>
                        <p>
                           배송 안내: 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.
                        </p>
                        <p>
                            고객님께서 주문하신 상품은 입금 확인 후 배송해 드립니다. 다만,
                            상품 종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="ExchangeRefund-info">
                <div className="ShopDetail__Guide-title">교환 및 반품정보</div>
                <div className="ExchangeRefund-detail">
                    <div className="if__possible">
                        <span className="if__possible-title">교환 및 반품이 가능한 경우</span>
                        <div className="if__possible-detail">
                            <p>
                                - 상품을 공급받으신 날로부터 7일 이내. 단, 가전제품의 경우 포장을
                                개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이
                                불가능합니다.
                            </p>
                            <p>
                                - 공급받으신 상품 및 용량의 내용이 표시·광고 내용과 다르거나 다르게
                                이행된 경우에는 공급받은 날로부터 3일 이내, 그 사실을 알게 된 날로부터
                                30일 이내
                            </p>
                        </div>
                    </div>

                    <div className="if__impossible">
                        <span className="if__impossible-title">교환 및 반품이 불가능한 경우</span>
                        <div className="if__impossible-detail">
                            <p>
                                - 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우. 단, 상품의
                                내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
                            </p>
                            <p>
                                - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
                            </p>
                            <p>
                                (예: 가전제품, 식품, 음반 등. 단 액정화면이 부착된 노트북, LCD모니터,
                                디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에 따릅니다.)
                            </p>
                            <p>
                                - 고객의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우.
                                단, 화장품 등의 경우 시용제품을 제공한 경우에 한합니다.
                            </p>
                            <p>
                                - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우
                            </p>
                            <p>
                                - 복제가 가능한 상품 등의 포장을 훼손한 경우
                                (자세한 내용은 고객만족센터 1:1 E-MAIL 상담을 이용해 주시기 바랍니다.)
                            </p>
                        </div>
                    </div>

                    <p>
                        * 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서
                        부담하셔야 합니다. (색상 교환, 사이즈 교환 등 포함)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail__Guide;