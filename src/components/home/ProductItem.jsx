const ProductItem = ({ className, ...item }) => {
    const { id, img, addr, title, dsc, contition, grade, benefit, num, sub } = item;
    return (
        <div className={`main__productItem-${className}`}>
            {title && <p className={`main__productItem-${className}-title`}>{title}</p>}
            {dsc && <p className={`main__productItem-${className}-dsc`}>{dsc}</p>}
            <img src={img} alt={img} />
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
