import { Link } from 'react-router-dom';
import Products__HeartButton from '@/components/shop/Products__HeartButton';

const ProductsCard = ({ product }) => {
    const targetIds = ['p070', 'p032', 'p085'];
    const isTarget = targetIds.includes(product.id);

    const originalPrice = product.price;
    const salePrice = product.discountPrice ?? product.price;
    const discountRate = product.discountRate;

    const CardContent = (
        <div className="Products__card-wrap">
            <div className="ProductsImage">
                <img src={product.images?.[0]} alt={product.name} />
                {product.best && <div className="ProductsMark">BEST</div>}
            </div>

            <div className="Productstext">
                <div className="Products__title">
                    <h3 className="Products__Name">{product.name}</h3>
                    <p className="Products__description">
                        {product.description?.trim() || '\u00A0'}
                    </p>
                </div>

                <div className="Products__priceBox">
                    {discountRate ? (
                        <div className="Products__priceBox2">
                            <p className="Products__price">
                                {originalPrice?.toLocaleString()}원
                            </p>

                            <div className="Products__realprice">
                                <span className="Products__discountRate">
                                    {discountRate}%
                                </span>

                                <span className="Products__discountPrice">
                                    {salePrice?.toLocaleString()}원
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="Products__realprice">
                            <span className="Products__discountPrice">
                                {originalPrice?.toLocaleString()}원
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="ProductsCard">
            {isTarget ? (
                <Link to={`/shop/${product.id}`} className="ProductsLink">
                    {CardContent}
                </Link>
            ) : (
                <div className="ProductsLink">{CardContent}</div>
            )}

            <div className="Products__heart">
                <Products__HeartButton />
            </div>
        </div>
    );
};

export default ProductsCard;