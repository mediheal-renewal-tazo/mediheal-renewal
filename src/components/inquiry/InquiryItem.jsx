const InquiryItem = ({ id, userId, title, status, createdAt }) => {
    return (
        <tr className="inquiry__row">
            <td className="inquiry__td inquiry__td--num">{id}</td>
            <td className="inquiry__td inquiry__td--title">{title}</td>
            <td className="inquiry__td inquiry__td--author">{userId}</td>
            <td className="inquiry__td inquiry__td--date">{createdAt}</td>
            <td className="inquiry__td inquiry__td--status">{status}</td>
        </tr>
    );
};

export default InquiryItem;
