import React from 'react';
import ShopDetail__Tap from './ShopDetail__Tap';

const ShopDetail__page = () => {
    return (
        <div className="wrap">
            <div className="Products__detail-inner">
                <ShopDetail__Tap reviewCount={product.reviewCount} />
            </div>
        </div>
    );
};

export default ShopDetail__page;
