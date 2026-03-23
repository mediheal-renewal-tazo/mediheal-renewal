const InquiryItem = ({ id, userId, title, content, status, createdAt, onSelect }) => {
    return (
        <tr className="inquiry__row" onClick={() => onSelect({ id, userId, title, content, status, createdAt })}>
            <td className="inquiry__td inquiry__td--num">{id}</td>
            <td className="inquiry__td inquiry__td--title">{title}</td>
            <td className="inquiry__td inquiry__td--author">{userId}</td>
            <td className="inquiry__td inquiry__td--date">{createdAt}</td>
            <td className="inquiry__td inquiry__td--status">{status}</td>
        </tr>
    );
};

export default InquiryItem;
