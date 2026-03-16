import { sectionData4 } from "@/data/homeData.js";
import ProductItem from "./ProductItem";

const MainSection4 = () => {
  return (
    <div className="main__section4">
      <div className="main__section4__inner">
        <div className="main__section4-titleBox">
          <span>MEDIHEAL Membership</span>
          <div className="main__section4-titleBox-title">
            <span>메디힐 연구소의 정밀한 데이터로 완성한 고품질 제품들을</span>
            <span>
              매달 드리는 멤버십 전용 할인과 적립 혜택으로 더욱 똑똑한 관리를
              누려보세요.
            </span>
          </div>
        </div>
        <div className="main__section4-membershipBox">
          {sectionData4.map((item) => (
            <ProductItem
              key={item.id}
              className={`sec4-${item.id}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection4;
