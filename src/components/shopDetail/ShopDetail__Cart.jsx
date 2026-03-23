import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';
import Npay_button from '@/assets/images/product_details/icon/Npay-button.png';
import minus from '@/assets/images/product_details/icon/icon_3.png';
import plus from '@/assets/images/product_details/icon/icon_4.png';
import right_arrow from '@/assets/images/product_details/icon/icon_5.png';

const ShopDetail__Cart = () => {
    const { id } = useParams();

    const product = productsData.find((item) => item.id === id);

    const [quantity, setQuantity] = useState(1);
    const [inputValue, setInputValue] = useState('1');

    useEffect(() => {
        setQuantity(1);
        setInputValue('1');
    }, [id]);

    if (!product) {
        return <div className="cartPanel">상품 없음</div>;
    }

    const unitPrice = product.discountPrice ?? product.price ?? 0;
    const totalPrice = unitPrice * quantity;

    const handleIncrease = () => {
        const next = quantity + 1;
        setQuantity(next);
        setInputValue(String(next));
    };

    const handleDecrease = () => {
        if (quantity <= 1) return;

        const next = quantity - 1;
        setQuantity(next);
        setInputValue(String(next));
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleInputBlur = () => {
        const parsed = parseInt(inputValue, 10);

        if (Number.isNaN(parsed) || parsed < 1) {
            setQuantity(1);
            setInputValue('1');
            return;
        }

        setQuantity(parsed);
        setInputValue(String(parsed));
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.currentTarget.blur();
        }
    };

    return (
        <div className="cartPanel">
            <div className="cartPanel__top">
                <div className="cartPanel__header">
                    <div className="cartPanel__titleBox">
                        <p className="cartPanel__description">
                            {product.description?.trim() || '\u00A0'}
                        </p>
                        <h3 className="cartPanel__title">{product.name}</h3>
                    </div>
                </div>

                <div className="cartPanel__meta">
                    <div className="cartPanel__priceBox">
                        <div className="cartPanel__originPrice">
                            {product.price?.toLocaleString()}원
                        </div>

                        <div className="cartPanel__sale">
                            {product.discountRate ? (
                                <span className="cartPanel__discount">
                                    {product.discountRate}%
                                </span>
                            ) : null}

                            <span className="cartPanel__finalPrice">
                                {(
                                    product.discountPrice ?? product.price
                                )?.toLocaleString()}
                                원
                            </span>
                        </div>

                        <div className="cartPanel__delivery">
                            <span>배송비</span>
                            <span>3,000원 (20,000원 이상 무료)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cartPanel__body">
                <span className="cartPanel__productName">
                        {product.name}
                </span>
                <div className="cartPanel__selected">
                        <div className="cartPanel__quantity">
                            <button
                                type="button"
                                className="cartPanel__quantityBtn"
                                onClick={handleDecrease}
                            >
                                <img src={minus} alt="수량 감소" />
                            </button>

                            <input
                                className="cartPanel__quantityInput"
                                type="number"
                                inputMode="numeric"
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onKeyDown={handleInputKeyDown}
                            />

                            <button
                                type="button"
                                className="cartPanel__quantityBtn"
                                onClick={handleIncrease}
                            >
                                <img src={plus} alt="수량 증가" />
                            </button>
                        </div>
                    <div className="cartPanel__selectedRight">
                        {(unitPrice * quantity).toLocaleString()}원
                    </div>
                </div>

                <div className="cartPanel__total">
                    <span>총 상품금액</span>
                    <strong>{totalPrice.toLocaleString()}원</strong>
                </div>

                <div className="cartPanel__actions">
                    <button type="button" className="cartPanel__cartBtn">
                        장바구니
                    </button>

                    <button type="button" className="cartPanel__buyBtn">
                        구매하기
                    </button>
                    <div className="cartPanel__npayInfo">
                        <span>
                           네이버ID로 간편구매
                            <br />
                            네이버페이
                        </span>
                        <p>이벤트 결제 최대혜택 10% 추가적립</p>
                    </div>
                    <button type="button" className="cartPanel__npayBtn">
                        <img src={Npay_button} alt="네이버페이 구매하기" />
                    </button>
                </div>
                
                <button type="button" className="cartPanel__kakao">
                    <span>카카오 채널 친구하고 15% 쿠폰받기</span>
                    <img
                        src={right_arrow}
                        alt="메디힐 카카오채널 추가하고 쿠폰받기"
                    />
                </button>
            </div>
        </div>
    );
};

export default ShopDetail__Cart;