import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import main5_bg from '@/assets/images/home/main5_bg_img.png';
import { sectionData5, sectionData5_1 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

const EN_LINES_5 = [
    'THE GLOBALLY RECOGNIZED',
    'SELECTION',
    'MEDIHEAL LAB RESEARCH',
    'SIMPLIFIES',
    'DERMA SOLUTIONS',
];
const KO_HEADLINE_5 = Array.from('세계가 인정한 메디힐의 기록');
const KO_BODY_5 =
    '메디힐의 기록은 세계가 인정한 메디힐 더마 케어의 증명입니다.\n모든 피부 고민의 해답을 찾는 그날까지\n메디힐의 연구는 계속됩니다.';

const charLines5 = (() => {
    let idx = 0;
    return EN_LINES_5.map((line) =>
        Array.from(line).map((enChar) => {
            const koChar = idx < KO_HEADLINE_5.length ? KO_HEADLINE_5[idx] : null;
            idx++;
            return { en: enChar, ko: koChar };
        })
    );
})();

const MainSection5 = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const enChars = gsap.utils.toArray('.char-en', containerRef.current);
            const koChars = gsap.utils.toArray('.char-ko', containerRef.current);
            const koBodyChars = gsap.utils.toArray('.sec5-ko-body-char', containerRef.current);

            gsap.set(koBodyChars, { opacity: 0 });

            const koNonSpaceGroups = koChars
                .filter((ko) => ko.textContent !== ' ')
                .map((ko) => ko.parentElement);
            const koSpaceGroups = koChars
                .filter((ko) => ko.textContent === ' ')
                .map((ko) => ko.parentElement);
            const enOnlyGroups = enChars
                .filter((en) => !en.parentElement.querySelector('.char-ko'))
                .map((en) => en.parentElement);

            const firstNonSpace = koChars.find((ko) => ko.textContent !== ' ');
            const koCharWidth = firstNonSpace?.getBoundingClientRect().width || 60;

            const EN_STAGGER = 0.045;
            const EN_FADE = 0.1;
            const KO_STAGGER = 0.08;
            const CHAR_DUR = 0.2;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    toggleActions: 'play none none reverse',
                },
            });

            // EN: 왼쪽부터 한 글자씩 사라짐
            tl.to(enChars, { opacity: 0, duration: EN_FADE, stagger: EN_STAGGER, ease: 'power1.in' }, 0);

            // KO headline: 아래에서 한 글자씩 등장 (MainSection1과 동일)
            tl.fromTo(
                koChars,
                { opacity: 0, yPercent: 120 },
                { opacity: 1, yPercent: 0, duration: CHAR_DUR, stagger: KO_STAGGER, ease: 'power2.out' },
                KO_STAGGER / 2
            );

            // KO 그룹 너비 정규화
            koNonSpaceGroups.forEach((group) => {
                const koChar = group.querySelector('.char-ko');
                const koIdx = koChars.indexOf(koChar);
                if (koIdx < 0) return;
                const t = KO_STAGGER / 2 + koIdx * KO_STAGGER + CHAR_DUR;
                tl.to(group, { width: koCharWidth, duration: CHAR_DUR * 0.8, ease: 'power2.out' }, t);
            });

            koSpaceGroups.forEach((group) => {
                const koChar = group.querySelector('.char-ko');
                const koIdx = koChars.indexOf(koChar);
                if (koIdx < 0) return;
                const t = KO_STAGGER / 2 + koIdx * KO_STAGGER + CHAR_DUR;
                tl.to(group, { width: koCharWidth * 0.3, duration: CHAR_DUR * 0.8, ease: 'power2.out' }, t);
            });

            enOnlyGroups.forEach((group) => {
                const enChar = group.querySelector('.char-en');
                const enIdx = enChars.indexOf(enChar);
                if (enIdx < 0) return;
                const t = enIdx * EN_STAGGER + EN_FADE;
                tl.to(group, { width: 0, duration: CHAR_DUR * 0.3, ease: 'power2.in' }, t);
            });

            // KO body: 타이프라이터
            const koBodyDelay =
                (KO_HEADLINE_5.length - 1) * KO_STAGGER + KO_STAGGER / 2 + CHAR_DUR + 0.1;
            tl.fromTo(
                koBodyChars,
                { opacity: 0 },
                { opacity: 1, duration: 0.06, stagger: 0.028, ease: 'none' },
                koBodyDelay
            );

        },
        { scope: containerRef }
    );

    return (
        <div className="main__section5" ref={sectionRef} data-header-theme="light">
            <div className="main__section5-inner">
                <div className="main__section5-title">
                    <div
                        className="main__section5-title__text"
                        ref={containerRef}
                    >
                        {charLines5.map((line, lineIdx) => (
                            <span key={lineIdx} className="main__section5-title__line">
                                {line.map((charData, charIdx) => (
                                    <span key={charIdx} className="char-group">
                                        <span className="char-en">{charData.en}</span>
                                        {charData.ko !== null && (
                                            <span className="char-ko">{charData.ko}</span>
                                        )}
                                    </span>
                                ))}
                            </span>
                        ))}
                        <div className="sec5-ko-body">
                            {KO_BODY_5.split('\n').map((line, lineIdx, arr) => (
                                <span key={lineIdx} className="sec5-ko-body-line">
                                    {Array.from(line).map((char, charIdx) => (
                                        <span key={charIdx} className="sec5-ko-body-char">
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                    {lineIdx < arr.length - 1 && <br />}
                                </span>
                            ))}
                        </div>
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
