import '@/pages/shop/Products.css';
import ProductsCard from '@/assets/components/shop/ProductsList';
import productsData from '@/data/productsData';
import ProductsPagination from '@/assets/components/shop/ProductsPagination';
import ProductFilter from '@/assets/components/ProductFilter';
import ProductsMain from '@/assets/components/ProductsMain';

const Products = () => {
    return (
        <div className="product__wrap">
            <div className="product__inner">
                <ProductFilter />
                <ProductsMain />
            </div>
        </div>
    );
};

export default Products;
