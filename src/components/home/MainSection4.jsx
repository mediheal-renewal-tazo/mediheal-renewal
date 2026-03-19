import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { sectionData4 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

gsap.registerPlugin(ScrollTrigger);

const MainSection4 = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef(null);

    useGSAP(
        () => {
            const items = Array.from(panelsRef.current.children);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin:true,
                    pinType:'transform',
                    start: 'bottom bottom',
                    toggleActions: 'play none none reverse',
                },
            });

            // 1번부터 차례대로 아래에서 박력있게 올라옴
            tl.fromTo(
                items,
                { y: 160, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'expo.out',
                    stagger: 0.25,
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <div className="main__section4" ref={sectionRef}>
            <div className="main__section4__inner">
                <div className="main__section4-titleBox">
                    <span>MEDIHEAL Membership</span>
                    <div className="main__section4-titleBox-title">
                        <span>메디힐 연구소의 정밀한 데이터로 완성한 고품질 제품들을</span>
                        <span>
                            매달 드리는 멤버십 전용 할인과 적립 혜택으로 더욱 똑똑한 관리를
                            누려보세요.
                        </span>
                    </div>
                </div>
                <div className="main__section4-membershipBox" ref={panelsRef}>
                    {sectionData4.map((item) => (
                        <ProductItem key={item.id} className={`sec4-${item.id}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection4;
