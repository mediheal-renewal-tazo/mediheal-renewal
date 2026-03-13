import { useEffect, useState } from 'react';
import './Home.scss';

const FADE_DURATION = 900;
const TITLES = ['MEET', 'THE INGREDIENTS', 'THE MOST EFFICIENT WAY'];
const TOTAL_TITLE_LENGTH = TITLES.reduce((total, title) => total + title.length, 0);

const getVisibleCharacterCounts = (count) => {
    let remaining = Math.floor((Math.min(count, 100) / 100) * TOTAL_TITLE_LENGTH);

    return TITLES.map((title) => {
        const visibleCount = Math.max(0, Math.min(title.length, remaining));
        remaining -= visibleCount;

        return visibleCount;
    });
};

const Intro = ({ onFadeStart, onFinish }) => {
    const [count, setCount] = useState(1);
    const [fade, setFade] = useState(false);
    const visibleCharacterCounts = getVisibleCharacterCounts(count);

    useEffect(() => {
        let current = 1;
        let finishTimeout;
        let fadeFrame;

        const interval = setInterval(() => {
            current += 1;
            setCount(current);

            if (current >= 100) {
                clearInterval(interval);
                fadeFrame = requestAnimationFrame(() => {
                    setFade(true);
                    onFadeStart?.();
                    finishTimeout = setTimeout(() => {
                        onFinish();
                    }, FADE_DURATION);
                });
            }
        }, 12);

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(fadeFrame);
            clearTimeout(finishTimeout);
        };
    }, [onFadeStart, onFinish]);

    return (
        <div className={`intro ${fade ? 'intro--fade' : ''}`}>
            <div className="intro__inner">
                <div className="intro__top">
                    <div className="intro__title-group">
                        <div className="intro__count">{String(count).padStart(3, '0')}</div>
                        {/* <div className="intro__count">{count}</div> */}
                        <h1 className="intro__title">
                            {TITLES[0].split('').map((character, index) => (
                                <span
                                    key={`${character}-${index}`}
                                    className={`intro__char ${index < visibleCharacterCounts[0] ? 'is-visible' : ''}`}
                                >
                                    {character}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <h1 className="intro__title">
                        {TITLES[1].split('').map((character, index) => (
                            <span
                                key={`${character}-${index}`}
                                className={`intro__char ${index < visibleCharacterCounts[1] ? 'is-visible' : ''}`}
                            >
                                {character}
                            </span>
                        ))}
                    </h1>
                    <h1 className="intro__title">
                        {TITLES[2].split('').map((character, index) => (
                            <span
                                key={`${character}-${index}`}
                                className={`intro__char ${index < visibleCharacterCounts[2] ? 'is-visible' : ''}`}
                            >
                                {character}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Intro;
