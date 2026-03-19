import './Kediheal.scss';

import KedihealHero from '../../components/kediheal/KedihealHero';
import KedihealTransition from '../../components/kediheal/KedihealTransition';
import KedihealCare from '../../components/kediheal/KedihealCare';
import KedihealHyaluron from '../../components/kediheal/KedihealHyaluron';
import KedihealGlobal from '../../components/kediheal/KedihealGlobal';
import KedihealLatest from '../../components/kediheal/KedihealLatest';

const Kediheal = () => {
    return (
        <div className="kediheal">
            <KedihealHero />
            <KedihealTransition />
            <KedihealCare />
            <KedihealHyaluron />
            <KedihealGlobal />
            <KedihealLatest />
        </div>
    );
};

export default Kediheal;
