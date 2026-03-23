import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '@/utils/auth';
import './loginAll.scss';

const LoginForm = ({ onGuestClick, onSignUpClick, onFindClick }) => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = loginUser(id, password);
        if (success) {
            navigate('/');
        } else {
            setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

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

            <h2 className="login__title">로그인</h2>

            <div className="login__tabs">
                <button className="login__tab login__tab--active">
                    로그인
                </button>
                <button className="login__tab" onClick={onGuestClick}>
                    비회원 배송조회
                </button>
            </div>

            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__input-group">
                    <input
                        className="login__input"
                        type="text"
                        placeholder="아이디"
                        value={id}
                        onChange={(e) => { setId(e.target.value); setError(''); }}
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    />
                </div>

                {error && <p className="login__error">{error}</p>}

                <p className="login__test-hint">테스트 계정: <strong>test</strong> / <strong>test1234</strong></p>

                <div className="login__utils">
                    <button type="button" className="login__find" onClick={onFindClick}>아이디/비밀번호 찾기</button>
                    <label className="login__save">
                        <input type="radio" name="saveId" />
                        아이디 저장
                    </label>
                </div>

                <div className="login__actions">
                    <button type="button" className="login__btn login__btn--signup">회원가입</button>
                    <button type="submit" className="login__btn login__btn--submit">로그인</button>
                </div>
            </form>

            <div className="login__divider">
                <span>또는</span>
            </div>

            <div className="login__social">
                <button className="login__social-btn login__social-btn--kakao">
                    <RiKakaoTalkFill className="login__social-icon" />
                    카카오 1초 로그인/회원가입
                </button>
                <button className="login__social-btn login__social-btn--google">
                    <FcGoogle className="login__social-icon" />
                    Google 계정으로 가입
                </button>
            </div>

            <div className="login__register">
                <p className="login__register-title">아직 메디힐의 회원이 아닌가요?</p>
                <p className="login__register-desc">회원 가입하고 다양한 멤버십 혜택과 서비스를 이용해 보세요!</p>
                <button className="login__register-btn" onClick={onSignUpClick}>일반 회원가입</button>
            </div>
        </div>
    );
};

export default LoginForm;
