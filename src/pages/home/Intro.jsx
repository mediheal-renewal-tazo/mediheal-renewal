import { useEffect, useState } from 'react';
import './Home.scss';

const FADE_DURATION = 900;
const TITLES = ['MEET', 'THE INGREDIENTS', 'THE MOST EFFICIENT WAY'];

// 카운트 100 도달 후 각 타이틀이 등장하기까지의 딜레이(ms)
const TITLE_DELAYS = [0, 350, 700];
// 마지막 타이틀 등장 후 페이드아웃 시작까지의 딜레이(ms)
const FADE_START_DELAY = 1500;

const Intro = ({ onFadeStart, onFinish }) => {
    const [count, setCount] = useState(1);
    const [fade, setFade] = useState(false);
    const [visibleTitles, setVisibleTitles] = useState([]);

    useEffect(() => {
        let current = 1;
        let finishTimeout;
        let fadeFrame;
        const titleTimeouts = [];

        const interval = setInterval(() => {
            current += 1;
            setCount(current);

            if (current >= 100) {
                clearInterval(interval);

                // 순서대로 타이틀 등장
                TITLE_DELAYS.forEach((delay, index) => {
                    const t = setTimeout(() => {
                        setVisibleTitles((prev) => [...prev, index]);
                    }, delay);
                    titleTimeouts.push(t);
                });

                // 모든 타이틀 등장 후 페이드아웃
                const fadeTimer = setTimeout(() => {
                    fadeFrame = requestAnimationFrame(() => {
                        setFade(true);
                        onFadeStart?.();
                        finishTimeout = setTimeout(() => {
                            onFinish();
                        }, FADE_DURATION);
                    });
                }, FADE_START_DELAY);
                titleTimeouts.push(fadeTimer);
            }
        }, 12);

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(fadeFrame);
            clearTimeout(finishTimeout);
            titleTimeouts.forEach(clearTimeout);
        };
    }, [onFadeStart, onFinish]);

    return (
        <div className={`intro ${fade ? 'intro--fade' : ''}`}>
            <div className="intro__inner">
                <div className="intro__top">
                    <div className="intro__title-group">
                        <div className="intro__count">{String(count).padStart(3, '0')}</div>
                        <h1 className={`intro__title ${visibleTitles.includes(0) ? 'is-visible' : ''}`}>
                            {TITLES[0]}
                        </h1>
                    </div>
                    <h1 className={`intro__title ${visibleTitles.includes(1) ? 'is-visible' : ''}`}>
                        {TITLES[1]}
                    </h1>
                    <h1 className={`intro__title ${visibleTitles.includes(2) ? 'is-visible' : ''}`}>
                        {TITLES[2]}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Intro;
