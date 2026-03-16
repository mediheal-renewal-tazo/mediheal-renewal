import { useState } from 'react';
import InquiryMain from '../../components/inquiry/InquiryMain';
import InquiryWrite from '../../components/inquiry/InquiryWrite';

const Inquiry = () => {
    const [view, setView] = useState('main');

    return (
        <div>
            {view === 'main' && <InquiryMain onWrite={() => setView('write')} />}
            {view === 'write' && <InquiryWrite onCancel={() => setView('main')} />}
        </div>
    );
};

export default Inquiry;
