import ShopDetailsec01 from '@/assets/images/product_details/madecassoside_pad/sec01.gif';
import ShopDetailsec02 from '@/assets/images/product_details/madecassoside_pad/sec02.png';
import ShopDetailsec03 from '@/assets/images/product_details/madecassoside_pad/sec03.png';
import ShopDetailsec04 from '@/assets/images/product_details/madecassoside_pad/sec04.png';
import ShopDetailsec05 from '@/assets/images/product_details/madecassoside_pad/sec05.mp4';
import ShopDetailsec06 from '@/assets/images/product_details/madecassoside_pad/sec06.png';
import ShopDetailsec07 from '@/assets/images/product_details/madecassoside_pad/sec07.png';
import ShopDetailsec08 from '@/assets/images/product_details/madecassoside_pad/sec08.png';
import ShopDetailsec09 from '@/assets/images/product_details/madecassoside_pad/sec09.png';
import ShopDetailsec10 from '@/assets/images/product_details/madecassoside_pad/sec10.mp4';
import ShopDetailsec11 from '@/assets/images/product_details/madecassoside_pad/sec11.png';
import ShopDetailsec12 from '@/assets/images/product_details/madecassoside_pad/sec12.mp4';
import ShopDetailsec13 from '@/assets/images/product_details/madecassoside_pad/sec13.png';
import ShopDetailsec14 from '@/assets/images/product_details/madecassoside_pad/sec14.png';
import ShopDetailsec15 from '@/assets/images/product_details/madecassoside_pad/sec15.png';
import ShopDetailsec16 from '@/assets/images/product_details/madecassoside_pad/sec16.png';
import ShopDetailsec17 from '@/assets/images/product_details/madecassoside_pad/sec17.jpg';
import { useState } from 'react';
import arrowDown from '@/assets/images/product_details/icon/icon_2.png';
import arrowUp from '@/assets/images/product_details/icon/icon_9.png';

const ShopDetail__info = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className="shopDetail__info">
            <div className="shopDetail__img">
                <img src={ShopDetailsec01} alt="" />
                <img src={ShopDetailsec02} alt="" />
                <img src={ShopDetailsec03} alt="" />
                <img src={ShopDetailsec04} alt="" />
                <img src={ShopDetailsec05} alt="" />
                <img src={ShopDetailsec06} alt="" />
                <img src={ShopDetailsec07} alt="" />
                <img src={ShopDetailsec08} alt="" />
                <img src={ShopDetailsec09} alt="" />
                <img src={ShopDetailsec10} alt="" />
                <img src={ShopDetailsec11} alt="" />
                <img src={ShopDetailsec12} alt="" />
                <img src={ShopDetailsec13} alt="" />
                <img src={ShopDetailsec14} alt="" />
                <img src={ShopDetailsec15} alt="" />
                <img src={ShopDetailsec16} alt="" />
                <img src={ShopDetailsec17} alt="" />
            </div>
            <div className="shopDetail__more" onClick={handleClick}>
                <span>상품설명 더보기</span>
                <img src={isOpen ? arrowUp : arrowDown} alt="" />
            </div>
        </div>
    );
};

export default ShopDetail__info;
