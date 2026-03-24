import React from 'react';
import { useParams } from 'react-router-dom';
import productsDetailData from '@/data/productsDetailData';

const ShopDetail__Essentialinfo = () => {
    const { id } = useParams();

    const detailProduct = productsDetailData.find((item) => item.id === id);

    if (!detailProduct) {
        return (
            <section className="product-info">
                <h2 className="product-info__title">상품필수 정보</h2>
                <p>상품 정보가 없습니다.</p>
            </section>
        );
    }

    return (
        <section className="product-info">
            <h2 className="product-info__title">상품필수 정보</h2>

            <table className="product-info__table">
                <tbody>
                    <tr>
                        <th scope="row">내용물의 용량 또는 중량</th>
                        <td>{detailProduct.volume}</td>
                    </tr>

                    <tr>
                        <th scope="row">제품 주요사양</th>
                        <td>{detailProduct.spec}</td>
                    </tr>

                    <tr>
                        <th scope="row">사용방법</th>
                        <td>{detailProduct.usage}</td>
                    </tr>

                    <tr>
                        <th scope="row">사용기한(또는 개봉 후 사용기간)</th>
                        <td>{detailProduct.expiry}</td>
                    </tr>

                    <tr>
                        <th scope="row">
                            제조국 / 화장품책임판매업자 및 맞춤형 화장품판매업자 / 화장품제조업자
                        </th>
                        <td>{detailProduct.manufacturer}</td>
                    </tr>

                    <tr>
                        <th scope="row">화장품법에 따라 기재해야 하는 모든 성분</th>
                        <td>{detailProduct.ingredients}</td>
                    </tr>

                    <tr>
                        <th scope="row">기능성 화장품 식품의약품안전처 심사필여부</th>
                        <td>{detailProduct.functional}</td>
                    </tr>

                    <tr>
                        <th scope="row">사용 시 주의사항</th>
                        <td>{detailProduct.caution}</td>
                    </tr>

                    <tr>
                        <th scope="row">품질보증기준</th>
                        <td>{detailProduct.warranty}</td>
                    </tr>

                    <tr>
                        <th scope="row">소비자상담 전화번호</th>
                        <td>{detailProduct.cs}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ShopDetail__Essentialinfo;
