import Hero from '../../components/home/Hero';
import MainVisual from '../../components/home/MainVisual';
import { useCallback, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        document.body.classList.remove('intro-playing');
    }, []);

    // 인트로 재생 중 헤더 숨김
    useEffect(() => {
        document.body.classList.add('intro-playing');
        return () => document.body.classList.remove('intro-playing');
    }, []);

    // home__visual의 scale(1.2) → scale(1) 전환 완료 후 ScrollTrigger 위치 재계산
    useEffect(() => {
        if (!isVisible) return;
        const id = setTimeout(() => ScrollTrigger.refresh(), 1100);
        return () => clearTimeout(id);
    }, [isVisible]);

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
