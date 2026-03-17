import { useState } from 'react';

const ProductFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const toggleFilter = (value) => {
        setSelectedFilters((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="product__filter">
            <div className="product__category">
                <ul>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon1.png" alt="" />
                        전제품
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon2.png" alt="" />
                        NEW
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon3.png" alt="" />
                        ONLY
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon4.png" alt="" />
                        마스크팩
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon5.png" alt="" />
                        패드
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon6.png" alt="" />
                        스킨케어
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon7.png" alt="" />
                        클렌징
                    </li>
                    <li>
                        <img src="@/assets/images/products/category/ma_icon8.png" alt="" />
                        선케어
                    </li>
                </ul>
                <div className="product__filter-floor">
                    <div className="products__function">
                        <ul>
                            <li onClick={() => toggleFilter('진정')}>진정</li>
                            <li onClick={() => toggleFilter('수분보습')}>수분보습</li>
                            <li onClick={() => toggleFilter('탄력')}>탄력</li>
                        </ul>
                    </div>

                    <div className="products__line">
                        <ul>
                            <li onClick={() => toggleFilter('티트리')}>티트리</li>
                            <li onClick={() => toggleFilter('콜라겐')}>콜라겐</li>
                        </ul>
                    </div>

                    <div className="product__selected-chip">
                        {selectedFilters.map((filter) => (
                            <span
                                key={filter}
                                className="chip"
                                onClick={() => toggleFilter(filter)}
                            >
                                {filter} ✕
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
