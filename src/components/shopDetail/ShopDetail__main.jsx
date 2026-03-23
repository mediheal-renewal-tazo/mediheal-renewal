import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';
import productsDetailData from '@/data/productsDetailData';
import Products__HeartButton from '@/components/shop/Products__HeartButton';
import Npay_button from '@/assets/images/product_details/icon/Npay-button.png';
import minus from '@/assets/images/product_details/icon/icon_3.png';
import plus from '@/assets/images/product_details/icon/icon_4.png';
import right_arrow from '@/assets/images/product_details/icon/icon_5.png';
import star from '@/assets/images/product_details/icon/star.svg';

const ShopDetail__main = ({ moveToReview }) => {
    const { id } = useParams();

    const product = productsData.find((item) => item.id === id);
    const detailProduct = productsDetailData.find((item) => item.id === id);

    const [mainImage, setMainImage] = useState(product?.images?.[0] ?? '');
    const [quantity, setQuantity] = useState(1);
    const [inputValue, setInputValue] = useState('1');

    useEffect(() => {
        if (product?.images?.[0]) {
            setMainImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return <div>상품 없음</div>;
    }

    const thumbImages = [
        product.images?.[0],
        ...(product.sub_img1 ?? []),
        ...(product.sub_img2 ?? []),
    ].filter(Boolean);

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
        <div className="shopDetail__main">
            <div className="shopDetail__imgbox">
                <div className="main-img">
                    <img src={mainImage} alt={product.name} />
                </div>

                <div className="img-set">
                    {thumbImages.map((img, index) => (
                        <button
                            type="button"
                            key={`${product.id}-thumb-${index}`}
                            className="img-thumb"
                            onClick={() => setMainImage(img)}
                        >
                            <img src={img} alt={`${product.name}-${index + 1}`} />
                        </button>
                    ))}
                </div>
            </div>

            <div className="shopDetail__textbox">
                <div className="shopDetail__topBox">
                    <div className="shopDetail__textbox-top">
                        <div className="shopDetail__tagHeart">
                            <div className="shopDetail__target">
                                {(detailProduct?.target ?? []).map((item, index) => (
                                    <span key={`${id}-target-${index}`} className="chip">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <Products__HeartButton />
                        </div>

                        <div className="shopDetail__titleBox">
                            <p className="shopDetail__description">
                                {product.description?.trim() || '\u00A0'}
                            </p>
                            <h3 className="shopDetail__title">{product.name}</h3>
                        </div>
                    </div>

                    <div className="shopDetail__middle">
                        <div className="shopDetail__rating">
                            <img src={star} alt="별점" className="star-icon" />
                            <span className="rating-value">{(product.rating ?? 0).toFixed(1)}</span>
                            <button type="button" className="reviewBox" onClick={moveToReview}>
                                리뷰 {product.reviewCount ?? 0}개
                            </button>
                        </div>

                        <div className="shopDetail__priceBox">
                            <div className="shopDetail__mainprice">
                                {product.price?.toLocaleString()}원
                            </div>

                            <div className="shopDetail__price-sale">
                                {product.discountRate ? (
                                    <div className="discountRate">{product.discountRate}%</div>
                                ) : null}

                                <div className="discountPrice">
                                    {(product.discountPrice ?? product.price)?.toLocaleString()}원
                                </div>
                            </div>

                            <div className="delivery">
                                <span>배송비</span>
                                <span>3,000원 (20,000원 이상 구매 시 무료배송)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shopDetail__mainBox">
                    <div className="shopDetail__Selected">
                        <div className="shopDetail__Selected-left">
                            <span className="Selected_title">{product.name}</span>

                            <div className="shopDetail__Quantity">
                                <button
                                    type="button"
                                    className="Quantity_btn"
                                    onClick={handleDecrease}
                                >
                                    <img src={minus} alt="수량감소" />
                                </button>

                                <input
                                    className="Quantity_number"
                                    type="number"
                                    inputMode="numeric"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    onKeyDown={handleInputKeyDown}
                                />

                                <button
                                    type="button"
                                    className="Quantity_btn"
                                    onClick={handleIncrease}
                                >
                                    <img src={plus} alt="수량증가" />
                                </button>
                            </div>
                        </div>

                        <div className="shopDetail__Selected-right">
                            {(unitPrice * quantity).toLocaleString()}원
                        </div>
                    </div>

                    <div className="shopDetail__PaymentAmount">
                        <span className="PaymentAmount-text">총 상품금액</span>
                        <span className="PaymentAmount-total">
                            {totalPrice.toLocaleString()}원
                        </span>
                    </div>

                    <div className="shopDetail__button">
                        <button type="button" className="shopDetail__cart-button">
                            장바구니
                        </button>

                        <button type="button" className="shopDetail__Buy-button">
                            구매하기
                        </button>

                        <div className="Npay-info">
                            <span>
                                네이버ID로 간편구매
                                <br />
                                네이버페이
                            </span>
                            <p>이벤트 결제 최대혜택 10% 추가적립</p>
                        </div>

                        <button type="button" className="Npay-button">
                            <img src={Npay_button} alt="Npay구매하기 버튼" />
                        </button>
                    </div>

                    <button type="button" className="kakaocoupon">
                        <span>카카오 채널 친구하고 15% 쿠폰받기</span>
                        <img src={right_arrow} alt="메디힐 카카오채널 추가하고 쿠폰받기" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail__main;