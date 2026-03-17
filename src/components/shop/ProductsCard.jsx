const ProductsCard = ({ product }) => {
    return (
        <div className="ProductsBox">
            <div className="ProductsBoxtop">
                <div className="ProductsMark"></div>
                <img src={product.images?.[0]} alt={product.name} />
            </div>

            <div className="ProductsBoxbottom">
                <div className="Productstitle">
                    <h3 className="ProductsName">{product.name}</h3>
                    <span className="description">{product.description}</span>
                </div>

                <div className="Productsprice">
                    <span className="price">{product.price?.toLocaleString()}원</span>

                    <div>
                        <div className="realprice">
                            <span className="discountRate">{product.discountRate}%</span>
                            <span className="discountPrice">
                                {product.discountPrice?.toLocaleString()}원
                            </span>
                        </div>

                        <div className="ProductsFavorites">{product.reviewCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
