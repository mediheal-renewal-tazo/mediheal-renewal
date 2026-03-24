export const ROUTE_PATHS = {
    HOME: '/',
    SHOP: '/shop',
    BRAND: '/brand',
    MEMBERSHIP: '/membership',
    COMMUNITY: '/notice',
    KEDIHEAL: '/kediheal',
    MY_PAGE: '/mypage',
    CART: '/cart',
    INQUIRY: '/inquiry',
    READY: '/ready',
    LOGIN: '/login',
};

export const HEADER_NAV_ITEMS = [
    { key: 'shop', label: 'SHOP', to: ROUTE_PATHS.SHOP, dropdownKey: 'shop' },
    { key: 'brand', label: 'BRAND', to: ROUTE_PATHS.BRAND },
    { key: 'membership', label: 'MEMBERSHIP', to: ROUTE_PATHS.MEMBERSHIP },
    { key: 'community', label: 'COMMUNITY', to: ROUTE_PATHS.COMMUNITY, dropdownKey: 'community' },
    { key: 'kediheal', label: 'KEDIHEAL', to: ROUTE_PATHS.KEDIHEAL },
];
