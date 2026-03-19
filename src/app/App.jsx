import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/app/routes';
import ScrollToTop from '@/app/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
