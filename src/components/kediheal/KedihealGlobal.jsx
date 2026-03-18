import React, { useState } from 'react';

const KedihealGlobal = () => {
    const [hoveredCity, setHoveredCity] = useState('LOS ANGELES');

    const globalCities = [
        {
            id: 'SEOUL',
            kr: '서울',
            en: 'SEOUL',
            stat: '25K',
            desc: ['K-beauty at its core.', '서울 매장 확인하기'],
        },
        {
            id: 'LOS ANGELES',
            kr: '로스앤젤레스',
            en: 'LOS ANGELES',
            stat: '9K',
            desc: ['Trend-led beauty.', '로스앤젤레스 매장 확인하기'],
        },
        {
            id: 'TOKYO',
            kr: '도쿄',
            en: 'TOKYO',
            stat: '12K',
            desc: ['Precise daily skincare.', '도쿄 매장 확인하기'],
        },
        {
            id: 'SHANGHAI',
            kr: '상하이',
            en: 'SHANGHAI',
            stat: '18K',
            desc: ['Fast-moving beauty culture.', '상하이 매장 확인하기'],
        },
        {
            id: 'DUBAI',
            kr: '두바이',
            en: 'DUBAI',
            stat: '6K',
            desc: ['Premium beauty selection.', '두바이 매장 확인하기'],
        },
        {
            id: 'SINGAPORE',
            kr: '싱가포르',
            en: 'SINGAPORE',
            stat: '5K',
            desc: ['Everyday skincare hub.', '싱가포르 매장 확인하기'],
        },
    ];

    return (
        <section className="kediheal__section kediheal__section--global">
            <div className="kediheal__global-inner">
                <div className="kediheal__global-header">
                    <h2 className="kediheal__global-main-title">전 세계에서 만나는 메디힐</h2>
                    <p className="kediheal__global-main-desc">
                        메디힐은 주요 6개국에서 공식 채널로 만나볼 수 있으며, 전 세계 누적 33억 장+
                        <br />
                        시트마스크와 3,200만 개+ 토너패드 판매로 신뢰받는 데일리 케어를 제안합니다.
                    </p>
                </div>

                <div className="kediheal__global-list">
                    {globalCities.map((city) => (
                        <div
                            key={city.id}
                            className={`kediheal__global-row ${hoveredCity === city.id ? 'is-active' : ''}`}
                            onMouseEnter={() => setHoveredCity(city.id)}
                        >
                            <div className="kediheal__global-city-name">
                                <span className="kediheal__global-name-kr">{city.kr}</span>
                                <span className="kediheal__global-name-en">{city.en}</span>
                                <span className="kediheal__global-stat">{city.stat}</span>
                            </div>
                            {hoveredCity === city.id && (
                                <div className="kediheal__global-city-desc">
                                    <div className="kediheal__global-desc-line">{city.desc[0]}</div>
                                    <div className="kediheal__global-desc-line">{city.desc[1]}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="kediheal__global-search">
                    <p className="kediheal__global-search-label">매장명으로 확인하기</p>
                    <form
                        className="kediheal__global-search-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            className="kediheal__global-search-input"
                            placeholder="올리브영"
                        />
                        <button type="submit" className="kediheal__global-search-btn">
                            찾기
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default KedihealGlobal;
