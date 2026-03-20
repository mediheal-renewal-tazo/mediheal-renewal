import { useEffect, useMemo, useRef, useState } from 'react';
import ProductFilter from '@/components/shop/ProductFilter';
import ProductsCard from '@/components/shop/ProductsCard';
import ProductsPagination from '@/components/shop/ProductsPagination';
import productsData from '@/data/productsData';
import arrowdown from '@/assets/images/products/card/arrow_down.svg';
import arrowup from '@/assets/images/products/card/arrow_up.svg';

const ProductsMain = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortType, setSortType] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const listTopRef = useRef(null);
    const isFirstRender = useRef(true);
    const selectRef = useRef(null);
    const itemsPerPage = 16;
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        listTopRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [currentPage]);

    const toggleFilter = (value) => {
        setSelectedFilters((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleChangeCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleChangeSort = (e) => {
        setSortType(e.target.value);
        setCurrentPage(1);
        setIsOpen(false);
    };

    const handleArrayClick = () => {
        if (!selectRef.current) return;
        selectRef.current.focus();
        selectRef.current.click();
        setIsOpen(true);
    };

    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // 1단계: category
        if (selectedCategory === 'new') {
            result = [...result].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (selectedCategory === 'only') {
            result = result.filter((product) => product.only === 'yes');
        } else if (selectedCategory !== 'all') {
            result = result.filter((product) => product.category === selectedCategory);
        }

        // 2단계: filter-floor
        if (selectedFilters.length > 0) {
            result = result.filter((product) => {
                const functionList = product.function ?? [];
                const ingredient = product.ingredient ?? '';

                return selectedFilters.every((filter) => {
                    return functionList.includes(filter) || ingredient === filter;
                });
            });
        }

        return result;
    }, [selectedCategory, selectedFilters]);

    const sortedProducts = useMemo(() => {
        const copiedProducts = [...filteredProducts];

        switch (sortType) {
            case 'new':
                return copiedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            case 'name':
                return copiedProducts.sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));

            case 'lowPrice':
                return copiedProducts.sort(
                    (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
                );

            case 'highPrice':
                return copiedProducts.sort(
                    (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
                );

            case 'brand':
                return copiedProducts.sort((a, b) =>
                    (a.brand ?? '').localeCompare(b.brand ?? '', 'ko-KR')
                );

            case 'popular':
                return copiedProducts.sort((a, b) => (b.salesCount ?? 0) - (a.salesCount ?? 0));

            case 'review':
                return copiedProducts.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));

            default:
                return copiedProducts;
        }
    }, [filteredProducts, sortType]);

    const totalPage = Math.ceil(sortedProducts.length / itemsPerPage);

    const currentProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedProducts.slice(startIndex, endIndex);
    }, [sortedProducts, currentPage]);

    return (
        <div className="product__main">
            <ProductFilter
                selectedCategory={selectedCategory}
                onCategoryChange={handleChangeCategory}
                selectedFilters={selectedFilters}
                toggleFilter={toggleFilter}
            />

            <div className="product__main-top" ref={listTopRef}>
                <span className="product__total">{sortedProducts.length}개의 상품</span>

                <div
                    className={`product__array ${isOpen ? 'is-open' : ''}`}
                    onClick={handleArrayClick}
                >
                    <select
                        ref={selectRef}
                        id="sort"
                        className="product__sort-select"
                        value={sortType}
                        onChange={handleChangeSort}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setIsOpen(false)}
                    >
                        <option value="new">신상품</option>
                        <option value="name">상품명</option>
                        <option value="lowPrice">낮은 가격</option>
                        <option value="highPrice">높은 가격</option>
                        <option value="popular">인기상품</option>
                        <option value="review">사용후기</option>
                    </select>

                    <img
                        src={isOpen ? arrowup : arrowdown}
                        alt=""
                        className="product__array-icon"
                    />
                </div>
            </div>

            <div className="product__main-grid">
                {currentProducts.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </div>

            <ProductsPagination
                currentPage={currentPage}
                totalPage={totalPage}
                limit={3}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ProductsMain;
