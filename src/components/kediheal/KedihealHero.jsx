import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import hyaluroHeroImg from '../../assets/images/kediheal/hero.png';

gsap.registerPlugin(ScrollTrigger);

const KedihealHero = () => {
    const container = useRef();

    useGSAP(
        () => {
            const letterEl = container.current?.querySelector('.kediheal__hero-letter');
            if (!letterEl) return;

            let currentLetter = 'M';

            ScrollTrigger.create({
                trigger: container.current,
                start: 'top top',
                end: () => `+=${window.innerHeight * 1.5}`, // 화면 높이에 따라 유동적으로 조절
                scrub: true,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    let nextLetter = 'M';

                    if (progress < 0.33) {
                        nextLetter = 'M';
                    } else if (progress < 0.66) {
                        nextLetter = 'L';
                    } else {
                        nextLetter = 'K';
                    }

                    if (nextLetter !== currentLetter) {
                        currentLetter = nextLetter;

                        gsap.to(letterEl, {
                            opacity: 0,
                            y: -10,
                            filter: 'blur(10px)',
                            duration: 0.18,
                            ease: 'power2.in',
                            onComplete: () => {
                                letterEl.textContent = nextLetter;

                                gsap.fromTo(
                                    letterEl,
                                    {
                                        opacity: 0,
                                        y: 10,
                                        filter: 'blur(10px)',
                                    },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                        duration: 0.18,
                                        ease: 'power2.out',
                                    }
                                );
                            },
                        });
                    }
                },
            });
        },
        { scope: container }
    );

    return (
        <section className="kediheal__section kediheal__section--hero" ref={container}>
            <div className="kediheal__hero-content">
                <h1 className="kediheal__hero-title">
                    <span className="kediheal__hero-letter-wrap">
                        <span className="kediheal__hero-letter">M</span>
                    </span>
                    <span className="kediheal__hero-rest">EDIHEAL</span>
                </h1>
                <p className="kediheal__hero-subtitle">성분연구중심의 제품을 개발합니다</p>
                <div className="kediheal__hero-image-wrapper">
                    <img src={hyaluroHeroImg} alt="Dropper" className="kediheal__dropper-img" />
                </div>
            </div>
        </section>
    );
};

export default KedihealHero;
