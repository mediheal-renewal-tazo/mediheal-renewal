import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MembershipSection1 = () => {
    const titleRef = useRef(null);

    useGSAP(() => {
        const lines = titleRef.current.querySelectorAll('.membership-sec1__title-inner');

        // MEDIHEAL: delay 0.2s
        gsap.fromTo(lines[0],
            { y: '110%' },
            { y: '0%', duration: 0.9, ease: 'power3.out', delay: 0.2 }
        );

        // MEMBERSHIP: MEDIHEAL이 반쯤 올라왔을 때 (0.2 + 0.9*0.5 = 0.65s)
        gsap.fromTo(lines[1],
            { y: '110%' },
            { y: '0%', duration: 0.9, ease: 'power3.out', delay: 0.65 }
        );
    }, { scope: titleRef });

    return (
        <section className="membership-sec1" data-header-theme="light">
            <div className="membership-sec1__inner">
                <p className="membership-sec1__label">한눈에 보는 멤버십 혜택</p>
                <h1 className="membership-sec1__title" ref={titleRef}>
                    <span className="membership-sec1__title-line">
                        <span className="membership-sec1__title-inner">MEDIHEAL</span>
                    </span>
                    <span className="membership-sec1__title-line">
                        <span className="membership-sec1__title-inner">MEMBERSHIP</span>
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default MembershipSection1;
