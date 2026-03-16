import main5_bg from '@/assets/images/home/main5_bg_img.png';
import { sectionData5, sectionData5_1 } from '@/data/homeData.js';
import ProductItem from './ProductItem';

const MainSection5 = () => {
    return (
        <div className="main__section5">
            <div className="main__section5-inner">
                <div className="main__section5-title">
                    <span>THE GLOBALLY RECOGNIZED</span>
                    <span>SELECTION</span>
                    <span>MEDIHEAL LAB RESEARCH</span>
                    <span>SIMPLIFIES</span>
                    <span>DERMA SOLUTIONS</span>
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
