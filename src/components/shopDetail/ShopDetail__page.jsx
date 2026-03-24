import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';
import ShopDetail__main from '@/components/shopDetail/ShopDetail__main';
import ShopDetail__Tap from '@/components/shopDetail/ShopDetail__Tap';
import ShopDetail__info from '@/components/shopDetail/ShopDetail__info';
import ShopDetail__review from '@/components/shopDetail/ShopDetail__review';
import ShopDetail__Guide from '@/components/shopDetail/ShopDetail__Guide';
import topButton from '@/assets/images/product_details/icon/up_btn.svg';
import OpenCart from '@/assets/images/product_details/icon/openCart.svg';
import CloseCart from '@/assets/images/product_details/icon/closeCart.svg';
import ShopDetail__Cart from '@/components/shopDetail/ShopDetail__Cart';
import ShopDetail__Essentialinfo from '@/components/shopDetail/ShopDetail__Essentialinfo';
import '@/components/shopDetail/ShopDetail.scss';

const ShopDetail__page = () => {
    const { id } = useParams();
    const product = productsData.find((item) => item.id === id);

    const [activeTab, setActiveTab] = useState('info');
    const [showTopButton, setShowTopButton] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const tapRef = useRef(null);
    const infoRef = useRef(null);
    const reviewRef = useRef(null);
    const guideRef = useRef(null);

    const scrollToRef = (ref, offset = 120) => {
        if (!ref.current) return;

        const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const openCartDrawer = () => {
        setIsCartOpen(true);
    };

    const closeCartDrawer = () => {
        setIsCartOpen(false);
    };

    const moveToReviewFromMain = () => {
        setActiveTab('review');
        scrollToRef(reviewRef, 120);
    };

    const moveToSection = (tab) => {
        setActiveTab(tab);

        if (tab === 'info') scrollToRef(infoRef, 120);
        if (tab === 'review') scrollToRef(reviewRef, 120);
        if (tab === 'guide') scrollToRef(guideRef, 120);
    };

    useEffect(() => {
        const sections = [
            { key: 'info', ref: infoRef },
            { key: 'review', ref: reviewRef },
            { key: 'guide', ref: guideRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (!visibleSection) return;

                const matched = sections.find(
                    (section) => section.ref.current === visibleSection.target
                );

                if (matched) {
                    setActiveTab(matched.key);
                }
            },
            {
                root: null,
                rootMargin: '-20% 0px -55% 0px',
                threshold: [0.1, 0.3, 0.5, 0.7],
            }
        );

        sections.forEach((section) => {
            if (section.ref.current) observer.observe(section.ref.current);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!tapRef.current) return;

            const tapTop = tapRef.current.getBoundingClientRect().top;

            if (tapTop <= 0) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isCartOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                closeCartDrawer();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <>
            <div className="wrap">
                <div className="Products__detail-inner">
                    <ShopDetail__main moveToReview={moveToReviewFromMain} />

                    <div ref={tapRef}>
                        <ShopDetail__Tap
                            activeTab={activeTab}
                            setActiveTab={moveToSection}
                            reviewCount={product.reviewCount ?? 0}
                        />
                    </div>

                    <section ref={infoRef} className="shopDetail__section">
                        <ShopDetail__info />
                    </section>

                    <ShopDetail__Essentialinfo />

                    <section ref={reviewRef} className="shopDetail__section">
                        <ShopDetail__review />
                    </section>

                    <section ref={guideRef} className="shopDetail__section">
                        <ShopDetail__Guide />
                    </section>
                </div>

                <button
                    type="button"
                    className={`scrollTopButton ${showTopButton ? 'is-visible' : ''}`}
                    onClick={scrollToTop}
                    aria-label="맨 위로 이동"
                >
                    <img src={topButton} alt="" />
                </button>
            </div>

            {createPortal(
                <>
                    <div
                        className={`cartOverlay ${isCartOpen ? 'is-open' : ''}`}
                        onClick={closeCartDrawer}
                    />

                    <aside className={`cartDrawer ${isCartOpen ? 'is-open' : ''}`}>
                        <button
                            type="button"
                            className="cartTriggerButton"
                            onClick={isCartOpen ? closeCartDrawer : openCartDrawer}
                            aria-label="장바구니 패널 열기/닫기"
                        >
                            <img src={isCartOpen ? CloseCart : OpenCart} alt="" />
                        </button>

                        <ShopDetail__Cart />
                    </aside>
                </>,
                document.body
            )}
        </>
    );
};

export default ShopDetail__page;
