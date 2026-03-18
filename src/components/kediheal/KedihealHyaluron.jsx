import hyaluronTopImg from '../../assets/images/kediheal/kediheal__hyaluron_top.png';
import hyaluronBottomImg from '../../assets/images/kediheal/kediheal__hyaluron_bottom.png';

const KedihealHyaluron = () => {
    return (
        <section className="kediheal__section kediheal__section--hyaluron">
            <div className="kediheal__hyaluron-inner">
                {/* 상단 왼쪽 텍스트 */}
                <div className="kediheal__hyaluron-block kediheal__hyaluron-block--top-left">
                    <h2 className="kediheal__hyaluron-title">
                        촉촉한 수분, 편안한 정돈
                        <br />
                        히알루론산 토너 패드
                    </h2>
                    <p className="kediheal__hyaluron-subtitle">
                        건조한 피부결에 수분을 채워주고
                        <br />
                        다음 단계가 잘 스며들도록 촉촉하게 준비
                    </p>
                </div>

                {/* 상단 오른쪽 제품 이미지 */}
                <div className="kediheal__hyaluron-image-wrap kediheal__hyaluron-image-wrap--toner">
                    <img
                        src={hyaluronTopImg}
                        alt="Hyaluron Toner Pad"
                        className="kediheal__hyaluron-img"
                    />
                </div>

                {/* 중앙 거대 타이포그래피 */}
                <div className="kediheal__hyaluron-wrap">
                    <div className="kediheal__hyaluron-track">
                        <span className="kediheal__hyaluron-text">HYALURON</span>
                    </div>
                </div>

                {/* 하단 왼쪽 시트 마스크 이미지 */}
                <div className="kediheal__hyaluron-image-wrap kediheal__hyaluron-image-wrap--mask">
                    <img
                        src={hyaluronBottomImg}
                        alt="Hyaluron Mask"
                        className="kediheal__hyaluron-img"
                    />
                </div>

                {/* 하단 오른쪽 텍스트 */}
                <div className="kediheal__hyaluron-block kediheal__hyaluron-block--bottom-right">
                    <h2 className="kediheal__hyaluron-title">
                        수분 진정 & 촉촉 케어
                        <br />
                        히알루론산 시트 마스크
                    </h2>
                    <p className="kediheal__hyaluron-subtitle">
                        마르고 당긴 피부에 수분을 집중 공급해
                        <br />
                        편안하고 촉촉한 피부로 마무리
                    </p>
                </div>
            </div>
        </section>
    );
};

export default KedihealHyaluron;
