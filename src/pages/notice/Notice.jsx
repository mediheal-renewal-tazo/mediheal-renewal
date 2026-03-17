import React from 'react';
import NoticeSearch from './NoticeSearch';
import NoticeList from './NoticeList';
import './notice.scss';

const Notice = () => {
    return (
        <div className="notice">
            <div className="notice__header">
                <h2 className="notice__title">공지사항</h2>
            </div>
            <NoticeSearch />
            <NoticeList />
        </div>
    );
};

export default Notice;
