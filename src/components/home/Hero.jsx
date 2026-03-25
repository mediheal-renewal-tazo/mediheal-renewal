import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import hero00 from '@/assets/images/home/hero00_fin.png';
import hero01 from '@/assets/images/home/hero01_fin.png';
import hero02 from '@/assets/images/home/hero02_fin.png';
import hero03 from '@/assets/images/home/hero03_fin.png';
import hero04 from '@/assets/images/home/hero04_fin.png';
import hero05 from '@/assets/images/home/hero05_fin.png';
import hero06 from '@/assets/images/home/hero06_fin.png';
import hero07 from '@/assets/images/home/hero07_fin.png';
import './hero.scss';

// GSAP 플러그인 등록 (컴포넌트 밖에서 한 번만 실행)
gsap.registerPlugin(ScrollTrigger);
// 새로고침 시 ScrollTrigger가 저장한 스크롤 위치 제거
ScrollTrigger.clearScrollMemory();

// 이미지 가중치 슬롯 — 컴포넌트 외부에서 한 번만 계산
const _WEIGHTS = [6, 4, 4, 4, 4, 4, 4, 2];
const _TOTAL_WEIGHT = _WEIGHTS.reduce((a, b) => a + b, 0);
const _SLOTS = _WEIGHTS.reduce((acc, w, i) => {
    const start = i === 0 ? 0 : acc[i - 1].end;
    acc.push({ start, end: start + w / _TOTAL_WEIGHT });
    return acc;
}, []);

const Hero = ({ introFinished }) => {
    // ── React Refs ──
    const containerRef = useRef(null);
    const maskRef = useRef(null);
    const sceneRef = useRef(null);
    const cubeRef = useRef(null);
    const descriptionRef = useRef(null);
    const darkWrapRef = useRef(null);

    // 성분 텍스트 데이터
    const rows = [
        ['WATER', 'DIPROPYLENE', 'GLYCOL'],
        ['GLYCERETH-26', 'NIACINAMIDE'],
        ['1,2-HEXANEDIOL', 'GLYCERIN', 'DIPHENYL'],
        ['DIMETHICONE', 'TRIETHYLHEXANOIN'],
        ['ROSMARINUS', 'HYDROGENATED'],
        ['HYDROXYACETOPHENONE', 'LECITHIN'],
        ['POLYGLYCERYL-10', 'OLEATE', 'CENTELLA'],
        ['ASIATICA', 'EXTRACT', '(1,001 PPM)'],
        ['DIPOTASSIUM', 'GLYCYRRHIZATE', 'SODIUM'],
        ['OCTYLDODECETH-16', 'CITRATE'],
        ['ALLANTOIN', 'CITRIC', 'MASTERY'],
        ['MATERIAL', 'FUNCTIONALITY'],
        ['MADECASSOSIDE (10.25 PPM)', 'EDTA'],
        ['POLYGLYCERYL-10', 'JUNIPERUS'],
        ['LAMINATION', 'ACID', 'DISODIUM'],
    ];

    // description 텍스트 (한 글자씩 출력용)
    const descLines = [
        '메디힐은 성분 연구와 피부 과학을 바탕으로 스킨케어를 설계하는',
        '더마코스메틱 브랜드입니다.',
    ];

    useGSAP(
        () => {
            // ────────────────────────────────────
            // 1. Lenis 스무스 스크롤 설정
            // ────────────────────────────────────
            const lenis = new Lenis();
            lenis.on('scroll', ScrollTrigger.update);

            const lenisTickerCallback = (time) => lenis.raf(time * 1000);
            gsap.ticker.add(lenisTickerCallback);
            gsap.ticker.lagSmoothing(0);

            // ────────────────────────────────────
            // 2. DOM 요소 가져오기
            // ────────────────────────────────────
            const mask = maskRef.current;
            const darkWrap = darkWrapRef.current;
            const scene = sceneRef.current;
            const cube = cubeRef.current;
            const faces = gsap.utils.toArray('.hero__face', containerRef.current);
            const description = descriptionRef.current;
            const chars = gsap.utils.toArray('.char', description);

            const images = gsap.utils.toArray('.gallery-img', containerRef.current);
            const totalImages = images.length;
            const IMG_FADE = 0.25 / totalImages;
            const mainDscs = gsap.utils.toArray('.hero__main-dsc', containerRef.current);

            // ────────────────────────────────────
            // 3. 초기 상태 설정
            // ────────────────────────────────────
            let vw = window.innerWidth;
            let vh = window.innerHeight;
            let squareSize = Math.min(vh * 0.5, 430);

            images.forEach((img, i) => {
                gsap.set(img, { opacity: i === 0 ? 1 : 0, scale: 1, y: 0 });
            });

            gsap.set(mask, { width: vw, height: vh });
            gsap.set(darkWrap, { clipPath: 'inset(0px 0px)' });
            document.documentElement.style.setProperty('--hero-mask-clip', 'inset(0px 0px)');
            gsap.set(chars, { opacity: 0 });
            gsap.set(description, { opacity: 0 });
            gsap.set(mainDscs, { y: 0 });

            // 큐브 6면을 마스크 최종 크기(squareSize)로 초기 설정
            const setCubeSize = (size) => {
                const half = size / 2;
                gsap.set(scene, { width: size, height: size });
                gsap.set(cube, { width: size, height: size });
                faces.forEach((face) => gsap.set(face, { width: size, height: size }));
                gsap.set('.hero__face--front', { transform: `translateZ(${half}px)` });
                gsap.set('.hero__face--back', {
                    transform: `rotateY(180deg) translateZ(${half}px)`,
                });
                gsap.set('.hero__face--right', {
                    transform: `rotateY(90deg) translateZ(${half}px)`,
                });
                gsap.set('.hero__face--left', {
                    transform: `rotateY(-90deg) translateZ(${half}px)`,
                });
                gsap.set('.hero__face--top', { transform: `rotateX(90deg) translateZ(${half}px)` });
                gsap.set('.hero__face--bottom', {
                    transform: `rotateX(-90deg) translateZ(${half}px)`,
                });
            };
            setCubeSize(squareSize);

            // ────────────────────────────────────
            // 4. ScrollTrigger 생성
            //    Phase 1 (0 ~ 0.4):    마스크 축소 + 이미지 교체
            //    Phase 2 (0.4 ~ 0.55):  마지막 이미지 확대
            //    Phase 3 (0.55 ~ 0.7):  큐브 크기 → 마스크 크기
            //    Phase 4 (0.7 ~ 0.85):  큐브 우측 → 좌측 이동
            //    Phase 5 (0.85 ~ 1.0):  1초 후 글자 한 글자씩 출력
            // ────────────────────────────────────
            const SCALE_MAX = 1.51;

            // Phase 절대 스크롤 거리(vh) — 기존 총 1400vh 기준
            const baseVH = totalImages * 100 + 1200;
            const holdVH = 200; // 텍스트 완성 후 2 스크롤 hold
            const totalScrollVH = baseVH + holdVH;

            // 각 Phase 끝 지점을 새 총 스크롤 기준 비율로 변환
            // (절대 vh 위치는 기존과 동일하게 유지)
            const PHASE1_END = (baseVH * 0.4) / totalScrollVH;
            const PHASE2_END = (baseVH * 0.55) / totalScrollVH;
            const PHASE3_END = (baseVH * 0.7) / totalScrollVH;
            const PHASE4_END = (baseVH * 0.85) / totalScrollVH;
            const PHASE5_END = baseVH / totalScrollVH; // 텍스트 완성 → hold 시작

            // 큐브 front face 이미지를 Phase 2 최대 확대값과 동일하게 미리 설정
            const frontFaceImg = containerRef.current.querySelector('.hero__face--front img');
            gsap.set(frontFaceImg, { scale: SCALE_MAX, y: -30 });

            const st = ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${totalScrollVH}vh`,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const p = self.progress;

                    // ────────────────────────────────
                    // Phase 1: 마스크 축소 + 이미지 교체 (0 ~ 0.4)
                    // ────────────────────────────────
                    const phase1Progress = Math.min(p / PHASE1_END, 1);

                    // main-dsc 텍스트: 스크롤 시 위로 사라짐
                    gsap.set(mainDscs, { y: -200 * phase1Progress });

                    const currentW = vw - (vw - squareSize) * phase1Progress;
                    const currentH = vh - (vh - squareSize) * phase1Progress;

                    gsap.set(mask, { width: currentW, height: currentH });

                    const clipY = (vh - currentH) / 2;
                    const clipX = (vw - currentW) / 2;
                    const clipVal = `inset(${clipY}px ${clipX}px)`;
                    gsap.set(darkWrap, { clipPath: clipVal });
                    document.documentElement.style.setProperty('--hero-mask-clip', clipVal);

                    images.forEach((img, i) => {
                        const { start: slotStart, end: slotEnd } = _SLOTS[i];
                        let opacity;
                        if (phase1Progress < slotStart - IMG_FADE) {
                            opacity = i === 0 ? 1 : 0;
                        } else if (phase1Progress < slotStart + IMG_FADE) {
                            opacity =
                                i === 0 ? 1 : (phase1Progress - (slotStart - IMG_FADE)) / (2 * IMG_FADE);
                        } else if (phase1Progress < slotEnd - IMG_FADE) {
                            opacity = 1;
                        } else if (phase1Progress < slotEnd + IMG_FADE) {
                            opacity =
                                i === totalImages - 1
                                    ? 1
                                    : 1 - (phase1Progress - (slotEnd - IMG_FADE)) / (2 * IMG_FADE);
                        } else {
                            opacity = i === totalImages - 1 ? 1 : 0;
                        }
                        gsap.set(img, { opacity });
                    });

                    // ────────────────────────────────
                    // Phase 2: 마지막 이미지 확대 (0.4 ~ 0.55)
                    // ────────────────────────────────
                    if (p > PHASE1_END && p <= PHASE2_END) {
                        const phase2Progress = (p - PHASE1_END) / (PHASE2_END - PHASE1_END);
                        const scale = 1 + (SCALE_MAX - 1) * phase2Progress;

                        gsap.set(images[totalImages - 1], {
                            scale,
                            y: -30 * phase2Progress,
                        });

                        gsap.set(mask, { display: 'block', opacity: 1 });
                    } else if (p > PHASE2_END) {
                        gsap.set(images[totalImages - 1], { scale: SCALE_MAX, y: -30 });
                        // mask 페이드아웃은 Phase 3 스크롤-스크럽으로 처리
                    } else {
                        gsap.set(mask, { display: 'block', opacity: 1 });
                        gsap.set(images[totalImages - 1], { scale: 1, y: 0 });
                    }

                    // ────────────────────────────────
                    // Phase 3: 마스크 → 큐브 전환 (0.55 ~ 0.7)
                    // (큐브는 항상 squareSize, 마스크 숨김만 처리)
                    // ────────────────────────────────
                    if (p > PHASE2_END && p <= PHASE3_END) {
                        gsap.set(mask, { display: 'block', opacity: 1 });
                    } else if (p > PHASE3_END) {
                        gsap.set(mask, { display: 'none' });
                    } else {
                        gsap.set(mask, { display: 'block', opacity: 1 });
                    }

                    // ────────────────────────────────
                    // Phase 4: 큐브 3D 회전 우→좌 (0.7 ~ 0.85)
                    //   rotateY: 0 → -90deg (right face가 정면으로)
                    // ────────────────────────────────
                    if (p > PHASE3_END && p <= PHASE4_END) {
                        const phase4Progress = (p - PHASE3_END) / (PHASE4_END - PHASE3_END);

                        // 큐브 front에 닿은 후 스크롤 한 번 분량 hold 후 회전 시작
                        const PHASE4_HOLD = 0.3;
                        const rotateProgress =
                            phase4Progress < PHASE4_HOLD
                                ? 0
                                : (phase4Progress - PHASE4_HOLD) / (1 - PHASE4_HOLD);
                        const rotateY = -90 * rotateProgress;
                        gsap.set(cube, { rotateY: rotateY });

                        // description 아직 숨김
                        gsap.set(description, { opacity: 0 });
                        gsap.set(chars, { opacity: 0 });
                    } else if (p > PHASE4_END) {
                        // 큐브 최종 회전 유지
                        gsap.set(cube, { rotateY: -90 });
                    } else if (p <= PHASE3_END) {
                        // Phase 4 이전: 회전 없음
                        gsap.set(cube, { rotateY: 0 });
                        gsap.set(description, { opacity: 0 });
                        gsap.set(chars, { opacity: 0 });
                    }

                    // ────────────────────────────────
                    // Phase 5: 스크롤에 따라 글자 순차 출력 (PHASE4_END ~ PHASE5_END)
                    // Phase 6: 텍스트 완성 후 hold (PHASE5_END ~ 1.0)
                    // ────────────────────────────────
                    if (p > PHASE4_END && p <= PHASE5_END) {
                        const phase5Progress = (p - PHASE4_END) / (PHASE5_END - PHASE4_END);
                        gsap.set(description, { opacity: 1 });
                        const visibleCount = Math.round(phase5Progress * chars.length);
                        gsap.set(chars.slice(0, visibleCount), { opacity: 1 });
                        gsap.set(chars.slice(visibleCount), { opacity: 0 });
                    } else if (p > PHASE5_END) {
                        // hold: 모든 글자 표시 유지
                        gsap.set(description, { opacity: 1 });
                        gsap.set(chars, { opacity: 1 });
                    } else if (p <= PHASE4_END) {
                        gsap.set(description, { opacity: 0 });
                        gsap.set(chars, { opacity: 0 });
                    }
                },
            });

            // ────────────────────────────────────
            // 5. 리사이즈 대응
            // ────────────────────────────────────
            const handleResize = () => {
                vw = window.innerWidth;
                vh = window.innerHeight;
                squareSize = Math.min(vh * 0.5, 430);
                setCubeSize(squareSize);
                ScrollTrigger.refresh();
            };
            window.addEventListener('resize', handleResize);

            // ────────────────────────────────────
            // 6. 새로고침 시 인라인 스타일 제거
            // ────────────────────────────────────
            const handleBeforeUnload = () => {
                mask.removeAttribute('style');
                darkWrap.removeAttribute('style');
                images.forEach((img) => img.removeAttribute('style'));
            };
            window.addEventListener('beforeunload', handleBeforeUnload);

            // ────────────────────────────────────
            // 7. 클린업
            // ────────────────────────────────────
            return () => {
                gsap.ticker.remove(lenisTickerCallback);
                lenis.destroy();
                st.kill();
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        },
        { scope: containerRef }
    );

    return (
        <section className="hero" ref={containerRef} data-header-theme="dark">
            <div className="hero__sticky">
                <div className="hero__inner">
                    {/* Light text (white) — 파란 배경 위 */}
                    <div className={`hero__main-dsc-wrap${introFinished ? ' hero__main-dsc-wrap--visible' : ''}`}>
                        <span className="hero__main-dsc hero__main-dsc--light">
                            <p>모든 피부를 위해</p>
                            <p>깊이 있는 피부 과학과 성분 연구에서 시작해</p>
                            <p>복잡한 더마케어에 쉬운 해답을 만듭니다</p>
                        </span>
                    </div>
                    {/* Dark text (#151789) — 흰 마스크 위, clip-path로 마스크 영역만 표시 */}
                    <div className={`hero__main-dsc-wrap${introFinished ? ' hero__main-dsc-wrap--visible' : ''}`} ref={darkWrapRef}>
                        <span className="hero__main-dsc hero__main-dsc--dark">
                            <p>모든 피부를 위해</p>
                            <p>깊이 있는 피부 과학과 성분 연구에서 시작해</p>
                            <p>복잡한 더마케어에 쉬운 해답을 만듭니다</p>
                        </span>
                    </div>

                    {/* hero__img-inner = 마스크 (풀스크린 → 정사각형 축소) */}
                    <div className="hero__img-box">
                        <div className="hero__img-inner" ref={maskRef}>
                            <img src={hero00} alt="hero00" className="gallery-img" />
                            <img src={hero01} alt="hero01" className="gallery-img" />
                            <img src={hero02} alt="hero02" className="gallery-img" />
                            <img src={hero03} alt="hero03" className="gallery-img" />
                            <img src={hero04} alt="hero04" className="gallery-img" />
                            <img src={hero05} alt="hero05" className="gallery-img" />
                            <img src={hero06} alt="hero06" className="gallery-img" />
                            <img src={hero07} alt="hero07" className="gallery-img" />
                        </div>
                    </div>

                    <div className="hero__body">
                        <div className="hero__scene" ref={sceneRef}>
                            <div className="hero__cube" ref={cubeRef}>
                                <div className="hero__face hero__face--front">
                                    <img src={hero07} alt="" />
                                </div>
                                <div className="hero__face hero__face--back"></div>
                                <div className="hero__face hero__face--right">
                                    <section className="ingredients-board">
                                        <div className="ingredients-board__inner">
                                            {rows.map((row, rowIndex) => (
                                                <div
                                                    className={`ingredients-board__row ingredients-board__row--${row.length}`}
                                                    key={rowIndex}
                                                >
                                                    {row.map((text, itemIndex) => (
                                                        <span
                                                            className="ingredients-board__item"
                                                            key={`${rowIndex}-${itemIndex}`}
                                                        >
                                                            {text}
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                                <div className="hero__face hero__face--left"></div>
                                <div className="hero__face hero__face--top"></div>
                                <div className="hero__face hero__face--bottom"></div>
                            </div>
                        </div>

                        {/* description: 각 글자를 span.char로 분할 */}
                        <div className="hero__description" ref={descriptionRef}>
                            {descLines.map((line, lineIdx) => (
                                <p key={lineIdx}>
                                    {line.split('').map((char, charIdx) => (
                                        <span className="char" key={`${lineIdx}-${charIdx}`}>
                                            {char}
                                        </span>
                                    ))}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
