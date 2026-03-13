import { useEffect, useRef, useState } from 'react';
import './hero.scss';
import hero00 from '@/assets/images/home/hero00_fin.png';
import hero01 from '@/assets/images/home/hero01_fin.png';
import hero02 from '@/assets/images/home/hero02_fin.png';
import hero03 from '@/assets/images/home/hero03_fin.png';
import hero04 from '@/assets/images/home/hero04_fin.png';
import hero05 from '@/assets/images/home/hero05_fin.png';
import hero06 from '@/assets/images/home/hero06_fin.png';
import hero07 from '@/assets/images/home/hero07_fin.png';

const Hero = () => {
    const sectionRef = useRef(null);
    const mainDscRef = useRef(null);
    const frameRef = useRef(0);
    const [metrics, setMetrics] = useState({
        sectionHeight: 0,
        mainDscOffset: 0,
    });

    const rows = [
        ['WATER', 'DIPROPYLENE', 'GLYCOL'],
        ['GLYCERETH-26', 'NIACINAMIDE'],
        ['1,2-HEXANEDIOL', 'GLYCERIN', 'DIPHENYL'],
        ['DIMETHICONE', 'TRIETHYLHEXANOIN'],
        ['ROSMARINUS', 'HYDROGENATED'],
        ['HYDROXYACETOPHENONE', 'LECITHIN'],
        ['POLYGLYCERYL-10', 'OLEATE', 'CENTELLA'],
        ['ASIATICA', 'EXTRACT', '(1,001 PPM)'],
        ['DIPOTASSIUM', 'GLYCYRRHIZATE', 'SODIUM'],
        ['OCTYLDODECETH-16', 'CITRATE'],
        ['ALLANTOIN', 'CITRIC', 'MASTERY'],
        ['MATERIAL', 'FUNCTIONALITY'],
        ['MADECASSOSIDE (10.25 PPM)', 'EDTA'],
        ['POLYGLYCERYL-10', 'JUNIPERUS'],
        ['LAMINATION', 'ACID', 'DISODIUM'],
    ];

    useEffect(() => {
        const updateMetrics = () => {
            if (!sectionRef.current || !mainDscRef.current) {
                return;
            }

            const viewportHeight = window.innerHeight;
            const dscHeight = mainDscRef.current.offsetHeight;
            const topOffset = parseFloat(window.getComputedStyle(mainDscRef.current).top) || 0;
            const travelDistance = topOffset + dscHeight + 24;
            const sectionHeight = viewportHeight + travelDistance;
            const sectionTop = sectionRef.current.offsetTop;
            const scrollRange = Math.max(sectionHeight - viewportHeight, 1);
            const progress = Math.min(Math.max((window.scrollY - sectionTop) / scrollRange, 0), 1);

            setMetrics({
                sectionHeight,
                mainDscOffset: -travelDistance * progress,
            });
        };

        const scheduleUpdate = () => {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = window.requestAnimationFrame(updateMetrics);
        };

        updateMetrics();

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        let resizeObserver;
        if ('ResizeObserver' in window) {
            resizeObserver = new ResizeObserver(scheduleUpdate);
            resizeObserver.observe(mainDscRef.current);
        }

        return () => {
            cancelAnimationFrame(frameRef.current);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            resizeObserver?.disconnect();
        };
    }, []);

    return (
        <section
            className="hero"
            ref={sectionRef}
            style={{
                '--hero-section-height': `${metrics.sectionHeight || 0}px`,
                '--hero-main-dsc-offset': `${metrics.mainDscOffset}px`,
            }}
        >
            <div className="hero__sticky">
                <div className="hero__inner">
                    <span className="hero__main-dsc" ref={mainDscRef}>
                        <p>모든 피부를 위해</p>
                        <p>깊이 있는 피부 과학과 성분 연구에서 시작해</p>
                        <p>복잡한 더마케어에 쉬운 해답을 만듭니다</p>
                    </span>
                    <div className="hero__img-box">
                        <div className="hero__img-inner">
                            <img src={hero00} alt="hero00" className="hero00" />
                            <img src={hero01} alt="hero01" className="hero01" />
                            <img src={hero02} alt="hero02" className="hero02" />
                            <img src={hero03} alt="hero03" className="hero03" />
                            <img src={hero04} alt="hero04" className="hero04" />
                            <img src={hero05} alt="hero05" className="hero05" />
                            <img src={hero06} alt="hero06" className="hero06" />
                            <img src={hero07} alt="hero07" className="hero07" />
                        </div>
                    </div>
                    <div className="hero__body">
                        <div className="hero__scene">
                            <div className="hero__cube">
                                <div className="hero__face hero__face--front"></div>
                                <div className="hero__face hero__face--back"></div>
                                <div className="hero__face hero__face--right">
                                    <section className="ingredients-board">
                                        <div className="ingredients-board__inner">
                                            {rows.map((row, rowIndex) => (
                                                <div
                                                    className={`ingredients-board__row ingredients-board__row--${row.length}`}
                                                    key={rowIndex}
                                                >
                                                    {row.map((text, itemIndex) => (
                                                        <span
                                                            className="ingredients-board__item"
                                                            key={`${rowIndex}-${itemIndex}`}
                                                        >
                                                            {text}
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                                <div className="hero__face hero__face--left"></div>
                                <div className="hero__face hero__face--top"></div>
                                <div className="hero__face hero__face--bottom"></div>
                            </div>
                        </div>
                        <div className="hero__description">
                            <p>메디힐은 성분 연구와 피부 과학을 바탕으로 스킨케어를 설계하는</p>
                            <p>더마코스메틱 브랜드입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
