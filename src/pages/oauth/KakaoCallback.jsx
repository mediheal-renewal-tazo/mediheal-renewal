import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');
        if (!code) {
            navigate('/login');
            return;
        }

        const params = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
            redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
            code,
        });

        fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        })
            .then((res) => res.json())
            .then((tokenData) =>
                fetch('https://kapi.kakao.com/v2/user/me', {
                    headers: { Authorization: `Bearer ${tokenData.access_token}` },
                })
            )
            .then((res) => res.json())
            .then((userInfo) => {
                const user = {
                    id: `kakao_${userInfo.id}`,
                    name: userInfo.kakao_account?.profile?.nickname ?? '카카오 사용자',
                };
                localStorage.setItem('mediheal_user', JSON.stringify(user));
                window.dispatchEvent(new Event('authChange'));
                navigate('/');
            })
            .catch(() => navigate('/login'));
    }, [navigate]);

    return <div style={{ padding: '40px', textAlign: 'center' }}>카카오 로그인 중...</div>;
};

export default KakaoCallback;
