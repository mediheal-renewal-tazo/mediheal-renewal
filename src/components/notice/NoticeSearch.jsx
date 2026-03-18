import { useState } from 'react';
import searchIcon from '../../assets/images/common/header/icon_search.png';
import './notice.scss';

const NoticeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // 검색 로직 추후 구현
        console.log('검색어:', searchTerm);
    };

    return (
        <form className="notice-search" onSubmit={handleSearch}>
            <div className="notice-search__input-wrap">
                <input
                    type="text"
                    className="notice-search__input"
                    placeholder="공지사항을 검색하세요."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="notice-search__btn">
                    <img src={searchIcon} alt="검색" width="24" height="24" />
                </button>
            </div>
        </form>
    );
};

export default NoticeSearch;
