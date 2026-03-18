import './loginAll.scss';

const SignUp = ({ onLoginClick }) => {
    return (
        <div className="login login--no-nav">
            <h2 className="login__title">일반 회원가입</h2>

            <form className="login__form">
                <div className="login__input-group">
                    <input className="login__input" type="text" placeholder="이름" />
                    <input className="login__input" type="text" placeholder="아이디" />
                    <input className="login__input" type="email" placeholder="이메일" />
                    <input className="login__input" type="password" placeholder="비밀번호" />
                </div>

                <button type="submit" className="login__btn login__btn--submit login__btn--full">
                    회원가입하기
                </button>
            </form>

            <button type="button" className="login__back-link" onClick={onLoginClick}>
                로그인 페이지로 돌아가기 →
            </button>
        </div>
    );
};

export default SignUp;
