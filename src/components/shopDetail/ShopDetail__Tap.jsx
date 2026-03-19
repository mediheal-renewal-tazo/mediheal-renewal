const ShopDetail__Tap = ({ activeTab, setActiveTab, reviewCount }) => {
    return (
        <div className="shopDetail-tap">
            <div
                className={activeTab === 'info' ? 'active' : ''}
                onClick={() => setActiveTab('info')}
            >
                <span>상세정보</span>
            </div>

            <div
                className={activeTab === 'review' ? 'active' : ''}
                onClick={() => setActiveTab('review')}
            >
                <span>리뷰 ({reviewCount})</span>
            </div>

            <div
                className={activeTab === 'guide' ? 'active' : ''}
                onClick={() => setActiveTab('guide')}
            >
                <span>구매안내</span>
            </div>
        </div>
    );
};

export default ShopDetail__Tap;
