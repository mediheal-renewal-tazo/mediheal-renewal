import myProfileImg from '@/assets/images/mypage/mypage_img1.jpg';
import { getAuthUser } from '@/utils/auth';

const MyProfile = () => {
  const user = getAuthUser();
  const userName = user?.name ?? '게스트';

  return (
    
    <section className="mypage-profile">
      
     
      <div className="mypage-profile__user">
        <div className="mypage-profile__avatar">
          <img src={myProfileImg} alt="홍길동 님 프로필" />
        </div>
        
        <div className="mypage-profile__info">         
          <div className="mypage-profile__name-group">
           <strong className="mypage-profile__name">
        {userName} <span className="mypage-profile__name-suffix">님</span>
    </strong>
            
            <span className="mypage-profile__badge mypage-profile__badge--blue">BLUE</span>
          </div>
          <a href="/membership" className="mypage-profile__link">
            멤버십 혜택을 확인해보세요 &gt;
          </a>
        </div>
      </div>

      <ul className="mypage-profile__assets">
        <li className="mypage-profile__asset-item">
          <span className="mypage-profile__label">쿠폰</span>
          <strong className="mypage-profile__count">1</strong>
        </li>
        <li className="mypage-profile__asset-item">
          <span className="mypage-profile__label">적립금</span>
          <strong className="mypage-profile__count">3,000</strong>
        </li>
      </ul>
    </section>
  ); 
};

export default MyProfile;