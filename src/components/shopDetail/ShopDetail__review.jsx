import React from 'react';
import { useParams } from 'react-router-dom';
import reviewData from '@/data/reviewsData';

const ShopDetail__review = () => {
    const { id } = useParams();
    const reviews = reviewData.filter((review) => review.productId === id);

    return (
        <div className="shopDetail__review">
            {reviews.length === 0 ? (
                <p>리뷰가 없습니다.</p>
            ) : (
                reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <div className="review-top">
                            <div className="review-author-wrap">
                                <span className="author">{review.author}</span>
                                {review.isRepurchase && <span className="repurchase">재구매</span>}
                            </div>
                            <span className="date">{review.date}</span>
                        </div>

                        <div className="review-rating">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                        </div>

                        <div className="review-meta">
                            <span>{review.usagePeriod}</span>
                            <span>{review.skinType}</span>
                            <span>{review.skinConcern}</span>
                        </div>

                        <p className="review-content">{review.content}</p>

                        {review.images?.length > 0 && (
                            <div className="review-images">
                                {review.images.map((img, index) => (
                                    <img
                                        key={`${review.id}-${index}`}
                                        src={img}
                                        alt={`review-${review.id}-${index}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default ShopDetail__review;
