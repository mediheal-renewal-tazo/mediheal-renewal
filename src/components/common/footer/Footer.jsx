import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/app/routes/paths';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__col footer__col--cs">
                        <p className="footer__label">고객센터</p>
                        <p className="footer__text footer__text--strong">080-860-8400</p>
                    </div>

                    <div className="footer__col footer__col--hours">
                        <p className="footer__label">운영시간</p>
                        <p className="footer__text">
                            OPEN : MON - THU, 10:00 - 18:00 / FRI, 10:00 - 16:00
                        </p>
                        <p className="footer__text">LUNCH : 12:00 - 13:00</p>
                        <p className="footer__text">CLOSE : SAT, SUN, HOLIDAY OFF</p>
                        <p className="footer__text">제휴 및 대량구매 문의 : help@medihealcos.com</p>
                    </div>

                    <div className="footer__col footer__col--business">
                        <p className="footer__label">Business</p>
                        <p className="footer__text">
                            상호 엘앤피코스메틱(주) | 대표 권오섭, 김준원
                        </p>
                        <p className="footer__text">
                            대표번호 · 제품불편상담 080-860-8400 | 개인정보관리책임자 강소진
                        </p>
                        <p className="footer__text">
                            팩스번호 02-2668-4666 | 통신판매업신고번호 2013-서울강서-0610
                        </p>
                        <p className="footer__text">
                            주소 07665 메디힐 빌딩, 서울특별시 강서구 공항대로 516 (등촌동)
                        </p>

                        <div className="footer__links">
                            <a href="#!">회사소개</a>
                            <a href="#!">이용약관</a>
                            <a href="#!">개인정보처리방침</a>
                            <a href="#!">이용안내</a>
                            <Link to={ROUTE_PATHS.INQUIRY}>1:1고객문의</Link>
                        </div>
                    </div>

                    <div className="footer__col footer__col--copy">
                        <p className="footer__text">Copyright © 메디힐</p>
                        <p className="footer__text">all right reserved.</p>
                    </div>
                </div>

                <div className="footer__logo" aria-label="MEDIHEAL">
                    MEDIHEAL
                    {/* <img src={footerLogo} alt="footerLogo" /> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
