import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { sectionData3 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

gsap.registerPlugin(ScrollTrigger);

const MainSection3 = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef(null);

    useGSAP(
        () => {
            const brandItems = Array.from(panelsRef.current.children);
            const imgs = brandItems.map((item) => item.querySelector('img')).filter(Boolean);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    pinType: 'transform',
                    start: 'bottom bottom',
                    end: '+=2000',
                    scrub: 1,
                },
            });

            // brandBox 자식요소들이 gap 20px 만큼 펼쳐짐
            tl.fromTo(
                panelsRef.current,
                { columnGap: 0 },
                { columnGap: 20, duration: 0.8, ease: 'power3.out' }
            );

            // img 1→4 순서로 section height 40%만큼 아래로 이동
            tl.to(
                imgs,
                {
                    y: () => panelsRef.current.offsetHeight * 0.4,
                    duration: 0.7,
                    ease: 'none',
                    stagger: 0.55,
                },
                '+=0.3'
            );

            // img 모션 완료 후 잠깐 멈춤
            tl.to({}, { duration: 1 });
        },
        { scope: sectionRef }
    );

    return (
        <div className="main__section3" ref={sectionRef}>
            <div className="main__section3__inner">
                <div className="main__section3-titleBox">
                    <span>MEDIHEAL PROCESS</span>
                    <div className="main__section3-titleBox-title">
                        <span>연구소에서 개발된 포뮬러가 당신의 피부에 닿기까지—</span>
                        <span>메디힐의 모든 과정은 투명하게 이어집니다.</span>
                    </div>
                </div>
                <div className="main__section3-brandBox" ref={panelsRef}>
                    {sectionData3.map((item) => (
                        <ProductItem key={item.id} className={`sec3-${item.id}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection3;
