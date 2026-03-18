import { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import GuestForm from '../../components/login/GuestForm';
import SignUp from '../../components/login/SignUp';
import FindId from '../../components/login/FindId';
import FindFw from '../../components/login/FindFw';
import './login.scss';

const Login = () => {
    const [view, setView] = useState('login');

    return (
        <div>
            {view === 'login' && (
                <LoginForm
                    onGuestClick={() => setView('guest')}
                    onSignUpClick={() => setView('signup')}
                    onFindClick={() => setView('findId')}
                />
            )}
            {view === 'guest' && <GuestForm onLoginClick={() => setView('login')} />}
            {view === 'signup' && <SignUp onLoginClick={() => setView('login')} />}
            {view === 'findId' && <FindId onFindFwClick={() => setView('findFw')} onLoginClick={() => setView('login')} />}
            {view === 'findFw' && <FindFw onFindIdClick={() => setView('findId')} onLoginClick={() => setView('login')} />}
        </div>
    );
};

export default Login;
