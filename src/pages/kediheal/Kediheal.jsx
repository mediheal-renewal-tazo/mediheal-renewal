import './Kediheal.scss';

import KedihealHero from '@/components/kediheal/KedihealHero';
import KedihealTransition from '@/components/kediheal/KedihealTransition';
import KedihealCare from '@/components/kediheal/KedihealCare';
import KedihealHyaluron from '@/components/kediheal/KedihealHyaluron';
import KedihealGlobal from '@/components/kediheal/KedihealGlobal';
import KedihealLatest from '@/components/kediheal/KedihealLatest';
import KedihealFinalCta from '@/components/kediheal/KedihealFinalCta';

const Kediheal = () => {
    return (
        <div className="kediheal">
            <KedihealHero />
            <KedihealTransition />
            <KedihealCare />
            <KedihealHyaluron />
            <KedihealGlobal />
            <KedihealLatest />
            <KedihealFinalCta />
        </div>
    );
};

export default Kediheal;
