import { useEffect, useMemo, useRef, useState } from 'react';
import ProductFilter from '@/components/shop/ProductFilter';
import ProductsCard from '@/components/shop/ProductsCard';
import ProductsPagination from '@/components/shop/ProductsPagination';
import SortSelect from '@/components/shop/SortSelect';
import { productSortOptions } from '@/data/sortOptions';
import productsData from '@/data/productsData';

// best 제품을 항상 앞으로 정렬하는 헬퍼
const sortWithBestFirst = (arr) => [
    ...arr.filter((p) => p.best === true),
    ...arr.filter((p) => p.best !== true),
];

const ProductsMain = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortType, setSortType] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);

    const listTopRef = useRef(null);
    const isFirstRender = useRef(true);
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
        setCurrentPage(1);
    };

    const handleChangeCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleChangeSort = (e) => {
        setSortType(e.target.value);
        setCurrentPage(1);
    };

    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // 1단계: category
        if (selectedCategory === 'new') {
            result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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

        // 3단계: best 제품 항상 맨 앞
        return sortWithBestFirst(result);
    }, [selectedCategory, selectedFilters]);

    const sortedProducts = useMemo(() => {
        const best = filteredProducts.filter((p) => p.best === true);
        const rest = filteredProducts.filter((p) => p.best !== true);

        const sortFn = (arr) => {
            const copied = [...arr];

            switch (sortType) {
                case 'new':
                    return copied.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                case 'name':
                    return copied.sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
                case 'lowPrice':
                    return copied.sort(
                        (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
                    );
                case 'highPrice':
                    return copied.sort(
                        (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
                    );
                case 'brand':
                    return copied.sort((a, b) =>
                        (a.brand ?? '').localeCompare(b.brand ?? '', 'ko-KR')
                    );
                case 'popular':
                    return copied.sort((a, b) => (b.salesCount ?? 0) - (a.salesCount ?? 0));
                case 'review':
                    return copied.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
                default:
                    return copied;
            }
        };

        return [...sortFn(best), ...sortFn(rest)];
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

                <SortSelect
                    value={sortType}
                    onChange={handleChangeSort}
                    options={productSortOptions}
                />
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