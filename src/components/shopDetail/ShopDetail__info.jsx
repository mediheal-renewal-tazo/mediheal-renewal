import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsDetailData from '@/data/productsDetailData';
import arrowDown from '@/assets/images/product_details/icon/icon_2.png';
import arrowUp from '@/assets/images/product_details/icon/icon_9.png';

const ShopDetail__info = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const detailProduct = productsDetailData.find((item) => item.id === id);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    if (!detailProduct) {
        return <div className="shopDetail__info">상세 이미지 없음</div>;
    }

    const visibleDetails = isOpen
        ? (detailProduct.details_img ?? [])
        : (detailProduct.details_img ?? []).slice(0, 3);

    return (
        <div className="shopDetail__info">
            <div className="shopDetail__img">
                {visibleDetails.map((media, index) => {
                    const mediaSrc = typeof media === 'string' ? media : '';
                    const isVideo = mediaSrc.endsWith('.mp4');

                    return isVideo ? (
                        <video
                            key={`${detailProduct.id}-detail-${index}`}
                            src={mediaSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <img
                            key={`${detailProduct.id}-detail-${index}`}
                            src={mediaSrc}
                            alt={`${detailProduct.id}-detail-${index + 1}`}
                        />
                    );
                })}
            </div>

            {(detailProduct.details_img ?? []).length > 3 && (
                <button type="button" className="shopDetail__more" onClick={handleClick}>
                    <span>{isOpen ? '상품설명 접기' : '상품설명 더보기'}</span>
                    <img src={isOpen ? arrowUp : arrowDown} alt="" />
                </button>
            )}
        </div>
    );
};

export default ShopDetail__info;
