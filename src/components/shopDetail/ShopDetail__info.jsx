import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsDetailData from '@/data/productsDetailData';
import arrowDown from '@/assets/images/product_details/icon/icon_2.png';
import arrowUp from '@/assets/images/product_details/icon/icon_9.png';

const ShopDetail__info = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const infoRef = useRef(null);

    const detailProduct = productsDetailData.find((item) => item.id === id);

    const handleClick = () => {
        if (isOpen) {
            const tabBar = document.querySelector('.shopDetail-tap');

            if (tabBar) {
                const y = tabBar.getBoundingClientRect().top + window.scrollY - 80;

                window.scrollTo({
                    top: y,
                    behavior: 'instant',
                });
            }

            setIsOpen(false);
            return;
        }

        setIsOpen(true);
    };

    if (!detailProduct) {
        return <div className="shopDetail__info">상세 이미지 없음</div>;
    }

    const detailImages = detailProduct.details_img ?? [];

    return (
        <div className="shopDetail__info" ref={infoRef}>
            <div className={`shopDetail__imgWrap ${isOpen ? 'open' : ''}`}>
                <div className="shopDetail__img">
                    {detailImages.map((media, index) => {
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

                {!isOpen && <div className="shopDetail__gradient" />}

                {detailImages.length > 0 && (
                    <div className="shopDetail__moreWrap">
                        <button type="button" className="shopDetail__more" onClick={handleClick}>
                            <span>{isOpen ? '상품설명 접기' : '상품설명 더보기'}</span>
                            <img src={isOpen ? arrowUp : arrowDown} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopDetail__info;
