import { useState } from 'react';
import NoticeList from "@/components/notice/NoticeList";
import NoticeSearch from "@/components/notice/NoticeSearch";
import NoticeDetail from "@/components/notice/NoticeDetail";
import "./notice.scss"

const Notice = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    if (selectedItem) {
        return (
            <div className="notice">
                <div className="notice__header">
                    <h2 className="notice__title">공지사항</h2>
                </div>
                <NoticeDetail item={selectedItem} onBack={() => setSelectedItem(null)} />
            </div>
        );
    }

    return (
        <div className="notice">
            <div className="notice__header">
                <h2 className="notice__title">공지사항</h2>
            </div>
            <NoticeSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
            <NoticeList onSelect={setSelectedItem} searchTerm={searchTerm} />
        </div>
    );
};

export default Notice;
