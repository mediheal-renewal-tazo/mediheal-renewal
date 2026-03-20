import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Brand.scss'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
import brandStory1 from '@/assets/images/brand/brandstory_img1.jpg';
import brandStory2 from '@/assets/images/brand/brandstory_img2.jpg';
import brandStory3 from '@/assets/images/brand/brandstory_img3.jpg';
import brandStory4 from '@/assets/images/brand/brandstory_img4.jpg';
import brandStory5 from '@/assets/images/brand/brandstory_img5.jpg';
import history1 from '@/assets/images/brand/history_img1.jpg';
import history2 from '@/assets/images/brand/history_img2.jpg';
import history3 from '@/assets/images/brand/history_img3.jpg';
import history4 from '@/assets/images/brand/history_img4.jpg';
import history5 from '@/assets/images/brand/history_img5.jpg';


const Brand = () => {

    const containerRef = useRef(null);
    const introRef = useRef(null);
    const researchRef = useRef(null);
    const contentsRef = useRef(null);
    const bannerRef = useRef(null);
    const historyRef = useRef(null);
    const historyLabelRef = useRef(null);
    const historyTitleRef = useRef(null);
    const historyStickyWrapRef = useRef(null);

    useGSAP(() => {


        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.from('.brand-intro__sub-title', {
            yPercent: 100,   // 글씨 높이만큼 아래에서 시작
            duration: 1.2,
            delay: 0.3
        })
            .from('.brand-intro__main-title', {
                yPercent: 100,   // 글씨 높이만큼 아래에서 시작
                duration: 1.8,
            }, '-=0.8');  // 0.8초 겹쳐서 자연스럽게
    }, { scope: introRef });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: researchRef.current,
                start: 'top 80%',   // 섹션 상단이 뷰포트 80% 지점에 닿으면 시작
            },
            defaults: { ease: 'power4.out' }
        });

        tl.from('.brand-research__title', {
            yPercent: 100,
            duration: 1.2,
        })
            .from('.brand-research__desc', {
                yPercent: 100,
                duration: 1.2,
            }, '-=0.7');
    }, { scope: researchRef });

    // brand-contents 섹션: 스크롤 시 각 이미지 마스크 리빌
    useGSAP(() => {
        const masks = gsap.utils.toArray('.brand-contents__img-mask');
        masks.forEach(mask => {
            const img = mask.querySelector('img');
            gsap.from(img, {
                scrollTrigger: {
                    trigger: mask,
                    start: 'top 85%',
                },
                yPercent: 100,
                duration: 1.8,
                ease: 'power4.out'
            });
        });
    }, { scope: contentsRef });

    // brand-banner 마스크 리빌 슬라이드 업 효과 (각 줄마다 따로 올라오도록)
    useGSAP(() => {
        gsap.from('.brand-banner__line', {
            scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top 80%',
            },
            yPercent: 110, // 각 줄별로 자신의 높이만큼만 내려갔다가 올라옴
            duration: 1.5,
            stagger: 0.15, // 0.15초 간격으로 타다닥! 순차적으로 올라옴
            ease: 'power4.out'
        });
    }, { scope: bannerRef });

    // brand-history 텍스트 반응형(Morph) 스플릿 애니메이션
    useGSAP(() => {
        const labelEl = historyLabelRef.current;
        const titleEl = historyTitleRef.current;
        const wrapper = historyStickyWrapRef.current;

        if (!labelEl || !titleEl || !wrapper) return;

        // 1440px 이하(태블릿, 모바일)에서는 모든 GSAP 애니메이션 비활성화 (순수 CSS 스타일만 적용)
        if (window.innerWidth <= 1440) return;

        const mm = gsap.matchMedia();

        // 1441px 이상 (안정적인 데스크탑) 스크린에서만 텍스트 변환 애니메이션 적용
        mm.add("(min-width: 1441px)", () => {
            const morphTl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: () => `top top+=${parseFloat(window.getComputedStyle(wrapper).top) || 250}px`,
                    end: '+=120vh',
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            morphTl.to(labelEl, {
                x: () => {
                    const targetFs = parseFloat(window.getComputedStyle(titleEl).fontSize) || 115;
                    const currentFs = parseFloat(window.getComputedStyle(labelEl).fontSize) || 24;
                    const scale = targetFs / currentFs;
                    const wLabelFinal = labelEl.offsetWidth * scale;
                    let gapStr = window.getComputedStyle(wrapper).columnGap;
                    let gap = gapStr === 'normal' ? 0 : parseFloat(gapStr);
                    if (!gap || isNaN(gap)) gap = window.innerWidth <= 1200 ? window.innerWidth * 0.38 : 666;
                    return -(gap / 2 + wLabelFinal / 2);
                },
                y: () => {
                    const y1 = labelEl.offsetTop + (labelEl.offsetHeight / 2);
                    const y2 = titleEl.offsetTop + (titleEl.offsetHeight / 2);
                    return (y2 - y1) / 2;
                },
                scale: () => {
                    const targetFs = parseFloat(window.getComputedStyle(titleEl).fontSize) || 115;
                    const currentFs = parseFloat(window.getComputedStyle(labelEl).fontSize) || 24;
                    return targetFs / currentFs;
                },
                duration: 1,
                ease: 'power2.inOut',
                transformOrigin: 'center center'
            }, 0)
                .to(titleEl, {
                    x: () => {
                        const wTitleFinal = titleEl.offsetWidth;
                        let gapStr = window.getComputedStyle(wrapper).columnGap;
                        let gap = gapStr === 'normal' ? 0 : parseFloat(gapStr);
                        if (!gap || isNaN(gap)) gap = window.innerWidth <= 1200 ? window.innerWidth * 0.38 : 666;
                        return (gap / 2 + wTitleFinal / 2);
                    },
                    y: () => {
                        const y1 = labelEl.offsetTop + (labelEl.offsetHeight / 2);
                        const y2 = titleEl.offsetTop + (titleEl.offsetHeight / 2);
                        return -(y2 - y1) / 2;
                    },
                    ease: 'power2.inOut',
                    transformOrigin: 'center center'
                }, 0);

            // 가운데 올라오는 이미지들 순차 등장 효과 (PC 전용)
            const items = gsap.utils.toArray('.brand-history__item');
            items.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                });
            });

            // 클린업: 해당 미디어 쿼리를 벗어날 때 실행
            return () => {
                gsap.set([labelEl, titleEl], { clearProps: "all" });
                // 아이템 트윈도 클린업
                gsap.killTweensOf('.brand-history__item');
            };
        });

        // 1440px 이하 (태블릿, 소형 노트북 포함)에서는 애니메이션 절대 금지 및 모든 진행 중인 트윈 강제 중단
        mm.add("(max-width: 1440px)", () => {
            gsap.killTweensOf([labelEl, titleEl]);
            gsap.set([labelEl, titleEl], {
                clearProps: "all",
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                transform: "none"
            });
        });




    }, { scope: historyRef });

    return (
        // <> 대신 <div>를 써야 GSAP이 작동합니다
        <div ref={containerRef} className="brand-page-wrapper">

            {/* 1. Brand Story Section (Block: brand-intro) */}
            <section className="brand-intro" ref={introRef} data-header-theme="light">
                <div className="brand-intro__inner">
                    {/* overflow:hidden wrapper로 텍스트 마스크 효과 */}
                    <div className="brand-intro__mask">
                        <strong className="brand-intro__sub-title">내 손안의 연구소, 메디힐</strong>
                    </div>
                    <div className="brand-intro__mask">
                        <h2 className="brand-intro__main-title">MEDIHEAL LAB</h2>
                    </div>
                </div>
            </section>

            {/* 2. Research Section (Block: brand-research) */}
            <section className="brand-research" ref={researchRef} data-header-theme="dark">
                <div className="brand-research__inner">
                    <div className="brand-research__mask">
                        <h2 className="brand-research__title">수만 번의 테스트로 완성한 정밀 설계</h2>
                    </div>
                    <div className="brand-research__mask">
                        <p className="brand-research__desc">
                            독자적인 성분과 제형 연구를 통해 단순한 제조{" "}
                            <br />그 이상의 피부 해답을 제안합니다.
                        </p>
                    </div>
                </div>
            </section>


            {/* 3. Contents Section (Block: brand-contents) */}
            <section className="brand-contents" ref={contentsRef} data-header-theme="light">
                <div className="brand-contents__inner">
                    {/* con1 영역*/}
                    <div className="brand-contents__box brand-contents__box--primary">
                        <div className="brand-contents__text-wrap">
                            <h2 className="brand-contents__sub-title">BEAUTY <br />LAB STORY</h2>
                            <p className="brand-contents__text">끊임없는 연구와 검증으로 완성한 더마 솔루션의 기록</p>
                        </div>
                        <ul className="brand-contents__list">
                            <li className="brand-contents__item">
                                <div className="brand-contents__img-mask">
                                    <img src={brandStory1} alt="연구 기록 1" className="brand-contents__img" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* con2, con3를 묶는 컨테이너: 가로 배치를 위한 부모 div */}
                    <div className="brand-contents__container">
                        {/* con2 영역 */}
                        <div className="brand-contents__box">
                            <ul className="brand-contents__list">
                                <li className="brand-contents__item">
                                    <div className="brand-contents__img-mask">
                                        <img src={brandStory2} alt="연구 기록 2" className="brand-contents__img" />
                                    </div>
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">연구는 더 깊게, 해답은 더 쉽게</h3>
                                        <p className="brand-contents__item-desc">
                                            메디힐의 노하우가 당신의 일상이 되도록{" "}
                                            <br /> 메디힐은 복잡한
                                            연구의 결과물을 명확한 해답으로 제안합니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="brand-contents__item">
                                    <div className="brand-contents__img-mask">
                                        <img src={brandStory4} alt="연구 기록 3" className="brand-contents__img" />
                                    </div>
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">모든 피부를 위한, 메디힐의 연구</h3>
                                        <p className="brand-contents__item-desc">
                                            피부 타입과 환경의 차이를 넘어{" "}
                                            <br /> 다양한 피부 고민에 대한 솔루션을 탐구합니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* con3 영역 */}
                        <div className="brand-contents__box">
                            <ul className="brand-contents__list">
                                <li className="brand-contents__item">
                                    <div className="brand-contents__img-mask">
                                        <img src={brandStory3} alt="연구 기록 4" className="brand-contents__img" />
                                    </div>
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">31억 장의 기록, 데이터가 증명하는 확신</h3>
                                        <p className="brand-contents__item-desc">
                                            전세계 40여 개국 31억 번의 선택이 메디힐의 데이터가 되었습니다.{" "}
                                            <br />
                                            치밀한 피부 분석을 바탕으로 명확한 기준을 제시합니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="brand-contents__item">
                                    <div className="brand-contents__img-mask">
                                        <img src={brandStory5} alt="연구 기록 5" className="brand-contents__img" />
                                    </div>
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">정밀 과학으로 완성한 건강한 변화</h3>
                                        <p className="brand-contents__item-desc">똑똑한 피부 과학으로 건강한{" "}
                                            <br /> 변화를 이끌어냅니다.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Banner Section (Block: brand-banner) */}
            <section className="brand-banner" ref={bannerRef}>
                <div className="brand-banner__inner">
                    <h2 className="brand-banner__title">
                        <div className="brand-banner__mask">
                            <span className="brand-banner__line">DERMATOLOGY</span>
                        </div>
                        <div className="brand-banner__mask">
                            <span className="brand-banner__line">EFFECTIVE</span>
                        </div>
                        <div className="brand-banner__mask">
                            <span className="brand-banner__line">SIMPLE</span>
                        </div>
                    </h2>
                </div>
            </section>

            {/* 5. History Section (Block: brand-history) */}
            <section className="brand-history" ref={historyRef} data-header-theme="light">
                <div className="brand-history__inner">
                    {/* 상단 텍스트들이 sticky로 화면에 남으면서 갈라지는 래퍼 */}
                    <div className="brand-history__sticky-wrap" ref={historyStickyWrapRef}>
                        <strong className="brand-history__label" ref={historyLabelRef}>MEDIHEAL</strong>
                        <h2 className="brand-history__title" ref={historyTitleRef}>HISTORY</h2>
                    </div>

                    <p className="brand-history__desc">
                        2009년 마스크팩의 혁신으로 시작하여 전 세계인의 피부 고민을 해결하는{" "}
                        <br />글로벌 코스메틱 브랜드로 거듭나기까지의 기록입니다.
                    </p>

                    <div className="brand-history__list-wrap">
                        <ul className="brand-history__list">
                            <li className="brand-history__item">
                                <img src={history1} alt="2009년 기록" className="brand-history__img" />
                                <div className="brand-history__desc-box">
                                    <em className="brand-history__year">2009</em>
                                    <strong className="brand-history__achievement">엘앤피코스메틱 설립</strong>
                                    <p className="brand-history__detail">마스크팩의 고급화 선언 및 코스메슈티컬 시장 개척</p>
                                </div>
                            </li>
                            <li className="brand-history__item">
                                <img src={history2} alt="2010년 기록" className="brand-history__img" />
                                <div className="brand-history__desc-box">
                                    <em className="brand-history__year">2010s EARLY</em>
                                    <strong className="brand-history__achievement">국민 마스크 등극</strong>
                                    <p className="brand-history__detail">국내 판매 1위 기록 및 글로벌 K-뷰티 대표 도약</p>
                                </div>
                            </li>
                            <li className="brand-history__item">
                                <img src={history3} alt="2017년 기록" className="brand-history__img" />
                                <div className="brand-history__desc-box">
                                    <em className="brand-history__year">2017</em>
                                    <strong className="brand-history__achievement">자체 연구소 설립</strong>
                                    <p className="brand-history__detail">R&D 센터 구축을 통한 기술 경쟁력 강화</p>
                                </div>
                            </li>
                            <li className="brand-history__item">
                                <img src={history4} alt="2018년 기록" className="brand-history__img" />
                                <div className="brand-history__desc-box">
                                    <em className="brand-history__year">2018</em>
                                    <strong className="brand-history__achievement">글로벌 시장 성장</strong>
                                    <p className="brand-history__detail">글로벌 시장의 폭발적인 성장 및 유니콘 기업 인정</p>
                                </div>
                            </li>
                            <li className="brand-history__item">
                                <img src={history5} alt="현재 기록" className="brand-history__img" />
                                <div className="brand-history__desc-box">
                                    <em className="brand-history__year">2020s - Present</em>
                                    <strong className="brand-history__achievement">스킨케어 카테고리 다변화</strong>
                                    <p className="brand-history__detail">패드 세럼 크림 등 종합 스킨케어라인업 강화 및 혁신</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;
