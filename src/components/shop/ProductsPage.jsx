import '@/components/shop/Products.scss';
import ProductsMain from '@/components/shop/ProductsMain';

const ProductsPage = () => {
    return (
        <div className="product__wrap">
            <div className="product__inner">
                <ProductsMain />
            </div>
        </div>
    );
};

export default ProductsPage;
