import React, { useState } from 'react';
import lateLeft from '../../assets/images/kediheal/late_left.png';
import lateRight from '../../assets/images/kediheal/late_right.png';
import lastestLeftImg from '../../assets/images/kediheal/kediheal__pdrn_left.png';
import lastestRightImg from '../../assets/images/kediheal/kediheal__pdrn_right.png';
import finalCtaBg from '../../assets/images/kediheal/final_cta_bg.png';

const KedihealLatest = () => {
    const [concern, setConcern] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isProductHovered, setIsProductHovered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (concern.trim()) {
            setIsSubmitted(true);
            setConcern(''); // 입력창 비우기

            // 3초 후 오버레이 자동 숨김
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }
    };
    return (
        <>
            <section className="kediheal__section kediheal__section--latest">
                {/* 배경 비주얼 요소 */}
                <div className="kediheal__latest-visual kediheal__latest-visual--right">
                    <img src={lateRight} alt="" />
                </div>
                <div className="kediheal__latest-visual kediheal__latest-visual--left">
                    <img src={lateLeft} alt="" />
                </div>

                <div className="kediheal__latest-inner">
                    {/* 1. 상단 메인 타이포 */}
                    <h2 className="kediheal__latest-main-title">MEDIHEAL's</h2>

                    {/* 2. 좌측 큰 텍스트 블록 (독립적으로 배치) */}
                    <div className="kediheal__latest-left-block">
                        <span className="kediheal__latest-white">LA</span>TEST
                        <br />
                        PRODUCT
                        <br />
                        <span className="kediheal__latest-white">RE</span>SEARCH
                    </div>

                    {/* 3. 우측 PDRN 박스 영역 (독립적으로 배치) */}
                    <div className="kediheal__latest-right-block">
                        <div className="kediheal__latest-pdrn-box">
                            <h3
                                className={`kediheal__latest-pdrn-title ${
                                    isProductHovered ? 'is-hovered' : ''
                                }`}
                            >
                                PDRN
                            </h3>
                            <div className="kediheal__latest-description">
                                <p>순도 99% 식물성 화이트 로즈 PDRN</p>
                                <p>메디힐만의 미세입자 공법으로 만들어낸</p>
                                <p>중안부 모공 개선과 리프팅의 솔루션.</p>
                            </div>
                        </div>
                    </div>

                    <div className="kediheal__latest-bottom-wrap">
                        {/* 4. 하단 제품 이미지 2개 */}
                        <div
                            className="kediheal__latest-products"
                            onMouseEnter={() => setIsProductHovered(true)}
                            onMouseLeave={() => setIsProductHovered(false)}
                        >
                            <div className="kediheal__latest-product-item">
                                <img
                                    src={lastestLeftImg}
                                    alt="Product 01"
                                    className="kediheal__latest-product-img"
                                />
                            </div>
                            <div className="kediheal__latest-product-item">
                                <img
                                    src={lastestRightImg}
                                    alt="Product 02"
                                    className="kediheal__latest-product-img"
                                />
                            </div>
                        </div>

                        {/* 5. 버튼 */}
                        <button className="latest-btn" type="button">
                            <span className="latest-btn__text">신제품 라인으로 바로가기</span>
                            <span className="latest-btn__arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="24"
                                    viewBox="0 0 12 24"
                                    fill="none"
                                >
                                    <path
                                        d="M2.45199 6.57828L3.51299 5.51828L9.29199 11.2953C9.38514 11.3878 9.45907 11.4979 9.50952 11.6192C9.55997 11.7404 9.58594 11.8705 9.58594 12.0018C9.58594 12.1331 9.55997 12.2631 9.50952 12.3844C9.45907 12.5056 9.38514 12.6157 9.29199 12.7083L3.51299 18.4883L2.45299 17.4283L7.87699 12.0033L2.45199 6.57828Z"
                                        fill="var(--GreyScale-grey-500, #474747)"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default KedihealLatest;
