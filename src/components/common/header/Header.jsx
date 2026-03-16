import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_NAV_ITEMS, ROUTE_PATHS } from '@/app/routes/paths';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoImg1 from '@/assets/logos/logo_1.png';
import logoImg2 from '@/assets/logos/logo_2.png';
import './Header.scss';

const Header = ({ theme = 'light' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const logoSrc = theme === 'dark' ? logoImg1 : logoImg2;
    const headerClassName = `header header--${theme}${isMenuOpen ? ' header--menu-open' : ''}${isVisible ? ' header--visible' : ''}`;

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
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
                        <RxHamburgerMenu className="header__menu-line" />
                    </button>
                    <Link className="header__logo" to={ROUTE_PATHS.HOME} aria-label="MEDIHEAL Home">
                        <img className="header__logo-img" src={logoSrc} alt="MEDIHEAL" />
                    </Link>
                </div>

                <div className="header__actions">
                    <button className="header__icon-btn" type="button" aria-label="Search">
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
    );
};

export default Header;
