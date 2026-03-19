import { useState, useRef } from 'react';
import main5_bg from '@/assets/images/home/main5_bg_img.png';
import { sectionData5, sectionData5_1 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

const FADE_MS = 200;

const MainSection5 = () => {
    const [visible, setVisible] = useState(true);
    const [showKo, setShowKo] = useState(false);
    const timer = useRef(null);
    const showKoRef = useRef(false);

    const handleEnter = () => {
        clearTimeout(timer.current);
        if (showKoRef.current) { setVisible(true); return; }
        setVisible(false);
        timer.current = setTimeout(() => {
            showKoRef.current = true;
            setShowKo(true);
            setVisible(true);
        }, FADE_MS);
    };

    const handleLeave = () => {
        clearTimeout(timer.current);
        if (!showKoRef.current) { setVisible(true); return; }
        setVisible(false);
        timer.current = setTimeout(() => {
            showKoRef.current = false;
            setShowKo(false);
            setVisible(true);
        }, FADE_MS);
    };

    return (
        <div className="main__section5" data-header-theme="light">
            <div className="main__section5-inner">
                <div
                    className="main__section5-title"
                    style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
                >
                    <div
                        className="main__section5-title__text"
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                    {showKo ? (
                        <>
                            <span className="main__section5-title--ko-headline">
                                세계가 인정한 메디힐의 기록
                            </span>
                            <span className="main__section5-title--ko-body">
                                메디힐의 기록은 세계가 인정한 메디힐 더마 케어의 증명입니다.{'\n'}
                                모든 피부 고민의 해답을 찾는 그날까지{'\n'}
                                메디힐의 연구는 계속됩니다.
                            </span>
                        </>
                    ) : (
                        <>
                            <span>THE GLOBALLY RECOGNIZED</span>
                            <span>SELECTION</span>
                            <span>MEDIHEAL LAB RESEARCH</span>
                            <span>SIMPLIFIES</span>
                            <span>DERMA SOLUTIONS</span>
                        </>
                    )}
                    </div>
                </div>
                <div className="main__section5-bgImg">
                    <img src={main5_bg} alt="main5_bg" />
                    <div className="main__section5-bottomWrap">
                        <div className="main__section5-endTitle">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="main__section5-endTitle-track">
                                    {sectionData5.map((item) => (
                                        <span key={item.id}>{item.ingredient}</span>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="main__section5-endBanner">
                            <div className="main__section5-endBanner-wrap">
                                {sectionData5_1.map((item) => (
                                    <ProductItem
                                        key={item.id}
                                        className={`sec5-${item.id}`}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection5;
