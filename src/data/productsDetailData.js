import img_70 from '@/assets/images/products/pad/pad_03vitamin.jpg';
import p032_02 from '@/assets/images/product_details/details/teatree01.png';
import p032_03 from '@/assets/images/product_details/details/teatree02.png';
import p085_02 from '@/assets/images/product_details/details/pdrn01.png';
import p085_03 from '@/assets/images/product_details/details/pdrn02.png';
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

const productsDetailData = [
    {
        id: 'p070',
        sub_img1: [img_70],
        sub_img2: [img_70],
        target: ['트러블', '수부지', '잡티있는피부'],
        distribution: {
            5: 95,
            4: 45,
            3: 18,
            2: 7,
            1: 3,
        },
        reviewTag: [
            { label: '트러블케어', score: 75 },
            { label: '잡티제거', score: 82 },
            { label: '진정케어', score: 68 },
        ],
        details_img: [
            ShopDetailsec01,
            ShopDetailsec02,
            ShopDetailsec03,
            ShopDetailsec04,
            ShopDetailsec05,
            ShopDetailsec06,
            ShopDetailsec07,
            ShopDetailsec08,
            ShopDetailsec09,
            ShopDetailsec10,
            ShopDetailsec11,
            ShopDetailsec12,
            ShopDetailsec13,
            ShopDetailsec14,
            ShopDetailsec15,
            ShopDetailsec16,
            ShopDetailsec17,
        ],
    },
    {
        id: 'p032',
        sub_img: [p032_02, p032_03],
        target: ['붉어진피부', '트러블', '예민한피부'],
        distribution: {
            5: 80,
            4: 60,
            3: 35,
            2: 15,
            1: 10,
        },
        reviewTag: [
            { label: '피부케어', score: 78 },
            { label: '진정효과', score: 92 },
            { label: '트러블완화', score: 89 },
        ],
        details_img: [
            ShopDetailsec01,
            ShopDetailsec02,
            ShopDetailsec03,
            ShopDetailsec04,
            ShopDetailsec05,
            ShopDetailsec06,
            ShopDetailsec07,
            ShopDetailsec08,
            ShopDetailsec09,
            ShopDetailsec10,
            ShopDetailsec11,
            ShopDetailsec12,
            ShopDetailsec13,
            ShopDetailsec14,
            ShopDetailsec15,
            ShopDetailsec16,
            ShopDetailsec17,
        ],
    },
    {
        id: 'p085',
        sub_img: [p085_02, p085_03],
        target: ['팔자주름', '늘어진모공', '티존모공'],
        distribution: {
            5: 60,
            4: 40,
            3: 25,
            2: 20,
            1: 18,
        },
        reviewTag: [
            { label: '피부케어', score: 88 },
            { label: '탄력개선', score: 90 },
            { label: '광채', score: 86 },
        ],
        details_img: [
            ShopDetailsec01,
            ShopDetailsec02,
            ShopDetailsec03,
            ShopDetailsec04,
            ShopDetailsec05,
            ShopDetailsec06,
            ShopDetailsec07,
            ShopDetailsec08,
            ShopDetailsec09,
            ShopDetailsec10,
            ShopDetailsec11,
            ShopDetailsec12,
            ShopDetailsec13,
            ShopDetailsec14,
            ShopDetailsec15,
            ShopDetailsec16,
            ShopDetailsec17,
        ],
    },
];

export default productsDetailData;
