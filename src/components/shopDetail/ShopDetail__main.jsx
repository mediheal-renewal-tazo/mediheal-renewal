import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';

const ShopDetail__main = () => {
    const { id } = useParams();

    const product = productsData.find((item) => item.id === id);

    const [mainImage, setMainImage] = useState(product?.images?.[0]);

    if (!product) {
        return <div>상품 없음</div>;
    }

    return (
        <div className="shopDetail__main">
            {/* 🔥 이미지 영역 */}
            <div className="shopDetail__imgbox">
                <div className="main-img">
                    <img src={mainImage} alt={product.name} />
                </div>

                <div className="img-set">
                    {product.images?.map((img, index) => (
                        <div key={index} onClick={() => setMainImage(img)}>
                            <img src={img} alt={`${product.name}-${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔥 텍스트 영역 */}
            <div className="shopDetail__textbox">
                <div className="shopDetail__textbox-top">
                    <div className="shopDetail__target"></div>
                </div>

                <div className="shopDetail__title">
                    <div className="name">{product.name}</div>
                    <div className="description">{product.description}</div>
                </div>

                <div className="shopDetail__middle">
                    <div className="shopDetail__reviewBox">
                        <div className="star">★★★★★</div>
                        <div className="review">리뷰 {product.reviewCount ?? 0}개</div>
                    </div>

                    <div className="shopDetail__priceBox">
                        <div className="price">{product.price?.toLocaleString()}원</div>

                        <div>
                            <div className="discountRate">{product.discountRate}%</div>
                            <div className="discountPrice">
                                {product.discountPrice?.toLocaleString()}원
                            </div>
                        </div>

                        <div className="delivery">
                            <span>배송비</span>
                            <span>3,000원 (20,000원 이상 구매시 무료배송)</span>
                        </div>
                    </div>
                </div>

                <div className="shopDetail__bottom">
                    <div className="shopDetail__cart">장바구니</div>
                    <div className="shopDetail__Buy">구매하기</div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail__main;
