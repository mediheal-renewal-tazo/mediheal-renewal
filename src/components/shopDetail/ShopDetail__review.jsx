import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '@/data/productsData';
import productsDetailData from '@/data/productsDetailData';
import reviewData from '@/data/reviewData';
import SortSelect from '@/components/shop/SortSelect';
import { reviewFilterOptions } from '@/data/sortOptions';
import BigStar from '@/assets/images/product_details/icon/review_bigStar.svg';
import ProductsPagination from '@/components/shop/ProductsPagination';

const ShopDetail__review = () => {
    const { id } = useParams();

    const product = productsData.find((item) => item.id === id);
    const detailProduct = productsDetailData.find((item) => item.id === id);

    const [reviewFilter, setReviewFilter] = useState('all');
    const [reviewSort, setReviewSort] = useState('recommend');
    const [currentPage, setCurrentPage] = useState(1);

    const reviewFilterRef = useRef(null);
    const prevPageRef = useRef(currentPage);

    const reviewTags = detailProduct?.reviewTag ?? [];
    const distribution = detailProduct?.distribution ?? {};
    const rating = product?.rating ?? 0;
    const reviewCount = product?.reviewCount ?? 0;

    const getScoreText = (score) => {
        if (score >= 85) return '아주 만족해요';
        if (score >= 70) return '좋아요';
        if (score >= 55) return '보통이에요';
        if (score >= 40) return '모르겠어요';
        return '별로예요';
    };

    const getTimeAgo = (dateString) => {
        const now = new Date();
        const target = new Date(dateString);

        if (Number.isNaN(target.getTime())) {
            return dateString;
        }

        const diffMs = now - target;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays < 1) return '오늘';
        if (diffDays < 7) return `${diffDays}일 전`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;

        return `${Math.floor(diffDays / 365)}년 전`;
    };

    const handleChangeReviewFilter = (e) => {
        setReviewFilter(e.target.value);
        setCurrentPage(1);
    };

    const handleClickReviewSort = (value) => {
        setReviewSort(value);
        setCurrentPage(1);
    };

    const ratingRows = useMemo(() => {
        return [5, 4, 3, 2, 1].map((star) => {
            const percent = distribution[star] ?? 0;

            return { star, percent };
        });
    }, [distribution]);

    const topTwoStars = useMemo(() => {
        return [...ratingRows]
            .sort((a, b) => b.percent - a.percent)
            .slice(0, 2)
            .map((item) => item.star);
    }, [ratingRows]);

    const filteredReviews = useMemo(() => {
        let reviews = reviewData.filter((review) => review.option === id);

        if (reviewFilter === 'img') {
            reviews = reviews.filter((review) => review.reviewType === 'img');
        }

        if (reviewFilter === 'text') {
            reviews = reviews.filter((review) => review.reviewType === 'text');
        }

        if (reviewSort === 'latest') {
            reviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        if (reviewSort === 'highRating') {
            reviews = [...reviews].sort((a, b) => b.rating - a.rating);
        }

        if (reviewSort === 'recommend') {
            reviews = [...reviews].sort((a, b) => (b.helpful ?? 0) - (a.helpful ?? 0));
        }

        return reviews;
    }, [id, reviewFilter, reviewSort]);

    const reviewsPerPage = 4;
    const totalPage = Math.ceil(filteredReviews.length / reviewsPerPage);

    const pagedReviews = useMemo(() => {
        const startIndex = (currentPage - 1) * reviewsPerPage;
        const endIndex = startIndex + reviewsPerPage;
        return filteredReviews.slice(startIndex, endIndex);
    }, [filteredReviews, currentPage]);

    useEffect(() => {
        if (prevPageRef.current === currentPage) return;
        prevPageRef.current = currentPage;

        if (reviewFilterRef.current) {
            reviewFilterRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [currentPage]);

    return (
        <div className="shopDetail__review">
            <div className="review_statistic">
                <div className="ratingScore">
                    <div className="ratingScore-title">사용자 총 평점</div>

                    <div className="ratingScore-detail">
                        <div className="ratingScore-star">
                            <img src={BigStar} alt="별점" />
                            <span className="ratingScore-value">{rating.toFixed(1)}</span>
                        </div>

                        <div className="ratingScore-count">
                            <strong className="count">{reviewCount}</strong>
                            <span className="text">개 리뷰</span>
                        </div>
                    </div>
                </div>

                <div className="ratingDistribution">
                    <div className="ratingDistribution-title">평점 비율</div>

                    <div className="ratingDistribution-row">
                        {ratingRows.map((item) => {
                            const isTop = topTwoStars.includes(item.star);

                            return (
                                <div className="ratingDistribution-item" key={item.star}>
                                    <span
                                        className={`ratingDistribution-percent ${
                                            !isTop ? 'is-zero' : ''
                                        }`}
                                    >
                                        {Math.round(item.percent)}%
                                    </span>

                                    <div className="ratingDistribution-bar">
                                        <div
                                            className={`ratingDistribution-fill ${
                                                !isTop ? 'is-zero' : ''
                                            }`}
                                            style={{
                                                height: `${item.percent}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="ratingTag">
                    <div className="ratingTag-title">사용자 평가</div>

                    <div className="ratingTag-list">
                        {reviewTags.map((tag, index) => (
                            <div className="ratingTag-item" key={`${tag.label}-${index}`}>
                                <div className="ratingTag-chip-wrap">
                                    <div className="ratingTag-chip">{tag.label}</div>
                                </div>

                                <div className="ratingTagExp">
                                    <span className="ratingTag-text">
                                        {getScoreText(tag.score)}
                                    </span>

                                    <span className="ratingTag-score">{tag.score}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="reviewFilter" ref={reviewFilterRef}>
                <div className="reviewType">
                    <SortSelect
                        value={reviewFilter}
                        onChange={handleChangeReviewFilter}
                        options={reviewFilterOptions}
                    />
                </div>

                <div className="reviewArray">
                    <div
                        className={reviewSort === 'recommend' ? 'active' : ''}
                        onClick={() => handleClickReviewSort('recommend')}
                    >
                        <span>추천순</span>
                    </div>

                    <div
                        className={reviewSort === 'latest' ? 'active' : ''}
                        onClick={() => handleClickReviewSort('latest')}
                    >
                        <span>최신순</span>
                    </div>

                    <div
                        className={reviewSort === 'highRating' ? 'active' : ''}
                        onClick={() => handleClickReviewSort('highRating')}
                    >
                        <span>별점 높은순</span>
                    </div>
                </div>
            </div>

            <div className="reviewWrap">
                <div className="reviewBox">
                    {pagedReviews.map((review, index) => (
                        <div className="reviewCard" key={`${review.id}-${index}`}>
                            <div className="review__userProfile">
                                <div className="review__userlog">
                                    <span className="review__name">{review.author}</span>
                                    <span className="review__date">{getTimeAgo(review.date)}</span>
                                </div>

                                <div className="review__userType">
                                    <div>
                                        <span>사용 기간</span>
                                        <p>{review.usagePeriod}</p>
                                    </div>
                                    <div>
                                        <span>피부타입</span>
                                        <p>{review.skinType}</p>
                                    </div>
                                    <div>
                                        <span>피부고민</span>
                                        <p>{review.skinConcern}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="review__contents">
                                <div className="review__text">
                                    <div className="review__star">
                                        {'★'.repeat(Math.floor(review.rating))}
                                        {'☆'.repeat(5 - Math.floor(review.rating))}
                                    </div>

                                    <span className="review__comment">{review.content}</span>
                                </div>

                                {review.reviewType === 'img' && review.images?.length > 0 && (
                                    <div className="review__imgBox">
                                        {review.images.map((img, i) => (
                                            <img
                                                key={`${review.id}-img-${i}`}
                                                src={img}
                                                alt="리뷰이미지"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <ProductsPagination
                    currentPage={currentPage}
                    totalPage={totalPage}
                    limit={3}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ShopDetail__review;
