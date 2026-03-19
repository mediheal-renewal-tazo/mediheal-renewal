import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FADE_MS = 200;

const MainVisual = () => {
    const [leftKo, setLeftKo] = useState(false);
    const [leftVisible, setLeftVisible] = useState(true);
    const [rightKo, setRightKo] = useState(false);
    const [rightVisible, setRightVisible] = useState(true);
    const leftTimer = useRef(null);
    const rightTimer = useRef(null);

    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const leftWrapRef = useRef(null);
    const rightWrapRef = useRef(null);
    const dscRef = useRef(null);

    const handleLeftEnter = () => {
        clearTimeout(leftTimer.current);
        setLeftVisible(false);
        leftTimer.current = setTimeout(() => {
            setLeftKo(true);
            setLeftVisible(true);
        }, FADE_MS);
    };

    const handleLeftLeave = () => {
        clearTimeout(leftTimer.current);
        setLeftVisible(false);
        leftTimer.current = setTimeout(() => {
            setLeftKo(false);
            setLeftVisible(true);
        }, FADE_MS);
    };

    const handleRightEnter = () => {
        clearTimeout(rightTimer.current);
        setRightVisible(false);
        rightTimer.current = setTimeout(() => {
            setRightKo(true);
            setRightVisible(true);
        }, FADE_MS);
    };

    const handleRightLeave = () => {
        clearTimeout(rightTimer.current);
        setRightVisible(false);
        rightTimer.current = setTimeout(() => {
            setRightKo(false);
            setRightVisible(true);
        }, FADE_MS);
    };

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom bottom',
                    pin: true,
                    pinType: 'transform',
                    toggleActions: 'play none none reverse',
                },
                defaults: { ease: 'power2.out' },
            });

            // Phase 1: line이 중앙에서 상·하로 펼쳐짐
            tl.fromTo(
                lineRef.current,
                { scaleY: 0, transformOrigin: 'center center' },
                { scaleY: 1, duration: 0.4, ease: 'power2.inOut' }
            );

            // Phase 2: left·right 텍스트가 line 방향에서 바깥으로 슬라이드 (동시)
            tl.fromTo(
                leftWrapRef.current,
                { x: 120, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6 },
                '-=0'
            );
            tl.fromTo(
                rightWrapRef.current,
                { x: -120, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6 },
                '<'
            );

            // Phase 3: dsc가 아래에서 위로 등장
            tl.fromTo(dscRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });
        },
        { scope: containerRef }
    );

    return (
        <div className="main" ref={containerRef} data-header-theme="light">
            <div className="main__inner">
                <div className="main__visual-text">
                    {/* GSAP가 wrapper를, React hover가 내부 h2 opacity를 각각 제어 */}
                    <div ref={leftWrapRef} className="main__visual-anim-wrap">
                        <h2
                            className="main__visual-text left"
                            style={{
                                opacity: leftVisible ? 1 : 0,
                                transition: `opacity ${FADE_MS}ms ease`,
                            }}
                            onMouseEnter={handleLeftEnter}
                            onMouseLeave={handleLeftLeave}
                        >
                            {leftKo ? (
                                <>
                                    <span>성분을 만나는</span>
                                    <span>순간</span>
                                </>
                            ) : (
                                <>
                                    <span>When ingredients</span>
                                    <span>meet,</span>
                                </>
                            )}
                        </h2>
                    </div>
                    <div className="main__visual-line" ref={lineRef}></div>
                    <div ref={rightWrapRef} className="main__visual-anim-wrap">
                        <h2
                            className="main__visual-text right"
                            style={{
                                opacity: rightVisible ? 1 : 0,
                                transition: `opacity ${FADE_MS}ms ease`,
                            }}
                            onMouseEnter={handleRightEnter}
                            onMouseLeave={handleRightLeave}
                        >
                            {rightKo ? (
                                <>
                                    <span>진짜 피부 회복이</span>
                                    <span>시작된다</span>
                                </>
                            ) : (
                                <>
                                    <span>Real skin</span>
                                    <span>repair begins.</span>
                                </>
                            )}
                        </h2>
                    </div>
                </div>
                <div className="main__visual-middle">
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                    <span>MEDIHEAL LAB</span>
                </div>
                <div className="main__visual-dsc" ref={dscRef}>
                    <span>성분연구는 피부 고민과 성분, 제형을 연결하는 정밀한 설계입니다.</span>
                    <span>메디힐은 자체 엘앤피코스메틱 R&D센터에서 연구하고 제품을 만듭니다.</span>
                    <span>정밀하게 설계된 메디힐의 성분 솔루션을 경험해보세요.</span>
                </div>
            </div>
        </div>
    );
};

export default MainVisual;
