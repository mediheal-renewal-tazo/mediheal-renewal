export const ROUTE_PATHS = {
    HOME: '/',
    SHOP: '/shop',
    EVENT: '/event',
    MUSE: '/muse',
    BRAND: '/brand',
    CONTENTS: '/contents',
    MEMBERSHIP: '/membership',
    COMMUNITY: '/notice',
    KEDIHEAL: '/kediheal',
    MY_PAGE: '/mypage',
    CART: '/cart',
    INQUIRY: '/inquiry',
    READY: '/ready',
};

export const HEADER_NAV_ITEMS = [
    { key: 'shop', label: 'SHOP', to: ROUTE_PATHS.SHOP, dropdownKey: 'shop' },
    { key: 'event', label: 'EVENT', to: ROUTE_PATHS.READY, dropdownKey: 'event' },
    { key: 'muse', label: 'MUSE', to: ROUTE_PATHS.READY, dropdownKey: 'muse' },
    { key: 'brand', label: 'BRAND', to: ROUTE_PATHS.BRAND },
    { key: 'contents', label: 'CONTENTS', to: ROUTE_PATHS.READY },
    { key: 'membership', label: 'MEMBERSHIP', to: ROUTE_PATHS.MEMBERSHIP },
    { key: 'community', label: 'COMMUNITY', to: ROUTE_PATHS.COMMUNITY, dropdownKey: 'community' },
    { key: 'kediheal', label: 'KEDIHEAL', to: ROUTE_PATHS.KEDIHEAL },
];

export const DROPDOWN = {
    shop: {
        type: 'mega',
        width: 'full',
        cols: [
            {
                title: '제품',
                items: [
                    { label: '전 제품', to: ROUTE_PATHS.SHOP },
                    { label: 'NEW', to: `${ROUTE_PATHS.SHOP}?product=new` },
                    { label: 'ONLY', to: `${ROUTE_PATHS.SHOP}?product=only` },
                    { label: '마스크팩', to: `${ROUTE_PATHS.SHOP}?product=mask` },
                    { label: '패드', to: `${ROUTE_PATHS.SHOP}?product=pad` },
                    { label: '스킨케어', to: `${ROUTE_PATHS.SHOP}?product=skincare` },
                    { label: '클렌징', to: `${ROUTE_PATHS.SHOP}?product=cleansing` },
                    { label: '선케어', to: `${ROUTE_PATHS.SHOP}?product=suncare` },
                ],
            },
            {
                title: '기능',
                items: [
                    { label: '진정', to: `${ROUTE_PATHS.SHOP}?product=calming` },
                    { label: '수분/보습', to: `${ROUTE_PATHS.SHOP}?product=hydration` },
                    { label: '탄력', to: `${ROUTE_PATHS.SHOP}?product=elasticity` },
                    { label: '흔적', to: `${ROUTE_PATHS.SHOP}?product=marks` },
                    { label: '모공', to: `${ROUTE_PATHS.SHOP}?product=pores` },
                    { label: '미백', to: `${ROUTE_PATHS.SHOP}?product=brightening` },
                    { label: '영양', to: `${ROUTE_PATHS.SHOP}?product=nutrition` },
                ],
            },
            {
                title: '라인',
                items: [
                    { label: '티트리', to: `${ROUTE_PATHS.SHOP}?product=teatree` },
                    {
                        label: '마데카소사이드',
                        to: `${ROUTE_PATHS.SHOP}?product=madecassoside`,
                    },
                    { label: '콜라겐', to: `${ROUTE_PATHS.SHOP}?product=collagen` },
                    { label: '워터마이드', to: `${ROUTE_PATHS.SHOP}?product=watermide` },
                    { label: '비타민', to: `${ROUTE_PATHS.SHOP}?product=vitamin` },
                    { label: '앰플', to: `${ROUTE_PATHS.SHOP}?product=ampoule` },
                    { label: '레티놀', to: `${ROUTE_PATHS.SHOP}?product=retinol` },
                ],
            },
        ],
    },

    event: {
        type: 'single',
        title: 'EVENT',
        items: [
            { label: '이벤트', to: ROUTE_PATHS.READY },
            { label: '쿠폰', to: ROUTE_PATHS.READY },
        ],
    },

    muse: {
        type: 'single',
        title: 'MUSE',
        items: [
            { label: 'PLAVE', to: ROUTE_PATHS.READY },
            { label: 'EUNHYUK', to: ROUTE_PATHS.READY },
            { label: 'JAEJOONG', to: ROUTE_PATHS.READY },
        ],
    },

    community: {
        type: 'single',
        title: 'COMMUNITY',
        items: [
            { label: '마스크팩 가이드', to: ROUTE_PATHS.READY },
            { label: '공지사항', to: `${ROUTE_PATHS.COMMUNITY}/notices` },
        ],
    },
};
