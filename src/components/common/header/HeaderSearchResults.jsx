import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const HeaderSearchResults = ({ results, query, onClose }) => {
    return (
        <div className="header-search-results">
            <div className="header-search-results__inner">
                {results.length === 0 ? (
                    <p className="header-search-results__empty">
                        &quot;{query}&quot;에 대한 검색 결과가 없습니다.
                    </p>
                ) : (
                    <ul className="header-search-results__list">
                        {results.map((product) => (
                            <li key={product.id} className="header-search-results__item">
                                <Link
                                    to={`/shop/${product.id}`}
                                    className="header-search-results__link"
                                    onClick={onClose}
                                >
                                    <img
                                        className="header-search-results__thumb"
                                        src={product.images?.[0]}
                                        alt={product.name}
                                    />
                                    <span className="header-search-results__name">
                                        {product.name}
                                    </span>
                                    <IoArrowForward className="header-search-results__arrow" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default HeaderSearchResults;
