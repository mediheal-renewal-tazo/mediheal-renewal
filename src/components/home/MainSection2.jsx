import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { sectionData2 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

gsap.registerPlugin(ScrollTrigger);

const MainSection2 = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef(null);

    useGSAP(
        () => {
            // 가로 스크롤: 패널 컨테이너를 왼쪽으로 밀어 가로 페이징 구현
            gsap.to(panelsRef.current, {
                xPercent: -75, // 패널 4개 중 3개만큼 이동 (100% - 25% = 75%)
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    pinType: 'transform',
                    scrub: 1,
                    start: 'bottom bottom',
                    end: () => '+=' + panelsRef.current.offsetWidth,
                },
            });
        },
        { scope: sectionRef }
    );
    return (
        <div className="main__section2" ref={sectionRef}>
            <div className="main__section2-inner">
                <div className="main__section2-titleBox">
                    <span>MEDIHEAL BEST</span>
                    <div className="main__section2-titleBox-title">
                        <span>
                            메디힐의 데이터와 공법으로 설계한 솔루션, 그 정교한 피부 변화를 확인해
                            보세요.
                        </span>
                        <span>
                            피부 고민에 최적화된 포뮬러를 연구하여 얻은 결과물을 여러분에게
                            소개합니다.
                        </span>
                        <span>고객들이 직접 경험하고 선택한 메디힐의 인기 제품을 만나보세요.</span>
                    </div>
                </div>
                <div className="main__section2-productList" ref={panelsRef}>
                    {sectionData2.map((item) => (
                        <ProductItem key={item.id} className={`sec2-${item.id}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection2;
