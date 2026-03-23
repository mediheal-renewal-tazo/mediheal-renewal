const MyPageMenu = () => {
    return (
        /* Block: 마이페이지 메뉴 전체 */
        <nav className="mypage-menu">
            <ul className="mypage-menu__list">
                <li className="mypage-menu__item mypage-menu__item--active">
                    <a href="/orders" className="mypage-menu__link">
                        주문내역조회
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="/profile" className="mypage-menu__link">
                        회원정보
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="/wishlist" className="mypage-menu__link">
                        관심상품
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="#" className="mypage-menu__link">
                        적립금
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="/inquiry" className="mypage-menu__link">
                        1:1 맞춤상담
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="#" className="mypage-menu__link">
                        쿠폰
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="#" className="mypage-menu__link">
                        리뷰관리
                    </a>
                </li>
                <li className="mypage-menu__item">
                    <a href="#" className="mypage-menu__link">
                        배송 주소록 관리
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MyPageMenu;
