import review1_1 from '@/assets/images/review/review1_1.jpg';
import review1_2 from '@/assets/images/review/review1_2.jpg';
import review2_1 from '@/assets/images/review/review2_1.jpg';
import review2_2 from '@/assets/images/review/review2_2.jpg';
import review3_1 from '@/assets/images/review/review3_1.jpg';
import review3_2 from '@/assets/images/review/review3_2.jpg';
import review4_1 from '@/assets/images/review/review4_1.jpg';
import review4_2 from '@/assets/images/review/review4_2.jpg';
import review5_1 from '@/assets/images/review/review5_1.jpg';
import review5_2 from '@/assets/images/review/review5_2.jpg';
import review6_1 from '@/assets/images/review/review6_1.jpg';
import review6_2 from '@/assets/images/review/review6_2.jpg';
import review7_1 from '@/assets/images/review/review7_1.jpg';
import review7_2 from '@/assets/images/review/review7_2.jpg';
import review8_1 from '@/assets/images/review/review8_1.jpg';
import review8_2 from '@/assets/images/review/review8_2.jpg';
import review9_1 from '@/assets/images/review/review9_1.jpg';
import review9_2 from '@/assets/images/review/review9_2.jpg';
import review10_1 from '@/assets/images/review/review10_1.jpg';
import review10_2 from '@/assets/images/review/review10_2.jpg';
import review11_1 from '@/assets/images/review/review11_1.jpg';
import review11_2 from '@/assets/images/review/review11_2.jpg';
import review12_1 from '@/assets/images/review/review12_1.jpg';
import review12_2 from '@/assets/images/review/review12_2.jpg';
import review13_1 from '@/assets/images/review/review13_1.jpg';
import review13_2 from '@/assets/images/review/review13_2.jpg';
import review14_1 from '@/assets/images/review/review14_1.jpg';
import review14_2 from '@/assets/images/review/review14_2.jpg';
import review15_1 from '@/assets/images/review/review15_1.jpg';
import review15_2 from '@/assets/images/review/review15_2.jpg';

const reviewData = [
    {
        id: 1,
        author: '신**',
        date: '4일 전',
        isRepurchase: false,
        rating: 4,
        content: '꾸준히 사용하면서 트러블관리중인데 괜찮아요 포장꼼꼼,배송 빨랐어요',
        usagePeriod: '2개월',
        skinType: '지성',
        skinConcern: '트러블',
        images: [review1_1, review1_2],
    },
    {
        id: 2,
        author: '강**',
        date: '2주 전',
        isRepurchase: true,
        rating: 5,
        content: '항상 사용하는 제품입니다. 화장대에는 늘 대기상태라는거',
        usagePeriod: '1년 이상',
        skinType: '복합성',
        skinConcern: '모공/피지',
        images: [review2_1, review2_2],
    },
    {
        id: 3,
        author: '배**',
        date: '2주 전',
        isRepurchase: false,
        rating: 5,
        content: '잘 산 것 같아 기분이 좋아요. 촉촉하고 끈적임이 없어요.',
        usagePeriod: '1주일',
        skinType: '건성',
        skinConcern: '건조함',
        images: [review3_1, review3_2],
    },
    {
        id: 4,
        author: '비회원',
        date: '2026-02-21',
        isRepurchase: true,
        rating: 5,
        content: '역시 메디힐입니다! 아침저녁으로 쓰기 딱 좋아요.',
        usagePeriod: '6개월',
        skinType: '지성',
        skinConcern: '모공/탄력',
        images: [review4_1, review4_2],
    },
    {
        id: 5,
        author: '이**',
        date: '2026-02-07',
        isRepurchase: true,
        rating: 5,
        content:
            '메디힐 패드는 처음 사용해봤는데 민감성 피부에 너무 잘 맞았어요! 매번 새로운 기초화장품을 바르면 성분이 안맞아서 얼굴이 화끈거리거나 작은 두드러기가 올라왔는데 이 제품은 괜찮아서 놀랐어요',
        usagePeriod: '3개월',
        skinType: '민감성',
        skinConcern: '트러블',
        images: [review5_1, review5_2],
    },
    {
        id: 6,
        author: '박**',
        date: '1달 전',
        isRepurchase: false,
        rating: 4,
        content: '수분감이 터져서 속당김에 최고예요. 향도 은은해서 쓸 때마다 기분이 좋아지네요.',
        usagePeriod: '1개월',
        skinType: '수부지',
        skinConcern: '속당김/수분부족',
        images: [review6_1, review6_2],
    },
    {
        id: 7,
        author: '김**',
        date: '2026-01-15',
        isRepurchase: true,
        rating: 5,
        content: 'N년째 정착템입니다. 환절기마다 뒤집어지는 피부를 싹 잠재워줘요.',
        usagePeriod: '2년 이상',
        skinType: '민감성/복합성',
        skinConcern: '홍조/진정',
        images: [review7_1, review7_2],
    },
    {
        id: 8,
        author: '최**',
        date: '2026-01-02',
        isRepurchase: false,
        rating: 3,
        content:
            '제형은 부드럽게 잘 발리는데 저한테는 유분기가 살짝 많은 느낌이에요. 겨울에는 괜찮을 것 같습니다.',
        usagePeriod: '2주일',
        skinType: '지성',
        skinConcern: '유분/피지',
        images: [review8_1, review8_2],
    },
    {
        id: 9,
        author: '정**',
        date: '2025-12-24',
        isRepurchase: true,
        rating: 5,
        content:
            '미백 효과 보려고 세트 구매해서 꾸준히 썼더니 안색이 맑아진 느낌입니다. 재구매 의사 100%!',
        usagePeriod: '4개월',
        skinType: '중성',
        skinConcern: '칙칙함/미백',
        images: [review9_1, review9_2],
    },
    {
        id: 10,
        author: '윤**',
        date: '2025-12-10',
        isRepurchase: true,
        rating: 5,
        content:
            '화장 전에 스킨팩처럼 올려두면 각질도 정돈되고 베이스 메이크업이 진짜 잘 먹어요. 쟁여두고 씁니다.',
        usagePeriod: '1년',
        skinType: '건성',
        skinConcern: '각질/피부결',
        images: [review10_1, review10_2],
    },
    {
        id: 11,
        author: '송**',
        date: '2025-11-28',
        isRepurchase: false,
        rating: 4,
        content: '친구 추천으로 샀는데 무난하게 쓰기 좋습니다. 아침용으로 좋아요!',
        usagePeriod: '1주일',
        skinType: '지성',
        skinConcern: '유분/피지',
        images: [review11_1, review11_2],
    },
    {
        id: 12,
        author: '조**',
        date: '2025-11-15',
        isRepurchase: true,
        rating: 5,
        content: '패드가 커서 한 장으로 얼굴 전체 닦아내기 충분해요. 에센스 양도 엄청 많네요.',
        usagePeriod: '3개월',
        skinType: '복합성',
        skinConcern: '모공/탄력',
        images: [review12_1, review12_2],
    },
    {
        id: 13,
        author: '백**',
        date: '2025-11-01',
        isRepurchase: true,
        rating: 5,
        content: '냉장고에 넣어뒀다 시원하게 쓰면 쿨링감 대박이에요. 여름에 필수입니다.',
        usagePeriod: '6개월',
        skinType: '수부지',
        skinConcern: '홍조/진정',
        images: [review13_1, review13_2],
    },
    {
        id: 14,
        author: '임**',
        date: '2025-10-20',
        isRepurchase: false,
        rating: 4,
        content: '향이 강하지 않아서 부담없이 쓸 수 있어요. 보습력도 꽤 오래 갑니다.',
        usagePeriod: '2주일',
        skinType: '건성',
        skinConcern: '속당김/수분부족',
        images: [review14_1, review14_2],
    },
    {
        id: 15,
        author: '한**',
        date: '2025-10-05',
        isRepurchase: true,
        rating: 5,
        content: '이거 없으면 스킨케어 못해요. 여행갈 때도 무조건 챙겨가는 애착템!',
        usagePeriod: '2년 이상',
        skinType: '민감성',
        skinConcern: '트러블',
        images: [review15_1, review15_2],
    },
];

export default reviewData;
