import React from 'react';

const ProductsCard = ({ products }) => {
    return (
        <div className="ProductsBox">
            <div className="ProductsBoxtop">
                <div className="ProductsMark"></div>
                <img src="" alt="" />
            </div>
            <div className="ProductsBoxbottom">
                <div className="Productstitle">
                    <h3 className="ProductsName"></h3>
                    <span className="description"></span>
                </div>
                <div className="Productsprice">
                    <span className="price"></span>
                    <div>
                        <div className="realprice">
                            <span className="discountRate"></span>
                            <span className="discountPrice"></span>
                        </div>
                        <div className="ProductsFavorites"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
