import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const KedihealTransition = () => {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const introRef = useRef(null);
    const statement1Ref = useRef(null);
    const statement2Ref = useRef(null);
    const cursorRef = useRef(null);

    const introText = '수차례의 테스트와';
    const statement1Text = '엄격한 기준을 지나,';
    const statement2Text = '비로소 메디힐이 됩니다';

    useGSAP(
        () => {
            const introVal = { char: 0 };
            const s1Val = { char: 0 };
            const s2Val = { char: 0 };

            const updateLine = (ref, text, val) => {
                if (!ref) return;
                const count = Math.floor(val.char);

                // "메디힐" 포인트 컬러 처리 (타이핑 도중 실시간 적용)
                if (ref === statement2Ref.current) {
                    const target = '메디힐';
                    const startIndex = text.indexOf(target); // '메'의 시작 인덱스
                    const endIndex = startIndex + target.length; // '힐'의 종료 인덱스

                    if (count > startIndex) {
                        const before = text.slice(0, startIndex);
                        const middle = text.slice(startIndex, Math.min(count, endIndex));
                        const after = count > endIndex ? text.slice(endIndex, count) : '';

                        ref.innerHTML = `${before}<span class="kediheal__point-text">${middle}</span>${after}`;
                    } else {
                        ref.textContent = text.slice(0, count);
                    }
                } else {
                    ref.textContent = text.slice(0, count);
                }

                // 커서 위치 이동
                if (cursorRef.current) {
                    ref.appendChild(cursorRef.current);
                }
            };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=2500', // 충분한 스크롤 길이 확보
                    pin: true,
                    scrub: true,
                },
            });

            // 1. 첫 번째 문구 타이핑
            tl.to(introVal, {
                char: introText.length,
                duration: 1,
                ease: 'none',
                onUpdate: () => updateLine(introRef.current, introText, introVal),
            });

            // 2. 잠시 멈춤 및 전환 (페이드)
            tl.to(introRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });
            tl.set([statement1Ref.current, statement2Ref.current], { opacity: 1 });

            // 3. 두 번째 문구 첫 줄 타이핑
            tl.to(s1Val, {
                char: statement1Text.length,
                duration: 1,
                ease: 'none',
                onUpdate: () => updateLine(statement1Ref.current, statement1Text, s1Val),
            });

            // 4. 두 번째 문구 둘째 줄 타이핑
            tl.to(s2Val, {
                char: statement2Text.length,
                duration: 1,
                ease: 'none',
                onUpdate: () => updateLine(statement2Ref.current, statement2Text, s2Val),
            });

            // 마지막에 커서 깜빡임 유지를 위해 약간의 여백
            tl.to({}, { duration: 0.5 });
        },
        { scope: sectionRef }
    );

    return (
        <section className="kediheal__section kediheal__section--transition" ref={sectionRef}>
            <div className="kediheal__transition-stage" ref={stageRef}>
                {/* 첫 번째 문구 */}
                <div
                    className="kediheal__transition-line kediheal__transition-line--intro"
                    ref={introRef}
                ></div>

                {/* 두 번째 문구 (두 줄) */}
                <div className="kediheal__transition-statement-wrap">
                    <div
                        className="kediheal__transition-line kediheal__transition-line--statement-1"
                        ref={statement1Ref}
                        style={{ opacity: 0 }}
                    ></div>
                    <div
                        className="kediheal__transition-line kediheal__transition-line--statement-2"
                        ref={statement2Ref}
                        style={{ opacity: 0 }}
                    ></div>
                </div>

                {/* 공용 커서 */}
                <span className="kediheal__transition-cursor" ref={cursorRef}></span>
            </div>
        </section>
    );
};

export default KedihealTransition;
