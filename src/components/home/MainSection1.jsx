import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import hero_bg from '@/assets/images/home/hero_bg_img.png';
import { sectionData1 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

gsap.registerPlugin(ScrollTrigger);

const EN_LINES = [
    'PRECISE LIPOSOME TECH',
    'SYSTEM',
    'DAILY TRACE CARE',
    'TESTED BY',
    'MEDIHEAL LAB',
];
const KO_CHARS = Array.from('저자극 데일리 흔적 케어 솔루션');
const BODY_TEXT = '메디힐 연구소 테스트를 통과한\n정밀 리포좀 기술 기반의 저자극 데일리 흔적 케어 솔루션을 만나보세요.\n메디힐의 데이터로 증명하는 피부의 변화를 느껴보세요';

const charLines = (() => {
    let idx = 0;
    return EN_LINES.map((line) =>
        Array.from(line).map((enChar) => {
            const koChar = idx < KO_CHARS.length ? KO_CHARS[idx] : null;
            idx++;
            return { en: enChar, ko: koChar };
        })
    );
})();

const MainSection1 = () => {
    const containerRef = useRef(null);
    const listRef = useRef(null);

    useGSAP(
        () => {
            // 상품 리스트 애니메이션
            const items = gsap.utils.toArray(listRef.current.children);
            gsap.fromTo(
                items,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: '90% bottom',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // 글자 교체 애니메이션
            const enChars = gsap.utils.toArray('.char-en', containerRef.current);
            const koChars = gsap.utils.toArray('.char-ko', containerRef.current);
            const koBodyChars = gsap.utils.toArray('.ko-body-char', containerRef.current);
            gsap.set(koBodyChars, { opacity: 0 });

            // KO 글자 있는 char-group / EN 전용 char-group 분리
            const koNonSpaceGroups = koChars
                .filter((ko) => ko.textContent !== ' ')
                .map((ko) => ko.parentElement);
            const koSpaceGroups = koChars
                .filter((ko) => ko.textContent === ' ')
                .map((ko) => ko.parentElement);
            const enOnlyGroups = enChars
                .filter((en) => !en.parentElement.querySelector('.char-ko'))
                .map((en) => en.parentElement);

            // KO 글자 실제 너비 측정
            const firstNonSpace = koChars.find((ko) => ko.textContent !== ' ');
            const koCharWidth = firstNonSpace?.getBoundingClientRect().width || 60;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    toggleActions: 'play none none reverse',
                },
            });

            const STAGGER = 0.08;
            const CHAR_DUR = 0.2;

            // EN: 앞 글자부터 순서대로 위로 퇴장
            tl.to(
                enChars,
                { opacity: 0, yPercent: -120, duration: CHAR_DUR, stagger: STAGGER, ease: 'power2.in' },
                0
            );

            // KO: EN과 약간 엇갈려서 같은 위치에 아래에서 등장
            tl.fromTo(
                koChars,
                { opacity: 0, yPercent: 120 },
                { opacity: 1, yPercent: 0, duration: CHAR_DUR, stagger: STAGGER, ease: 'power2.out' },
                STAGGER / 2
            );

            // 각 글자별로 EN이 완전히 사라진 직후에 너비 변경 (겹침 없음)
            koNonSpaceGroups.forEach((group) => {
                const koChar = group.querySelector('.char-ko');
                const koIdx = koChars.indexOf(koChar);
                if (koIdx < 0) return;
                const t = STAGGER / 2 + koIdx * STAGGER + CHAR_DUR;
                tl.to(group, { width: koCharWidth, duration: CHAR_DUR * 0.8, ease: 'power2.out' }, t);
            });

            koSpaceGroups.forEach((group) => {
                const koChar = group.querySelector('.char-ko');
                const koIdx = koChars.indexOf(koChar);
                if (koIdx < 0) return;
                const t = STAGGER / 2 + koIdx * STAGGER + CHAR_DUR;
                tl.to(group, { width: koCharWidth * 0.3, duration: CHAR_DUR * 0.8, ease: 'power2.out' }, t);
            });

            enOnlyGroups.forEach((group) => {
                const enChar = group.querySelector('.char-en');
                const enIdx = enChars.indexOf(enChar);
                if (enIdx < 0) return;
                const t = enIdx * STAGGER + CHAR_DUR;
                tl.to(group, { width: 0, duration: CHAR_DUR * 0.5, ease: 'power2.in' }, t);
            });

            // 마지막 KO 글자가 다 올라온 뒤 body 글자 순서대로 등장
            const koBodyDelay = (KO_CHARS.length - 1) * STAGGER + STAGGER / 2 + CHAR_DUR + 0.1;
            tl.fromTo(
                koBodyChars,
                { opacity: 0, yPercent: 120 },
                { opacity: 1, yPercent: 0, duration: 0.3, stagger: 0.015, ease: 'power2.out' },
                koBodyDelay
            );
        },
        { scope: containerRef }
    );

    return (
        <div className="main__section1" ref={containerRef} data-header-theme="dark">
            <div className="main__section1-inner">
                <div className="main__section1-title">
                    <div className="main__section1-title__text">
                        {charLines.map((line, lineIdx) => (
                            <span key={lineIdx} className="main__section1-title__line">
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
                        <span className="main__section1-title--ko-body">
                            {BODY_TEXT.split('\n').map((line, lineIdx, arr) => (
                                <span key={lineIdx} className="ko-body-line">
                                    {Array.from(line).map((char, charIdx) => (
                                        <span key={charIdx} className="ko-body-char">
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                    {lineIdx < arr.length - 1 && <br />}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="main__section1-productList" ref={listRef}>
                    {sectionData1.map((item) => (
                        <ProductItem key={item.id} className={`sec1-${item.id}`} {...item} />
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
