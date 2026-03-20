import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { HEADER_NAV_ITEMS, ROUTE_PATHS } from '@/app/routes/paths';
import { GiHamburgerMenu } from "react-icons/gi";
import logoImg1 from '@/assets/logos/logo_1.png';
import logoImg2 from '@/assets/logos/logo_2.png';
import HeaderSearch from './HeaderSearch';
import './Header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isOverDark, setIsOverDark] = useState(false);
    const location = useLocation();

    const logoSrc = isOverDark ? logoImg2 : logoImg1;
    const headerClassName = [
        'header',
        isOverDark ? '' : 'header--dark',
        isMenuOpen ? 'header--menu-open' : '',
        isVisible ? 'header--visible' : '',
    ].filter(Boolean).join(' ');

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        const handleClickOutside = (e) => {
            if (!e.target.closest('.header')) setIsMenuOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // 현재 헤더 뒤에 있는 배경이 어두운지 밝은지 감지
    useEffect(() => {
        const HEADER_H = 80;
        const sections = document.querySelectorAll('[data-header-theme]');

        if (sections.length === 0) {
            setIsOverDark(false);
            return;
        }

        const getTheme = () => {
            let currentTheme = null;
            let maxTop = -Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < HEADER_H && rect.bottom > 0 && rect.top > maxTop) {
                    maxTop = rect.top;
                    currentTheme = section.dataset.headerTheme;
                }
            });

            // 페이지 최하단 도달 시 footer 감지 fallback
            // (페이지가 짧아 footer가 헤더 존에 못 닿는 경우)
            if (currentTheme === null) {
                const isAtBottom =
                    Math.ceil(window.scrollY + window.innerHeight) >=
                    document.documentElement.scrollHeight;
                if (isAtBottom) {
                    const sectionsArr = Array.from(sections);
                    const last = sectionsArr[sectionsArr.length - 1];
                    if (last) currentTheme = last.dataset.headerTheme;
                }
            }

            return currentTheme === 'dark';
        };

        setIsOverDark(getTheme());

        const handleScroll = () => setIsOverDark(getTheme());
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <>
        {isOverDark && location.pathname === '/' && createPortal(
            <div className="header__clip-overlay" aria-hidden="true">
                <div className="header__inner header__inner--dark">
                    <div className="header__brand">
                        <button className="header__menu-btn" type="button" tabIndex={-1}>
                            <GiHamburgerMenu className="header__menu-line" />
                        </button>
                        <span className="header__logo">
                            <img className="header__logo-img" src={logoImg1} alt="" />
                        </span>
                    </div>
                    <div className="header__actions">
                        <button className="header__icon-btn" type="button" tabIndex={-1}>
                            <div className="header__search-btn">SEARCH</div>
                        </button>
                        <div className="header__icon-btn">
                            <div className="header__login-btn">LOGIN</div>
                        </div>
                        <div className="header__cart-wrap">
                            <div className="header__icon-btn">
                                <div className="header__cart-btn">CART</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )}
        <header className={headerClassName}>
            <div className="header__inner">
                <div className="header__brand">
                    <button
                        className="header__menu-btn"
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <GiHamburgerMenu className="header__menu-line" />
                    </button>
                    <Link className="header__logo" to={ROUTE_PATHS.HOME} aria-label="MEDIHEAL Home">
                        <img className="header__logo-img" src={logoSrc} alt="MEDIHEAL" />
                    </Link>
                </div>

                <div className="header__actions">
                    <button
                        className="header__icon-btn"
                        type="button"
                        aria-label="Search"
                        onClick={() => setIsSearchOpen((prev) => !prev)}
                    >
                        <div className="header__search-btn">SEARCH</div>
                    </button>
                    <Link className="header__icon-btn" to={ROUTE_PATHS.LOGIN} aria-label="My page">
                        <div className="header__login-btn">LOGIN</div>
                    </Link>
                    <div className="header__cart-wrap">
                        <Link className="header__icon-btn" to={ROUTE_PATHS.CART} aria-label="Cart">
                            <div className="header__cart-btn">CART</div>
                        </Link>
                        <span className="header__cart-count">
                            <span className="header__cart-count-text">1</span>
                        </span>
                    </div>
                </div>
            </div>

            <HeaderSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {isMenuOpen ? (
                <nav className="header__mobile-menu" aria-label="Primary menu mobile">
                    <ul className="header__mobile-menu-list">
                        {HEADER_NAV_ITEMS.map((item) => (
                            <li className="header__mobile-menu-item" key={`mobile-${item.to}`}>
                                <Link
                                    className="header__mobile-menu-link"
                                    to={item.to}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) : null}
        </header>
        </>
    );
};

export default Header;
