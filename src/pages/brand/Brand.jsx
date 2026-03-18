import React from 'react';
import './Brand.scss'
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
    return (
        <>
            {/* 1. Brand Story Section (Block: brand-intro) */}
            <section className="brand-intro">
                <div className="brand-intro__inner">
                    <strong className="brand-intro__sub-title">내 손안의 연구소, 메디힐</strong>
                    <h2 className="brand-intro__main-title">MEDIHEAL LAB</h2>
                </div>
            </section>

            {/* 2. Research Section (Block: brand-research) */}
            <section className="brand-research">
                <div className="brand-research__inner">
                    <h2 className="brand-research__title">수만 번의 테스트로 완성한 정밀 설계</h2>
                    <p className="brand-research__desc">
                        독자적인 성분과 제형 연구를 통해 단순한 제조
                        <br />그 이상의 피부 해답을 제안합니다.
                    </p>
                </div>
            </section>


            {/* 3. Contents Section (Block: brand-contents) */}
            <section className="brand-contents">
                <div className="brand-contents__inner">
                    {/* con1 영역: 상단 단독 박스 */}
                    <div className="brand-contents__box brand-contents__box--primary">
                        <div className="brand-contents__text-wrap">
                            <h2 className="brand-contents__sub-title">BEAUTY <br />LAB STORY</h2>
                            <p className="brand-contents__text">끊임없는 연구와 검증으로 완성한 더마 솔루션의 기록</p>
                        </div>
                        <ul className="brand-contents__list">
                            <li className="brand-contents__item">
                                <img src={brandStory1} alt="연구 기록 1" className="brand-contents__img" />
                            </li>
                        </ul>
                    </div>

                    {/* con2, con3를 묶는 컨테이너: 가로 배치를 위한 부모 div */}
                    <div className="brand-contents__container">
                        {/* con2 영역 */}
                        <div className="brand-contents__box">
                            <ul className="brand-contents__list">
                                <li className="brand-contents__item">
                                    <img src={brandStory2} alt="연구 기록 2" className="brand-contents__img" />
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">연구는 더 깊게, 해답은 더 쉽게</h3>
                                        <p className="brand-contents__item-desc">
                                            메디힐의 노하우가 당신의 일상이 되도록 <br /> 메디힐은 복잡한
                                            연구의 결과물을 명확한 해답으로 제안합니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="brand-contents__item">
                                    <img src={brandStory4} alt="연구 기록 3" className="brand-contents__img" />
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">모든 피부를 위한, 메디힐의 연구</h3>
                                        <p className="brand-contents__item-desc">
                                            피부 타입과 환경의 차이를 넘어 <br /> 다양한 피부 고민에 대한 솔루션을 탐구합니다.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* con3 영역 */}
                        <div className="brand-contents__box">
                            <ul className="brand-contents__list">
                                <li className="brand-contents__item">
                                    <img src={brandStory3} alt="연구 기록 4" className="brand-contents__img" />
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">31억 장의 기록, 데이터가 증명하는 확신</h3>
                                        <p className="brand-contents__item-desc">
                                            전세계 40여 개국 31억 번의 선택이 메디힐의 데이터가 되었습니다.<br />
                                            치밀한 피부 분석을 바탕으로 명확한 기준을 제시합니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="brand-contents__item">
                                    <img src={brandStory5} alt="연구 기록 5" className="brand-contents__img" />
                                    <div className="brand-contents__text-wrap">
                                        <h3 className="brand-contents__item-title">정밀 과학으로 완성한 건강한 변화</h3>
                                        <p className="brand-contents__item-desc">똑똑한 피부 과학으로 건강한 <br /> 변화를 이끌어냅니다.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Banner Section (Block: brand-banner) */}
            <section className="brand-banner">
                <div className="brand-banner__inner">
                    <h2 className="brand-banner__title">
                        DERMATOLOGY <br /> EFFECTIVE <br /> SIMPLE
                    </h2>
                </div>
            </section>

            {/* 5. History Section (Block: brand-history) */}
            <section className="brand-history">
                <div className="brand-history__inner">
                    <strong className="brand-history__label">MEDIHEAL</strong>
                    <h2 className="brand-history__title">HISTORY</h2>
                    <p className="brand-history__desc">
                        2009년 마스크팩의 혁신으로 시작하여 전 세계인의 피부 고민을 해결하는 <br />글로벌
                        코스메틱 브랜드로 거듭나기까지의 기록입니다.
                    </p>

                    <div className="brand-history__list-wrap">
                        <h3 className="brand-history__side-title brand-history__side-title--left">MEDIHEAL</h3>
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
                        <h3 className="brand-history__side-title brand-history__side-title--right">HISTORY</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Brand;
