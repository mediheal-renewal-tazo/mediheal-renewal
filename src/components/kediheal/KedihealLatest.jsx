import lastestLeftImg from '../../assets/images/kediheal/kediheal__pdrn_left.png';
import lastestRightImg from '../../assets/images/kediheal/kediheal__pdrn_right.png';
import finalCtaBg from '../../assets/images/kediheal/final_cta_bg.png';

const KedihealLatest = () => {
    return (
        <>
            <section className="kediheal__section kediheal__section--latest">
                <div className="kediheal__latest-inner">
                    {/* 1. 상단 메인 타이포 */}
                    <h2 className="kediheal__latest-main-title">MEDIHEAL'S</h2>

                    <div className="kediheal__latest-content-row">
                        {/* 2. 좌측 큰 텍스트 블록 */}
                        <div className="kediheal__latest-left-block">
                            <span>LA</span>TEST
                            <br />
                            PRODUCT
                            <br />
                            <span>RE</span>SEARCH
                        </div>

                        {/* 4. 우측 PDRN 타이포와 설명 */}
                        <div className="kediheal__latest-right-block">
                            <div className="kediheal__latest-pdrn-wrap">
                                <h3 className="kediheal__latest-pdrn-title">PDRN</h3>
                            </div>
                            <div className="kediheal__latest-description">
                                <p>순도 99% 식물성 화이트 로즈 PDRN</p>
                                <p>메디힐만의 미세입자 공법으로 만들어낸</p>
                                <p>중안부 모공 개선과 리프팅의 솔루션.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. 하단 제품 이미지 2개 */}
                    <div className="kediheal__latest-products">
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
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </section>

            <section
                className="kediheal__section kediheal__section--final-cta"
                style={{ backgroundImage: `url(${finalCtaBg})` }}
            >
                <div className="kediheal__final-cta-inner">
                    <h2 className="kediheal__final-cta-title">
                        메디힐은 멈추지 않고 세상의 피부고민이 완전히 없어지는 그날까지
                        고민하겠습니다
                    </h2>
                    <form className="kediheal__final-cta-form">
                        <input
                            type="text"
                            placeholder="당신의 피부고민을 들려주세요"
                            className="kediheal__final-cta-input"
                        />
                        <button type="button" className="kediheal__final-cta-button">
                            함께하기
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default KedihealLatest;
