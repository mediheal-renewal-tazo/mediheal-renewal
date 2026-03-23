import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/app/routes/paths';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__inner">
                <p className="not-found__code">404</p>
                <h1 className="not-found__title">PAGE NOT FOUND</h1>
                <p className="not-found__desc">
                    요청하신 페이지를 찾을 수 없습니다.
                </p>
                <Link to={ROUTE_PATHS.HOME} className="not-found__btn">
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
