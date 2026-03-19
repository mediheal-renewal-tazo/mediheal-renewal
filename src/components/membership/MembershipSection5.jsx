const TERMS = [
    {
        section: '혜택 주의사항',
        items: [
            {
                title: '신규 회원 쿠폰',
                lines: [
                    '2만원 이상 구매시 최대 1만원 할인',
                    '발급일로부터 7일이내 사용 가능',
                    'ID당 1회만 발급 가능',
                ],
            },
            {
                title: '카카오 채널 친구 쿠폰',
                lines: [
                    '2만원 이상 구매시 최대 5천원 할인',
                ],
            },
            {
                title: '첫 구매 무료 배송 쿠폰',
                lines: [
                    '2만원 이상 구매시 최대 1만원 할인',
                    '발급일로부터 30일이내 사용 가능',
                ],
            },
            {
                title: '생일 쿠폰',
                lines: [
                    '2만원 이상 구매시 최대 1만원 할인',
                ],
            },
        ],
    },
    {
        section: '등급 주의사항',
        items: [
            {
                title: '',
                lines: [
                    '멤버십 등급은 해당 등급의 직전 6개월 간의 최종 순구매 환산 금액(쿠폰, 적립금, 배송비 등 제외) 기준으로 매월 1일 새벽 3시경 순차 조정 됩니다.',
                    '각 등급별 부여되는 쿠폰은 매월 1일 오전 8시부터 비월 말까지 사용 가능합니다.',
                    '회원 등급 혜택과 기준은 당사의 사정에 따라 변경될 수 있습니다.',
                ],
            },
        ],
    },
    {
        section: '리뷰 주의사항',
        items: [
            {
                title: '',
                lines: [
                    '할인 혹은 업체의 사진을 무단으로 활용하거나, 상품 리뷰와 무관한 내용은 삭제될 수 있습니다.',
                ],
            },
        ],
    },
];

const MembershipSection5 = () => (
    <section className="membership-sec5" data-header-theme="light">
        <div className="membership-sec5__inner">
            {TERMS.map((group, gi) => (
                <div key={group.section} className="membership-sec5__group">
                    <p className="membership-sec5__section-title">[{group.section}]</p>
                    {group.items.map((item, i) => (
                        <div key={i} className="membership-sec5__term">
                            {item.title && (
                                <span className="membership-sec5__term-title">{item.title}</span>
                            )}
                            <div className="membership-sec5__term-lines">
                                {item.lines.map((line, j) => (
                                    <p key={j}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {gi === 0 && (
                        <p className="membership-sec5__note">
                            * 모든 쿠폰은 고정된 프로모션 및 특가 상품에는 적용 불가합니다.
                        </p>
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default MembershipSection5;
