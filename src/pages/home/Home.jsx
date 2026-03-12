import Hero from '../../components/home/Hero';
import MainVisual from '../../components/home/MainVisual';
import { useEffect, useState } from 'react';
import './Home.scss';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div className={`home ${isVisible ? 'is-visible' : ''}`}>
            <div className="home__hero">
                <Hero />
            </div>
            <div className="home__visual">
                <MainVisual />
            </div>
        </div>
    );
};

export default Home;
