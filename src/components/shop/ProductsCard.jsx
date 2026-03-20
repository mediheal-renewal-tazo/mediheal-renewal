import { Link } from 'react-router-dom';
import Products__HeartButton from '@/components/shop/Products__HeartButton';

const ProductsCard = ({ product }) => {
    const isTarget = product.id === 'p070';

    const originalPrice = product.price;
    const salePrice = product.discountPrice ?? product.price;
    const discountRate = product.discountRate;

    const Content = (
        <div className="Products__Card">
            <div className="ProductsImage">
                <img src={product.images?.[0]} alt={product.name} />
                {product.best && <div className="ProductsMark">BEST</div>}
            </div>

            <div className="Productstext">
                <h3 className="ProductsName">{product.name}</h3>
                <p className="description">{product.description?.trim() || '\u00A0'}</p>
                <p className="price">{originalPrice?.toLocaleString()}원</p>
            </div>
        </div>
    );

    return (
        <div className="ProductsCard">
            {isTarget ? (
                <Link to={`/shop/${product.id}`} className="ProductsLink">
                    {Content}
                </Link>
            ) : (
                <div className="ProductsLink">{Content}</div>
            )}

            <div className="ProductsBottom">
                <div className="realprice">
                    {discountRate ? <span className="discountRate">{discountRate}%</span> : null}
                    <span className="discountPrice">{salePrice?.toLocaleString()}원</span>
                </div>

                <Products__HeartButton />
            </div>
        </div>
    );
};

export default ProductsCard;
