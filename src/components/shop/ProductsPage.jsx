import '@/components/shop/Products.scss';
import ProductFilter from '@/components/shop/ProductFilter';
import ProductsMain from '@/components/shop/ProductsMain';

const ProductsPage = () => {
    return (
        <div className="product__wrap">
            <div className="product__inner">
                <ProductFilter />
                <ProductsMain />
            </div>
        </div>
    );
};

export default ProductsPage;
