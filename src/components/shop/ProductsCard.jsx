import { useEffect, useState } from 'react';
import lineheart from '@/assets/images/products/card/line_heart.svg';
import fullheart from '@/assets/images/products/card/full_heart.svg';


const ProductsCard = ({ product }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsLiked((prev) => !prev);

        setIsAnimating(false);
        requestAnimationFrame(() => {
            setIsAnimating(true);
        });

        setTimeout(() => {
            setIsAnimating(false);
        }, 200);
    };
    return (
        <div className="ProductsCard">
            <div className="ProductsImage">
        <img src={product.images?.[0]} alt={product.name} />
        <div className="ProductsMark"></div>
    </div>

    <div className="Productstext">
        <div className="Productstitle">
            <h3 className="ProductsName">{product.name}</h3>
            <p className="description">{product.description?.trim() || '\u00A0'}</p>
        </div>

        <div className="Productsprice">
            <span className="price">{product.price?.toLocaleString()}원</span>

            <div>
                <div className="realprice">
                    {product.discountRate && (
                        <span className="discountRate">{product.discountRate}%</span>
                    )}
                    <span className="discountPrice">
                        {(product.discountPrice ?? product.price)?.toLocaleString()}원
                    </span>
                </div>
                <button type="button" className={`ProductsFavorites ${isAnimating ? 'is-animating' : ''}`} onClick={handleClick}>
                   <img src={isLiked ? fullheart : lineheart} alt="찜하기" className="heart-icon"/>
        </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default ProductsCard;
