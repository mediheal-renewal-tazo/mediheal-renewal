
import iconDeposit from '@/assets/images/mypage/mypage_img2.png'; 
import iconReady from '@/assets/images/mypage/mypage_img3.png';
import iconDelivery from '@/assets/images/mypage/mypage_img4.png';
import iconFinish from '@/assets/images/mypage/mypage_img5.png';
import iconEmpty from '@/assets/images/mypage/mypage_img6.png';


const MyOrders = () => {
    return (
       
        <section className="mypage-orders">
            <h3 className="mypage-orders__title">주문처리현황</h3>

            {/* 주문 상태 박스 */}
            <div className="mypage-orders__box">
                <ul className="mypage-orders__status-list">
                    <li className="mypage-orders__status-item">
                        <div className="mypage-orders__circle">
                            <img src={iconDeposit}alt="입금전 아이콘" className="mypage-orders__icon" />
                            <span className="mypage-orders__number">0</span>
                        </div>
                        <p className="mypage-orders__label">입금전</p>
                    </li>
                    <li className="mypage-orders__status-item">
                        <div className="mypage-orders__circle">
                            <img src={iconReady} alt="배송준비 아이콘" className="mypage-orders__icon" />
                            <span className="mypage-orders__number">0</span>
                        </div>
                        <p className="mypage-orders__label">배송준비</p>
                    </li>
                    <li className="mypage-orders__status-item">
                        <div className="mypage-orders__circle">
                            <img src={iconDelivery} alt="배송중 아이콘" className="mypage-orders__icon" />
                            <span className="mypage-orders__number">0</span>
                        </div>
                        <p className="mypage-orders__label">배송중</p>
                    </li>
                    <li className="mypage-orders__status-item">
                        <div className="mypage-orders__circle">
                            <img src={iconFinish} alt="배송완료 아이콘" className="mypage-orders__icon" />
                            <span className="mypage-orders__number">0</span>
                        </div>
                        <p className="mypage-orders__label">배송완료</p>
                    </li>
                </ul>

              
                <div className="mypage-orders__summary">
                    <div className="mypage-orders__summary-left">
                        <span className="mypage-orders__summary-text">
                            취소 <strong className="mypage-orders__summary-count">0</strong>
                        </span>
                        <span className="mypage-orders__summary-text">
                            교환 <strong className="mypage-orders__summary-count">0</strong>
                        </span>
                        <span className="mypage-orders__summary-text">
                            반품 <strong className="mypage-orders__summary-count">0</strong>
                        </span>
                    </div>
                    <a href="#" className="mypage-orders__detail-link">
                        상세보기 &gt;
                    </a>
                </div>
            </div>

           
            <div className="mypage-orders__empty">
                <img src={iconEmpty} alt="" className="mypage-orders__empty-icon" />
                <p className="mypage-orders__empty-text">최근 3개월 내 주문 내역이 없습니다.</p>
            </div>
        </section>
    );
};

export default MyOrders;