import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from '@/app/routes/paths';
import RootLayout from '@/app/layouts/RootLayout';
import NotFound from '@/app/routes/NotFound';
import Home from '@/pages/home/Home';
import Ready from '@/pages/ready/Ready';
import Products from '@/pages/shop/Products';
import Brand from '@/pages/brand/Brand';
import Membership from '@/pages/membership/Membership';
import Notice from '@/pages/notice/Notice';
import Kediheal from '@/pages/kediheal/Kediheal';
import MyPage from '@/pages/myPage/MyPage';
import Cart from '@/pages/cart/Cart';
import Inquiry from '@/pages/inquiry/Inquiry';
import Login from '@/pages/login/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path={ROUTE_PATHS.HOME} element={<Home />} />
                <Route path={ROUTE_PATHS.SHOP} element={<Products />} />
                <Route path={ROUTE_PATHS.BRAND} element={<Brand />} />
                <Route path={ROUTE_PATHS.MEMBERSHIP} element={<Membership />} />
                <Route path={ROUTE_PATHS.COMMUNITY} element={<Notice />} />
                <Route path={ROUTE_PATHS.KEDIHEAL} element={<Kediheal />} />
                <Route path={ROUTE_PATHS.MY_PAGE} element={<MyPage />} />
                <Route path={ROUTE_PATHS.CART} element={<Cart />} />
                <Route path={ROUTE_PATHS.INQUIRY} element={<Inquiry />} />
                <Route path={ROUTE_PATHS.READY} element={<Ready />} />
            </Route>
            <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
