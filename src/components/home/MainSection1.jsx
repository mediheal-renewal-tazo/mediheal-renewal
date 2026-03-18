import { useState, useRef } from 'react';
import hero_bg from "@/assets/images/home/hero_bg_img.png";
import { sectionData1 } from "@/data/homeData.js";
import ProductItem from "./ProductItem";

const FADE_MS = 200;

const MainSection1 = () => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(true);
    const [showKo, setShowKo] = useState(false);
    const timer = useRef(null);

    const handleEnter = () => {
        clearTimeout(timer.current);
        setVisible(false);
        timer.current = setTimeout(() => {
            setShowKo(true);
            setVisible(true);
        }, FADE_MS);
        setHovered(true);
    };

    const handleLeave = () => {
        clearTimeout(timer.current);
        setVisible(false);
        timer.current = setTimeout(() => {
            setShowKo(false);
            setVisible(true);
        }, FADE_MS);
        setHovered(false);
    };

    return (
        <div className="main__section1">
            <div className="main__section1-inner">
                <div
                    className={`main__section1-title${hovered ? ' is-hovered' : ''}`}
                    style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    {showKo ? (
                        <>
                            <span className="main__section1-title--ko-headline">
                                저자극 데일리 흔적 케어 솔루션
                            </span>
                            <span className="main__section1-title--ko-body">
                                메디힐 연구소 테스트를 통과한{'\n'}
                                정밀 리포좀 기술 기반의 저자극 데일리 흔적 케어 솔루션을 만나보세요.{'\n'}
                                메디힐의 데이터로 증명하는 피부의 변화를 느껴보세요.
                            </span>
                        </>
                    ) : (
                        <>
                            <span>PRECISE LIPOSOME TECH</span>
                            <span>SYSTEM</span>
                            <span>DAILY TRACE CARE</span>
                            <span>TESTED BY</span>
                            <span>MEDIHEAL LAB</span>
                        </>
                    )}
                </div>
                <div className="main__section1-productList">
                    {sectionData1.map((item) => (
                        <ProductItem
                            key={item.id}
                            className={`sec1-${item.id}`}
                            {...item}
                        />
                    ))}
                </div>
                <div className="main__section1-bgImg">
                    <img src={hero_bg} alt="hero_bg" />
                </div>
            </div>
        </div>
    );
};

export default MainSection1;
