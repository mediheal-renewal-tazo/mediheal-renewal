import { IoArrowBack } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import './loginAll.scss';

const GuestForm = ({ onLoginClick }) => {
    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="login__nav">
                <button className="login__nav-back" onClick={() => navigate(-1)}>
                    <IoArrowBack />
                </button>
                <Link to="/" className="login__nav-home">
                    <IoHomeOutline />
                </Link>
            </div>

            <h2 className="login__title">비회원 배송조회</h2>

            <div className="login__tabs">
                <button className="login__tab" onClick={onLoginClick}>
                    로그인
                </button>
                <button className="login__tab login__tab--active">비회원 배송조회</button>
            </div>

            <form className="login__form">
                <div className="login__input-group">
                    <input className="login__input" type="text" placeholder="주문자명" />
                    <input className="login__input" type="text" placeholder="주문번호" />
                </div>

                <button type="submit" className="login__btn login__btn--submit login__btn--full">
                    배송조회
                </button>
                <button type="button" className="login__back-link" onClick={onLoginClick}>
                    로그인 페이지로 돌아가기 →
                </button>
            </form>
        </div>
    );
};

export default GuestForm;
