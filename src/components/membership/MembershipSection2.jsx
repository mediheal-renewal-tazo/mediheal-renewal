import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
    {
        name: 'YELLOW',
        condition: '가입즉시',
        benefits: ['매 월 10% 할인 쿠폰', '구매 시 1% 적립'],
        bg: 'rgba(255,255,255,0.06)',
    },
    {
        name: 'BLUE',
        condition: '6개월 구매 금액 5만원 이상 15만원 미만',
        benefits: ['매 월 10% 할인 쿠폰', '구매 시 1.5% 적립'],
        bg: 'rgba(255,255,255,0.16)',
    },
    {
        name: 'GREEN',
        condition: '6개월 구매금액 15만원 이상 40만원 미만',
        benefits: ['매 월 10% 할인 쿠폰', '구매 시 2% 적립'],
        bg: 'rgba(255,255,255,0.26)',
    },
    {
        name: 'VVIP',
        condition: '6개월 구매금액 40만원 이상',
        benefits: ['매 월 10% 할인 쿠폰', '구매 시 2.5% 적립'],
        bg: 'rgba(255,255,255,0.36)',
    },
];

const MembershipSection2 = () => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const cards = sectionRef.current.querySelectorAll('.membership-sec2__card');

            gsap.set(cards, { x: 400, autoAlpha: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: '20% bottom',
                    end: '100% bottom',
                    scrub: 1,
                },
            });

            cards.forEach((card) => {
                tl.to(card, { x: 0, autoAlpha: 1, duration: 1 }, '<0.3');
            });
        },
        { scope: sectionRef }
    );

    return (
        <section className="membership-sec2" data-header-theme="dark" ref={sectionRef}>
            <div className="membership-sec2__inner">
                <div className="membership-sec2__left">
                    <h2 className="membership-sec2__title">
                        MEDIHEAL
                        <br />
                        MEMBERSHIP
                    </h2>
                    <p className="membership-sec2__desc">
                        메디힐 멤버십과 함께 한 단계 높은 피부 해답을 만나보세요.
                        <br />
                        차별화된 등급별 혜택이 특별한 경험을 완성합니다.
                    </p>
                </div>
                <div className="membership-sec2__cards">
                    {TIERS.map((tier) => (
                        <div
                            key={tier.name}
                            className="membership-sec2__card"
                            style={{ background: tier.bg }}
                        >
                            <div className="membership-sec2__card-top">
                                <span className="membership-sec2__card-name">{tier.name}</span>
                                <span className="membership-sec2__card-condition">
                                    {tier.condition}
                                </span>
                            </div>
                            <div className="membership-sec2__card-benefits">
                                {tier.benefits.map((b, i) => (
                                    <span key={i}>{b}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipSection2;
