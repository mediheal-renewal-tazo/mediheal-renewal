// 열 우선 순서: col1 = [0~3], col2 = [4~6], col2 row4 = empty
const BENEFITS = [
    { label: '신규 회원 가입 즉시\n15% 할인쿠폰', sub: '', big: '15', unit: '%' },
    { label: '회원가입&SNS수신동의 후\n3,000원 적립금', sub: '회원가입 2,000원 + 수신동의 1,000원', big: '3', unit: '천원' },
    { label: '메디힐 카카오 친구\n15% 할인쿠폰', sub: '', big: '15', unit: '%' },
    { label: '공식 APP 활성\n5,000원+1,000원 쿠폰', sub: '최초설치 5,000원+PUSH동의 1,000원 쿠폰', big: '6', unit: '천원' },
    { label: 'APP 구매 시\n상시 추가 적립', sub: '', big: 'M', unit: '+' },
    { label: '첫 구매 감사\n무료배송 쿠폰', sub: '', big: '첫', unit: '구매' },
    { label: '생일 축하\n10% 할인 쿠폰', sub: '', big: '10', unit: '%' },
];

const MembershipSection3 = () => (
    <section className="membership-sec3" data-header-theme="light">
        <div className="membership-sec3__inner">
            <p className="membership-sec3__title">메디힐 멤버십 혜택</p>
            <div className="membership-sec3__grid">
                {BENEFITS.map((item, i) => (
                    <div key={i} className="membership-sec3__cell">
                        <div className="membership-sec3__cell-text">
                            <span className="membership-sec3__cell-label">{item.label}</span>
                            <span className="membership-sec3__cell-sub">{item.sub}</span>
                        </div>
                        <div className="membership-sec3__cell-value">
                            <span className="membership-sec3__cell-big">{item.big}</span>
                            <span className="membership-sec3__cell-unit">{item.unit}</span>
                        </div>
                    </div>
                ))}
                {/* 8번째 빈 셀 (col2 row4) */}
                <div className="membership-sec3__cell membership-sec3__cell--empty" />
            </div>
        </div>
    </section>
);

export default MembershipSection3;
