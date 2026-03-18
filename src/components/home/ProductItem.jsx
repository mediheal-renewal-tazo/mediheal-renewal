const ProductItem = ({ className, ...item }) => {
    const { id, img, hoverImg, addr, title, dsc, contition, grade, benefit, num, sub, productName, price } = item;
    return (
        <div className={`main__productItem-${className}`}>
            {title && <p className={`main__productItem-${className}-title`}>{title}</p>}
            {dsc && <p className={`main__productItem-${className}-dsc`}>{dsc}</p>}
            {hoverImg ? (
                <div className="main__productItem-img-wrap">
                    <img className="main__productItem-img" src={img} alt="" />
                    <img className="main__productItem-img main__productItem-img--hover" src={hoverImg} alt="" />
                    {productName && <span className="main__productItem-name">{productName}</span>}
                    {price && <span className="main__productItem-price">{price}</span>}
                </div>
            ) : (
                <img src={img} alt="" />
            )}
            {contition && <p className={`main__productItem-${className}-contition`}>{contition}</p>}
            {grade && <p className={`main__productItem-${className}-grade`}>{grade}</p>}
            {benefit && <p className={`main__productItem-${className}-benefit`}>{benefit}</p>}
            <div className={`main__productItem-${className}-wrap`}>
                {num && <p className={`main__productItem-${className}-num`}>{num}</p>}
                {sub && <p className={`main__productItem-${className}-sub`}>{sub}</p>}
            </div>
        </div>
    );
};

export default ProductItem;
