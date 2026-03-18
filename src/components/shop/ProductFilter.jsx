import { categoryList } from '@/data/productsFilterData';
import iconx from '@/assets/images/products/card/icon_x.svg';

const ProductFilter = ({
    selectedCategory = 'all',
    onCategoryChange = () => {},
    selectedFilters = [],
    toggleFilter = () => {},
}) => {
    return (
        <div className="product__filter">
            <div className="product__category">
                <ul>
                    {categoryList.map((item) => (
                        <li
                            key={item.value}
                            className={selectedCategory === item.value ? 'is-active' : ''}
                            onClick={() => onCategoryChange(item.value)}
                        >
                            <img src={item.icon} alt={item.label} />
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>

                <div className="product__filter-floor">
                    <div className="products__function">
                        <div className="filter-title">기능별</div>

                        <ul>
                            <li
                                className={selectedFilters.includes('진정') ? 'is-active' : ''}
                                onClick={() => toggleFilter('진정')}
                            >
                                진정
                            </li>
                            <li
                                className={selectedFilters.includes('수분보습') ? 'is-active' : ''}
                                onClick={() => toggleFilter('수분보습')}
                            >
                                수분보습
                            </li>
                            <li
                                className={selectedFilters.includes('흔적') ? 'is-active' : ''}
                                onClick={() => toggleFilter('흔적')}
                            >
                                흔적
                            </li>
                            <li
                                className={selectedFilters.includes('모공') ? 'is-active' : ''}
                                onClick={() => toggleFilter('모공')}
                            >
                                모공
                            </li>
                            <li
                                className={selectedFilters.includes('미백') ? 'is-active' : ''}
                                onClick={() => toggleFilter('미백')}
                            >
                                미백
                            </li>
                            <li
                                className={selectedFilters.includes('영양') ? 'is-active' : ''}
                                onClick={() => toggleFilter('영양')}
                            >
                                영양
                            </li>
                            <li
                                className={selectedFilters.includes('자외선차단') ? 'is-active' : ''}
                                onClick={() => toggleFilter('자외선차단')}
                            >
                                자외선차단
                            </li>
                            <li
                                className={selectedFilters.includes('레티놀') ? 'is-active' : ''}
                                onClick={() => toggleFilter('레티놀')}
                            >
                                레티놀
                            </li>
                        </ul>
                    </div>

                    <div className="products__line">
                        <div className="filter-title">라인별</div>

                        <ul>
                            <li
                                className={selectedFilters.includes('티트리') ? 'is-active' : ''}
                                onClick={() => toggleFilter('티트리')}
                            >
                                티트리
                            </li>
                            <li
                                className={selectedFilters.includes('콜라겐') ? 'is-active' : ''}
                                onClick={() => toggleFilter('콜라겐')}
                            >
                                콜라겐
                            </li>
                            <li
                                className={selectedFilters.includes('비타민') ? 'is-active' : ''}
                                onClick={() => toggleFilter('비타민')}
                            >
                                비타민
                            </li>
                            <li
                                className={selectedFilters.includes('마데카소사이드') ? 'is-active' : ''}
                                onClick={() => toggleFilter('마데카소사이드')}
                            >
                                마데카소사이드
                            </li>
                            <li
                                className={selectedFilters.includes('레티놀') ? 'is-active' : ''}
                                onClick={() => toggleFilter('레티놀')}
                            >
                                레티놀
                            </li>
                            <li
                                className={selectedFilters.includes('워터마이드') ? 'is-active' : ''}
                                onClick={() => toggleFilter('워터마이드')}
                            >
                                워터마이드
                            </li>
                        </ul>
                    </div>

                    <div className="product__selected-chip">
                        {selectedFilters.map((filter) => (
                            <span
                                key={filter}
                                className="chip"
                                onClick={() => toggleFilter(filter)}
                            >
                                <span className="chip__label">{filter}</span>
                                <img src={iconx} alt="" className="chip__close" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;