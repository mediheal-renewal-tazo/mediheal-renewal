import NoticeList from "@/components/notice/NoticeList";
import NoticeSearch from "@/components/notice/NoticeSearch";
import "./notice.scss"

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
