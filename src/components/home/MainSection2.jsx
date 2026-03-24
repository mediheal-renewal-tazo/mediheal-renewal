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
            const items = Array.from(panelsRef.current.children);
            const baseOffset = items[0].offsetLeft;

            // 뒤 아이템일수록 위에 쌓이도록 z-index 설정
            items.forEach((item, i) => {
                gsap.set(item, { zIndex: i + 1 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    pinType: 'transform',
                    scrub: 1,
                    start: 'bottom bottom',
                    end: () => `+=${panelsRef.current.scrollWidth - panelsRef.current.offsetWidth}`,
                },
            });

            // item2~5 동시에 이동해 각각 이전 아이템에 50%씩 겹침
            items.forEach((item, i) => {
                if (i === 0) return;
                tl.to(
                    item,
                    {
                        x: -(item.offsetLeft - baseOffset) * 0.48,
                        ease: 'none',
                    },
                    0
                );

                // 모션 완료 후 잠깐 멈춤
                tl.to({}, { duration: 0.3 });
            });
        },
        { scope: sectionRef }
    );
    return (
        <div className="main__section2" ref={sectionRef} data-header-theme="light">
            <div className="main__section2-inner">
                <div className="main__section2-titleBox">
                    <span>MEDIHEAL BEST</span>
                    <div className="main__section2-titleBox-title">
                        <span>메디힐이 설계하고 고객이 완성한 메디힐의 베스트 컬렉션.</span>
                        <span>
                            전문적인 연구 노하우를 담은 베스트셀러로 똑똑한 관리를 시작하세요.
                        </span>
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
