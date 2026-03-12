// 헤더/푸터 공통 레이아웃
// 대부분의 페이지가 Layout 안에서 렌더링 될 것
import { Outlet } from 'react-router-dom';
import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';
import './rootlayout.scss';

const RootLayout = () => {
    return (
        <div className="layout">
            <Header theme="dark" />
            <main className="layout__content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
