const ShopDetail__Tap = ({ reviewCount }) => {
    return (
        <div className="shopDetail-tap">
            <div>
                <span>상세정보</span>
            </div>
            <div>
                <span>리뷰 ({reviewCount})</span>
            </div>
            <div>
                <span>구매안내</span>
            </div>
        </div>
    );
};
