const NoticeItem = ({ num, title, writer, date, views, content, onSelect }) => {
    return (
        <tr
            className="notice-list__row"
            onClick={() => onSelect({ num, title, writer, date, views, content })}
        >
            <td className="notice-list__td notice-list__td--num">{num}</td>
            <td className="notice-list__td notice-list__td--title">{title}</td>
            <td className="notice-list__td notice-list__td--writer">{writer}</td>
            <td className="notice-list__td notice-list__td--date">{date}</td>
            <td className="notice-list__td notice-list__td--views">{views}</td>
        </tr>
    );
};

export default NoticeItem;
