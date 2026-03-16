import './loginAll.scss';

const FindFw = ({ onFindIdClick, onLoginClick }) => {
    return (
        <div className="login login--no-nav">
            <h2 className="login__title">비밀번호 찾기</h2>

            <div className="login__tabs">
                <button className="login__tab" onClick={onFindIdClick}>
                    아이디 찾기
                </button>
                <button className="login__tab login__tab--active">비밀번호 찾기</button>
            </div>

            <form className="login__form">
                <div className="login__input-group">
                    <input className="login__input" type="text" placeholder="아이디" />
                    <input className="login__input" type="text" placeholder="이름" />
                    <input className="login__input" type="text" placeholder="전화번호" />
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

export default FindFw;
