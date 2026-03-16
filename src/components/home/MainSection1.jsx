import hero_bg from "@/assets/images/home/hero_bg_img.png";
import { sectionData1 } from "@/data/homeData.js";
import ProductItem from "./ProductItem";

const MainSection1 = () => {
  return (
    <div className="main__section1">
      <div className="main__section1-inner">
        <div className="main__section1-title">
          <span>PRECISE LIPOSOME TECH</span>
          <span>SYSTEM</span>
          <span>DAILY TRACE CARE</span>
          <span>TESTED BY</span>
          <span>MEDIHEAL LAB</span>
        </div>
        <div className="main__section1-productList">
          {sectionData1.map((item) => (
            <ProductItem
              key={item.id}
              className={`sec1-${item.id}`}
              {...item}
            />
          ))}
        </div>
        <div className="main__section1-bgImg">
          <img src={hero_bg} alt="hero_bg" />
        </div>
      </div>
    </div>
  );
};

export default MainSection1;
