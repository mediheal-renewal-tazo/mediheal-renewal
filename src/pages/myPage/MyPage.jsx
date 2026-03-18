import MyProfile from '@/components/myPage/MyProfile';
import MyPageMenu from '@/components/myPage/MyPageMenu';
import MyOrders from '@/components/myPage/MyOrders';
import './myPage.scss';

const MyPage = () => {
    return (
       
        <section className="mypage-wrapper">
            <div className="mypage-wrapper__inner">
                
              
                <h2 className="mypage-wrapper__title">마이페이지</h2>

          
                <MyProfile />

               
                <div className="mypage-wrapper__content">
                    
                    
                    <aside className="mypage-wrapper__side">
                        <MyPageMenu />
                    </aside>

                   
                    <main className="mypage-wrapper__main">
                        <MyOrders />
                    </main> 

                </div>
            </div>
        </section>
    );
};

export default MyPage;