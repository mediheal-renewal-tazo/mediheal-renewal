import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';
import ShopDetail__main from '@/components/shopDetail/ShopDetail__main';
import ShopDetail__Tap from '@/components/shopDetail/ShopDetail__Tap';
import ShopDetail__info from '@/components/shopDetail/ShopDetail__info';
import ShopDetail__review from '@/components/shopDetail/ShopDetail__review';
import ShopDetail__Guide from '@/components/shopDetail/ShopDetail__Guide';
import '@/components/shopDetail/ShopDetail.scss';

const ShopDetail__page = () => {
    const { id } = useParams();
    const product = productsData.find((item) => item.id === id);

    const [activeTab, setActiveTab] = useState('info');

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="wrap">
            <div className="Products__detail-inner">
                <ShopDetail__main />

                <ShopDetail__Tap
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    reviewCount={product.reviewCount ?? 0}
                />

                {activeTab === 'info' && <ShopDetail__info />}
                {activeTab === 'review' && <ShopDetail__review />}
                {activeTab === 'guide' && <ShopDetail__Guide />}
            </div>
        </div>
    );
};

export default ShopDetail__page;
