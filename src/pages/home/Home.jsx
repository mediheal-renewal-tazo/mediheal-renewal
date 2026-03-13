import Hero from '../../components/home/Hero';
import MainVisual from '../../components/home/MainVisual';
import { useCallback, useState } from 'react';
import './Home.scss';
import Intro from './Intro';
import MainSection1 from '../../components/home/MainSection1';
import MainSection2 from '../../components/home/MainSection2';
import MainSection3 from '../../components/home/MainSection3';
import MainSection4 from '../../components/home/MainSection4';
import MainSection5 from '../../components/home/MainSection5';

const Home = () => {
    const [introFinished, setIntroFinished] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleFadeStart = useCallback(() => {
        setIsVisible(true);
    }, []);

    const handleIntroFinish = useCallback(() => {
        setIntroFinished(true);
    }, []);

    return (
        <div>
            {!introFinished && <Intro onFadeStart={handleFadeStart} onFinish={handleIntroFinish} />}
            <div className={`home ${isVisible ? 'is-visible' : ''}`}>
                <div className="home__hero">
                    <Hero />
                </div>
                <div className="home__visual">
                    <MainVisual />
                    <MainSection1 />
                    <MainSection2 />
                    <MainSection3 />
                    <MainSection4 />
                    <MainSection5 />
                </div>
            </div>
        </div>
    );
};

export default Home;
