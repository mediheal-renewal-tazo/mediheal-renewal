import { useState } from 'react';
import lineheart from '@/assets/images/products/card/line_heart.svg';
import fullheart from '@/assets/images/products/card/full_heart.svg';

const Products__HeartButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();

        setIsLiked((prev) => !prev);

        setIsAnimating(false);
        requestAnimationFrame(() => {
            setIsAnimating(true);
        });

        setTimeout(() => {
            setIsAnimating(false);
        }, 200);
    };

    return (
        <button
            type="button"
            className={`ProductsFavorites ${isAnimating ? 'is-animating' : ''}`}
            onClick={handleClick}
        >
            <img src={isLiked ? fullheart : lineheart} alt="찜하기" className="heart-icon" />
        </button>
    );
};

export default Products__HeartButton;
