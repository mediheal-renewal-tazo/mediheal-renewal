import hero_bg from '@/assets/images/home/hero_bg_img.png'
const MainSection1 = () => {
    return (
        <div className="main__section1">
            <div className="main__section1__inner">
                <div className="main__section1__title">
                    <span>PRECISE LIPOSOME TECH</span>
                    <span>SYSTEM</span>
                    <span>DAILY TRACE CARE</span>
                    <span>TESTED BY</span>
                    <span>MEDIHEAL LAB</span>
                </div>
                <div className="main__section1__bgImg">
                    <img src={hero_bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainSection1;
