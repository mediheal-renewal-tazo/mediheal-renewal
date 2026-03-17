import { useMemo, useState } from 'react';
import ProductsCard from '@/pages/shop/ProductsList';
import productsData from '@/data/productsData';
import ProductsPagination from '@/components/ProductsPagination';

const ProductsMain = () => {
    const [sortType, setSortType] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const itemsPerPage = 16;

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') {
            return productsData;
        }

        return productsData.filter((product) => product.category === selectedCategory);
    }, [selectedCategory]);

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

    const handleChangeSort = (e) => {
        setSortType(e.target.value);
        setCurrentPage(1);
    };

    const handleChangeCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="product__main">
            <div className="product__main-top">
                <span>{sortedProducts.length}개의 상품</span>

                <div className="product__filter">
                    <button onClick={() => handleChangeCategory('all')}>전체</button>
                    <button onClick={() => handleChangeCategory('mask')}>마스크</button>
                    <button onClick={() => handleChangeCategory('pad')}>패드</button>
                    <button onClick={() => handleChangeCategory('suncare')}>선케어</button>
                </div>

                <div className="product__sort">
                    <label htmlFor="sort" className="product__sort-label">
                        정렬
                    </label>
                    <select
                        id="sort"
                        className="product__sort-select"
                        value={sortType}
                        onChange={handleChangeSort}
                    >
                        <option value="new">신상품</option>
                        <option value="name">상품명</option>
                        <option value="lowPrice">낮은 가격</option>
                        <option value="highPrice">높은 가격</option>
                        <option value="brand">제조사</option>
                        <option value="popular">인기상품</option>
                        <option value="review">사용후기</option>
                    </select>
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
