import { useEffect, useRef } from 'react';

const ShopDetail__graph = ({ ratingRows = [], topTwoStars = [] }) => {
    const containerRef = useRef(null);
    const fillRefs = useRef([]);

    useEffect(() => {
        const target = containerRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                fillRefs.current.forEach((fill, i) => {
                    if (!fill) return;
                    fill.style.height = entry.isIntersecting
                        ? ratingRows[i].percent + '%'
                        : '0%';
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [ratingRows]);

    return (
        <div className="ratingDistribution" ref={containerRef}>
            <div className="ratingDistribution-title">평점 비율</div>

            <div className="ratingDistribution-row">
                {ratingRows.map((item, i) => {
                    const isTop = topTwoStars.includes(item.star);

                    return (
                        <div className="ratingDistribution-item" key={item.star}>
                            <span
                                className={`ratingDistribution-percent ${!isTop ? 'is-zero' : ''}`}
                            >
                                {Math.round(item.percent)}%
                            </span>

                            <div className="ratingDistribution-bar">
                                <div
                                    className={`ratingDistribution-fill ${!isTop ? 'is-zero' : ''}`}
                                    ref={(el) => (fillRefs.current[i] = el)}
                                />
                            </div>

                            <div className="ratingDistributionName">{item.star}점</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ShopDetail__graph;
