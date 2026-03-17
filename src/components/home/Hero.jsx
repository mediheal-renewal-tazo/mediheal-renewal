import './hero.scss';
import main_hero1 from '@/assets/images/home/main_hero1.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__inner">
                <span className="hero__main-dsc">
                    <p>모든 피부를 위해</p>
                    <p>깊이 있는 피부 과학과 성분 연구에서 시작해</p>
                    <p>복잡한 더마케어에 쉬운 해답을 만듭니다.</p>
                </span>
                <div className="hero__main-img">
                    <img src={main_hero1} alt="main_hero1" />
                </div>
                <div className="hero__sub-img1"></div>
                <div className="hero__sub-img2"></div>
                <div className="hero__sub-img3"></div>
                <div className="hero__sub-img4"></div>
                <div className="hero__sub-img5"></div>
                <div className="hero__sub-img6"></div>
            </div>
        </div>
    );
};

export default Hero;
