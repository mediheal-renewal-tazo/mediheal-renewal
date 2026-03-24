import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';

const MembershipSection5 = () => (
    <section className="membership-sec5" data-header-theme="light">
        <div className="membership-sec5__inner">
            <div className="membership-sec5__top">
                <Link to="/login" className="membership-sec5__title-link">
                    <h2 className="membership-sec5__title">
                        JOIN MEDIHEAL
                        <IoMdArrowForward className="membership-sec5__arrow" />
                    </h2>
                </Link>
                <p className="membership-sec5__sub">지금 바로 메디힐 멤버십을 시작하세요</p>
            </div>


            <div className="membership-sec5__line" />

            <div className="membership-sec5__notes">
                <div className="membership-sec5__note-col">
                    <p className="membership-sec5__note-title">[등급 유의사항]</p>
                    <div className="membership-sec5__note-body">
                        <p>멤버십 등급은 해당 월의 직전 6개월 간의 최종 실구매 확정 금액(쿠폰, 적립금, 배송비 등 제외) 기준으로 매월 1일 새벽 3시경 순차 조정 됩니다.</p>
                        <p>각 등급별 부여되는 쿠폰은 매월 1일 오전 8시부터 당월 말까지 사용 가능합니다.</p>
                        <p>회원 등급 혜택과 기준은 당사의 사정에 따라 변경될 수 있습니다.</p>
                    </div>
                </div>
                <div className="membership-sec5__note-col">
                    <p className="membership-sec5__note-title">[리뷰 유의사항]</p>
                    <div className="membership-sec5__note-body">
                        <p>타인 혹은 업체의 사진을 무단으로 활용하거나, 제품 리뷰와 무관한 내용은 삭제될 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default MembershipSection5;
