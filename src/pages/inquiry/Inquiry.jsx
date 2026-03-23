import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthUser } from '@/utils/auth';
import InquiryMain from '../../components/inquiry/InquiryMain';
import InquiryWrite from '../../components/inquiry/InquiryWrite';
import InquiryDetail from '../../components/inquiry/InquiryDetail';

const Inquiry = () => {
    const [view, setView] = useState('main');
    const [selectedItem, setSelectedItem] = useState(null);
    const [listKey, setListKey] = useState(0);

    const user = getAuthUser();
    if (!user) return <Navigate to="/login" replace />;

    const refresh = () => setListKey((k) => k + 1);

    return (
        <div>
            {view === 'main' && (
                <InquiryMain
                    userId={user.id}
                    listKey={listKey}
                    onWrite={() => setView('write')}
                    onSelect={(item) => { setSelectedItem(item); setView('detail'); }}
                />
            )}
            {view === 'write' && (
                <InquiryWrite
                    onCancel={() => setView('main')}
                    onSubmit={() => { refresh(); setView('main'); }}
                />
            )}
            {view === 'detail' && selectedItem && (
                <InquiryDetail
                    item={selectedItem}
                    onBack={() => setView('main')}
                    onDeleted={() => { refresh(); setView('main'); }}
                    onUpdated={(updated) => setSelectedItem(updated)}
                />
            )}
        </div>
    );
};

export default Inquiry;
