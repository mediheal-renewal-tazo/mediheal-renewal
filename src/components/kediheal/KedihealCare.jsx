import CareCard from './CareCard';
import hyaluronCareMainImg from '../../assets/images/kediheal/care_main.png';
import poreCareImg from '../../assets/images/kediheal/pore_care.png';
import heatCareImg from '../../assets/images/kediheal/heat_care.png';
import gauzePadVideo from '../../assets/videos/kediheal/kediheal_care.mp4';

const KedihealCare = () => {
    const careData = [
        {
            title: '모공 케어',
            subtitle: '모공 결을 정돈하고 매끈한 피부결을 위한<br />자극 부담을 낮춘 데일리 케어',
            mediaType: 'image',
            mediaSource: poreCareImg,
        },
        {
            title: '열감 반응 케어',
            subtitle: '열감으로 예민해진 피부를 편안하게 감싸며<br />진정감을 높여주는 밸런스 케어',
            mediaType: 'image',
            mediaSource: heatCareImg,
        },
        {
            title: '저자극 거즈 패드',
            subtitle:
                '부드러운 터치와 안정적인 밀착감으로<br />자극 부담 없이 편안한 케어를 돕는 거즈 패드',
            mediaType: 'video',
            mediaSource: gauzePadVideo,
        },
    ];

    return (
        <section className="kediheal__section kediheal__section--care">
            <div className="kediheal__care-inner">
                <div className="kediheal__care-left">
                    <div className="kediheal__care-intro">
                        <h2 className="kediheal__care-title">
                            자극은 낮추고
                            <br />
                            진정감은 높이는 케어 구성
                        </h2>
                        <p className="kediheal__care-desc">
                            메디힐의 기록은 세계가 인정한 메디힐 더마 케어의 증명입니다.
                            <br />
                            모든 피부 고민의 해답을 찾는 그날까지
                            <br />
                            메디힐의 연구는 계속됩니다.
                        </p>
                    </div>
                    <div className="kediheal__care-main-image">
                        <img
                            src={hyaluronCareMainImg}
                            alt="Care Main"
                            className="kediheal__care-img"
                        />
                    </div>
                </div>
                <div className="kediheal__care-right">
                    <div className="kediheal__care-list">
                        {careData.map((item, index) => (
                            <CareCard
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                mediaType={item.mediaType}
                                mediaSource={item.mediaSource}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KedihealCare;
