import React from 'react';
import pdrnVisual from '../../assets/images/kediheal/kediheal__pdrn.png';

const KedihealLatest = () => {
    return (
        <section className="kediheal__latest-research">
            <div className="kediheal__latest-research-inner">
                <div className="kediheal__latest-research-header">
                    <h2 className="kediheal__latest-research-title">MEET THE LATEST RESEARCH</h2>
                    <p className="kediheal__latest-research-desc">
                        순도 99% 로즈 PDRN과 메디힐만의 공법으로 만들어낸 모공 개선과 리프팅의
                        솔루션.
                    </p>
                </div>

                <div className="kediheal__latest-research-visual-wrap">
                    <div className="kediheal__latest-research-visual">
                        <img
                            src={pdrnVisual}
                            alt="PDRN product visual"
                            className="kediheal__latest-research-image"
                        />
                    </div>
                </div>

                <div className="kediheal__latest-research-action">
                    <button type="button" className="kediheal__latest-research-btn">
                        <span className="kediheal__latest-research-btn-text">
                            신제품 라인으로 바로가기
                        </span>
                        <span className="kediheal__latest-research-btn-arrow" aria-hidden="true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="24"
                                viewBox="0 0 12 24"
                                fill="none"
                            >
                                <path
                                    d="M2.45199 6.57828L3.51299 5.51828L9.29199 11.2953C9.38514 11.3878 9.45907 11.4979 9.50952 11.6192C9.55997 11.7404 9.58594 11.8705 9.58594 12.0018C9.58594 12.1331 9.55997 12.2631 9.50952 12.3844C9.45907 12.5056 9.38514 12.6157 9.29199 12.7083L3.51299 18.4883L2.45299 17.4283L7.87699 12.0033L2.45199 6.57828Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default KedihealLatest;
