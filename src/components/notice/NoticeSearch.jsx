import searchIcon from '../../assets/images/common/header/icon_search.png';
import './notice.scss';

const NoticeSearch = ({ searchTerm, onSearch }) => {
    return (
        <div className="notice-search">
            <div className="notice-search__input-wrap">
                <input
                    type="text"
                    className="notice-search__input"
                    placeholder="공지사항을 검색하세요."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button type="button" className="notice-search__btn">
                    <img src={searchIcon} alt="검색" width="24" height="24" />
                </button>
            </div>
        </div>
    );
};

export default NoticeSearch;
