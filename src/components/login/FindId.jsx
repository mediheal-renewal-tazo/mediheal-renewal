import { useState } from 'react';
import './loginAll.scss';

const FindId = ({ onFindFwClick, onLoginClick }) => {
    const [method, setMethod] = useState('email');

    return (
        <div className="login login--no-nav">
            <h2 className="login__title">아이디 찾기</h2>

            <div className="login__tabs">
                <button className="login__tab login__tab--active">
                    아이디 찾기
                </button>
                <button className="login__tab" onClick={onFindFwClick}>
                    비밀번호 찾기
                </button>
            </div>

            <form className="login__form">
                <div className="login__radio-group">
                    <label className="login__radio-label">
                        <input
                            type="radio"
                            name="findMethod"
                            value="email"
                            checked={method === 'email'}
                            onChange={() => setMethod('email')}
                        />
                        이메일
                    </label>
                    <label className="login__radio-label">
                        <input
                            type="radio"
                            name="findMethod"
                            value="phone"
                            checked={method === 'phone'}
                            onChange={() => setMethod('phone')}
                        />
                        휴대폰 번호
                    </label>
                </div>

                <div className="login__input-group">
                    <input className="login__input" type="text" placeholder="이름" />
                    {method === 'email' && (
                        <input className="login__input" type="email" placeholder="가입 메일 주소" />
                    )}
                    {method === 'phone' && (
                        <input className="login__input" type="tel" placeholder="휴대폰 번호" />
                    )}
                </div>

                <button type="submit" className="login__btn login__btn--submit login__btn--full">
                    확인
                </button>
            </form>

            <button type="button" className="login__back-link" onClick={onLoginClick}>
                로그인 페이지로 돌아가기 →
            </button>
        </div>
    );
};

export default FindId;
