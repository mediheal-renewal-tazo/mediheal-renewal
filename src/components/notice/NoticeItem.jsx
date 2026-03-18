const NoticeItem = ({ num, title, writer, date, views }) => {
    return (
        <tr className="notice-list__row">
            <td className="notice-list__td notice-list__td--num">{num}</td>
            <td className="notice-list__td notice-list__td--title">{title}</td>
            <td className="notice-list__td notice-list__td--writer">{writer}</td>
            <td className="notice-list__td notice-list__td--date">{date}</td>
            <td className="notice-list__td notice-list__td--views">{views}</td>
        </tr>
    );
};

export default NoticeItem;
