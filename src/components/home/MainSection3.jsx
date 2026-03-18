import { sectionData3 } from '@/data/homeData.js';
import ProductItem from './ProductItem';
const MainSection3 = () => {
    return (
        <div className="main__section3">
            <div className="main__section3__inner">
                <div className="main__section3-titleBox">
                    <span>MEDIHEAL PROCESS</span>
                    <div className="main__section3-titleBox-title">
                        <span>연구소에서 개발된 포뮬러가 당신의 피부에 닿기까지—</span>
                        <span>메디힐의 모든 과정은 투명하게 이어집니다.</span>
                    </div>
                </div>
                <div className="main__section3-brandBox">
                    {sectionData3.map((item) => (
                        <ProductItem key={item.id} className={`sec3-${item.id}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection3;
