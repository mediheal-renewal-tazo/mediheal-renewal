const REVIEW_POINTS = [
    {
        point: '1,000',
        title: '동영상 리뷰 작성 시',
        sub: '1,000원 적립',
        note: '',
    },
    {
        point: '500',
        title: '포토 리뷰 작성 시',
        sub: '500원 적립',
        note: '',
    },
    {
        point: '300',
        title: '텍스트 리뷰 작성 시',
        sub: '300원 적립',
        note: '(*20자 이상 작성 시)',
    },
];

const MembershipSection4 = () => (
    <section className="membership-sec4" data-header-theme="dark">
        <div className="membership-sec4__inner">
            <div className="membership-sec4__left">
                {REVIEW_POINTS.map((item, i) => (
                    <div key={i} className="membership-sec4__item">
                        <span className="membership-sec4__point">{item.point}</span>
                        <div className="membership-sec4__desc">
                            <p>{item.title}</p>
                            <p>{item.sub}</p>
                            <p className="membership-sec4__note">{item.note}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="membership-sec4__right">
                <h2 className="membership-sec4__title">
                    MEDIHEAL<br />SHOP<br />ONLY BENEFITS
                </h2>
            </div>
        </div>
    </section>
);

export default MembershipSection4;
