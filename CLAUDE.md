# MEDIHEAL TAZO — 프로젝트 가이드

## 프로젝트 개요

MEDIHEAL 스킨케어 브랜드의 e-커머스 웹사이트. React + Vite 기반 순수 프론트엔드 프로젝트. 백엔드 없이 목업 API와 목업 데이터로 동작합니다.

---

## 기술 스택

### 런타임 의존성 (package.json dependencies)

| 패키지 | 버전 | 용도 |
|--------|------|------|
| `react` | ^19.2.0 | UI 프레임워크 |
| `react-dom` | ^19.2.0 | DOM 렌더링 |
| `react-router-dom` | ^7.13.1 | 클라이언트 사이드 라우팅 |
| `gsap` | ^3.14.2 | 스크롤/타임라인 애니메이션 |
| `@gsap/react` | ^2.1.2 | GSAP React 훅 (`useGSAP`) |
| `lenis` | ^1.3.19 | 스무스 스크롤 (GSAP ScrollTrigger 연동) |
| `react-icons` | ^5.6.0 | SVG 아이콘 |
| `pretendard` | ^1.3.9 | Pretendard 폰트 패키지 |

### 개발 의존성 (devDependencies)

| 패키지 | 버전 | 용도 |
|--------|------|------|
| `vite` | ^7.3.1 | 빌드 도구 |
| `@vitejs/plugin-react` | ^5.1.1 | React JSX + HMR |
| `sass-embedded` | ^1.97.3 | SCSS 컴파일러 |
| `eslint` | ^9.39.1 | 린터 |
| `eslint-plugin-react-hooks` | ^7.0.1 | React Hooks 규칙 검사 |
| `eslint-plugin-react-refresh` | ^0.4.24 | React Refresh 검사 |
| `globals` | ^16.5.0 | ESLint 전역 변수 정의 |

**모듈 시스템:** `"type": "module"` (ES Modules)

**폰트:**
- **Pretendard Variable** — 본문, 버튼 (woff2, `/src/styles/font/PretendardVariable.woff2`)
- **PP Mori** — 헤딩/디스플레이 (외부 CDN, weight 500/600)

---

## 개발 명령어

```bash
npm run dev      # 개발 서버 (Vite)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
npm run lint     # ESLint 실행
```

---

## 설정 파일

### vite.config.js
```js
// @/  →  ./src  경로 별칭 하나만 사용
plugins: [react()]
resolve.alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
```

### eslint.config.js
- ESLint 9 **flat config** 형식 사용 (`defineConfig` + `globalIgnores`)
- 대상: `**/*.{js,jsx}`
- 활성 플러그인: `react-hooks`, `react-refresh`
- 커스텀 규칙: `no-unused-vars` → 대문자/언더스코어 시작 변수 허용 (`^[A-Z_]`)

---

## 디렉토리 구조

```
src/
├── app/
│   ├── main.jsx              # React 진입점 (StrictMode, _reset.scss import)
│   ├── App.jsx               # BrowserRouter + ScrollToTop + AppRoutes
│   ├── App.css
│   ├── ScrollToTop.jsx       # pathname/search/hash 변경 시 window.scrollTo(0,0)
│   ├── routes/
│   │   ├── index.jsx         # <Routes> 정의
│   │   ├── paths.js          # ROUTE_PATHS, HEADER_NAV_ITEMS
│   │   ├── guards.jsx        # Protected route (stub)
│   │   ├── NotFound.jsx      # 404 페이지 (구현 완료)
│   │   └── NotFound.scss
│   └── layouts/
│       ├── RootLayout.jsx    # .layout > Header + <main>.layout__content > Outlet + Footer
│       ├── rootlayout.scss
│       ├── AuthLayout.jsx    # stub (빈 컴포넌트)
│       ├── CheckoutLayout.jsx # stub
│       ├── MyPageLayout.jsx  # stub
│       ├── NoticeLayout.jsx  # stub
│       └── ProductsLayout.jsx # stub
├── pages/
│   ├── home/
│   │   ├── Home.jsx          # introFinished + isVisible state, ScrollTrigger.refresh 타이밍
│   │   ├── Intro.jsx         # 전체화면 인트로 애니메이션
│   │   └── Home.scss
│   ├── login/
│   │   ├── Login.jsx         # view state로 LoginForm/GuestForm/SignUp/FindId/FindFw 전환
│   │   └── login.scss
│   ├── signup/
│   │   ├── Signup.jsx        # stub (일반/카카오/구글 회원가입 예정)
│   │   └── signup.scss
│   ├── findAccount/
│   │   ├── FindAccount.jsx   # stub
│   │   └── FindAccount.scss
│   ├── cart/
│   │   ├── Cart.jsx          # step state: 'cart' → 'order' → 'complete' → 'detail'
│   │   └── cart.scss
│   ├── shop/
│   │   ├── Products.jsx      # 상품 목록 페이지 (구현 완료)
│   │   ├── Products.scss
│   │   └── shopDetail/
│   │       ├── shopDetail.jsx # 상품 상세 페이지 래퍼
│   │       └── shopDetail.scss
│   ├── brand/
│   │   ├── Brand.jsx         # GSAP ScrollTrigger 애니메이션 (구현 완료)
│   │   └── Brand.scss
│   ├── membership/
│   │   ├── Membership.jsx    # MembershipSection1~5 조합 (구현 완료)
│   │   └── membership.scss
│   ├── kediheal/
│   │   ├── Kediheal.jsx      # KedihealHero + Transition + Care + Hyaluron + Global + Latest
│   │   └── Kediheal.scss     # 전체 Kediheal 스타일 (반응형 포함)
│   ├── myPage/
│   │   ├── MyPage.jsx        # MyProfile + MyPageMenu + MyOrders (구현 완료)
│   │   └── myPage.scss
│   ├── inquiry/
│   │   ├── Inquiry.jsx
│   │   └── Inquiry.scss
│   ├── notice/
│   │   ├── Notice.jsx
│   │   └── notice.scss
│   └── ready/
│       ├── Ready.jsx         # 미구현 페이지 플레이스홀더
│       └── ready.scss
├── components/
│   ├── common/
│   │   ├── header/
│   │   │   ├── Header.jsx        # isMenuOpen / isSearchOpen / isVisible / isOverDark
│   │   │   │                     # createPortal로 홈 dark-clip 오버레이 렌더링
│   │   │   ├── HeaderSearch.jsx
│   │   │   └── Header.scss
│   │   ├── footer/
│   │   │   ├── Footer.jsx        # data-header-theme="dark"
│   │   │   └── Footer.scss
│   │   ├── modal/
│   │   │   ├── Modal.jsx         # stub
│   │   │   └── Modal.scss
│   │   └── toast/
│   │       ├── Toast.jsx         # stub
│   │       └── Toast.scss
│   ├── home/
│   │   ├── Hero.jsx              # GSAP + Lenis + ScrollTrigger 6단계
│   │   ├── MainVisual.jsx
│   │   ├── MainSection1~5.jsx
│   │   ├── ProductItem.jsx       # className prop으로 BEM 결정하는 범용 상품 카드
│   │   └── hero.scss
│   ├── shop/
│   │   ├── ProductsPage.jsx      # Products 페이지 래퍼
│   │   ├── ProductsMain.jsx      # 필터링/정렬/페이지네이션 로직 (useMemo)
│   │   ├── ProductsCard.jsx      # 상품 카드 (Link 래핑, /shop/:id 이동)
│   │   ├── ProductFilter.jsx     # 카테고리 + 기능성 필터 UI
│   │   ├── ProductsPagination.jsx
│   │   ├── SortSelect.jsx
│   │   ├── Products__HeartButton.jsx  # 위시리스트 토글 버튼
│   │   └── Products.scss
│   ├── shopDetail/
│   │   ├── ShopDetail__page.jsx  # 상세 페이지 컨테이너 (useParams → productsData 조회)
│   │   │                         # IntersectionObserver로 탭 active 감지
│   │   │                         # 카트 드로어(aside) + 오버레이 포함
│   │   ├── ShopDetail__main.jsx  # 상단 상품 정보 (이미지, 이름, 가격, 구매)
│   │   ├── ShopDetail__Tap.jsx   # 고정 탭 바 (상품정보 / 리뷰 / 이용안내)
│   │   ├── ShopDetail__info.jsx  # 상세 이미지/영상 슬라이드
│   │   ├── ShopDetail__review.jsx # 리뷰 섹션
│   │   ├── ShopDetail__Guide.jsx # 이용 안내
│   │   ├── ShopDetail__Cart.jsx  # 드로어 내 장바구니
│   │   └── ShopDetail.scss
│   ├── kediheal/
│   │   ├── KedihealHero.jsx      # 히어로 섹션 (GSAP 타이핑 애니메이션)
│   │   ├── KedihealTransition.jsx # 전환 텍스트 라인
│   │   ├── KedihealCare.jsx      # 케어 솔루션 섹션
│   │   ├── KedihealHyaluron.jsx  # 히알루론 성분 섹션 + 마스크팩 커서 팔로워
│   │   ├── KedihealGlobal.jsx    # 글로벌 시장 섹션 (도시 호버 애니메이션)
│   │   ├── KedihealLatest.jsx    # 최신 제품 + Final CTA 섹션
│   │   ├── CareCard.jsx          # 케어 솔루션 카드 단위
│   │   └── CareCard.scss
│   ├── membership/
│   │   ├── MembershipSection1~5.jsx
│   │   └── membership.scss
│   ├── myPage/
│   │   ├── MyProfile.jsx         # 유저 정보 + 자산(쿠폰/포인트/리뷰) 표시
│   │   ├── MyPageMenu.jsx        # 사이드 메뉴 (반응형 그리드)
│   │   └── MyOrders.jsx          # 주문 현황 + 빈 상태 UI
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   ├── CartTotal.jsx
│   │   ├── OrderStep.jsx / OrderStep.scss
│   │   ├── OrderComplete.jsx / order-complete.scss
│   │   └── order-detail/
│   │       ├── OrderDetail.jsx
│   │       └── order-detail.scss
│   ├── login/
│   │   ├── LoginForm.jsx / SignUp.jsx / FindId.jsx / FindFw.jsx / GuestForm.jsx
│   │   └── loginAll.scss
│   ├── inquiry/
│   │   ├── InquiryMain.jsx / InquiryList.jsx / InquiryItem.jsx / InquiryWrite.jsx
│   │   └── inquiry.scss
│   └── notice/
│       ├── NoticeList.jsx / NoticeItem.jsx / NoticeSearch.jsx
│       └── notice.scss
├── api/                      # 목업 API 8개 모듈 (auth/cart/inquiries/notices/products/reviews/users/wishlist)
├── data/
│   ├── homeData.js           # 홈 섹션 1~5 정적 데이터
│   ├── productsData.js       # 상품 목록 (115개 이미지 모듈 import + 상품 배열)
│   ├── productsDetailData.js # 상세 페이지 전용 데이터 (sub_img, 리뷰 분포, 태그, 상세 이미지)
│   ├── productsFilterData.js # categoryList (카테고리 아이콘 + value)
│   ├── sortOptions.js        # productSortOptions 배열
│   ├── noticeData.js
│   ├── inquiriesData.js
│   ├── reviewData.js         # 리뷰 이미지 데이터
│   ├── userData.js
│   └── wishlistData.js
├── mock/                     # API가 참조하는 목업 원본 배열 (메모리 내 mutate)
├── store/                    # 모두 빈 파일
│   ├── auth.store.js
│   ├── cart.store.js
│   └── ui.store.js
├── constants/                # 모두 빈 파일 (1줄짜리 빈 파일)
│   ├── authProviders.js
│   ├── checkoutSteps.js
│   ├── menu.js
│   └── mypageTabs.js
├── styles/
│   ├── _reset.scss           # CSS 리셋 + 폰트 선언
│   ├── _variables.scss       # 빈 파일
│   ├── _mixins.scss          # 빈 파일
│   └── global.scss           # 빈 파일
├── utils/
│   ├── delay.js              # export const delay = (ms=300) => new Promise(resolve => setTimeout(resolve, ms))
│   ├── format.js             # 빈 파일
│   └── storage.js            # 빈 파일
└── assets/
    ├── logos/                # logo_1.png (dark bg), logo_2.png (light bg), footer_logo.png
    ├── images/
    │   ├── home/             # hero00~07_fin.png, sec 이미지
    │   ├── common/           # header/footer 아이콘
    │   ├── brand/            # brandstory_img1~5, history_img1~5
    │   ├── kediheal/         # hero, care, hyaluron, latest 이미지, mask_cursor.png
    │   ├── mypage/           # mypage_img1~6
    │   ├── products/         # mask/pad/skincare/cleanser/sun/card/category 이미지
    │   └── product_details/  # pack/pad 상세 이미지, review 이미지, madecassoside_pad 영상/이미지
    └── videos/
        └── kediheal/         # kediheal_care.mp4
```

---

## 라우팅

| 경로 | 상수 키 | 페이지 | 상태 |
|------|---------|--------|------|
| `/` | `HOME` | Home | 구현 완료 |
| `/login` | `LOGIN` | Login | 구현 완료 (RootLayout 제외) |
| `/shop` | `SHOP` | Products | **구현 완료** |
| `/shop/:id` | — | ShopDetail | **구현 완료** |
| `/brand` | `BRAND` | Brand | 구현 완료 |
| `/membership` | `MEMBERSHIP` | Membership | **구현 완료** |
| `/notice` | `COMMUNITY` | Notice | 구현 완료 |
| `/kediheal` | `KEDIHEAL` | Kediheal | **구현 완료** |
| `/mypage` | `MY_PAGE` | MyPage | **구현 완료** |
| `/cart` | `CART` | Cart | 구현 완료 |
| `/inquiry` | `INQUIRY` | Inquiry | 구현 완료 |
| `/ready` | `READY` | Ready | 미구현 플레이스홀더 |
| `*` | — | NotFound | **구현 완료** (404) |

**미라우팅 페이지 (파일만 존재):**
- `/signup` — `pages/signup/Signup.jsx` (stub)
- `findAccount` — `pages/findAccount/FindAccount.jsx` (stub)

**Login은 RootLayout 밖** — Header/Footer 없이 독립 렌더링.
나머지 모든 라우트는 `RootLayout` (Header + Footer) 적용.

---

## 코딩 컨벤션

### CSS 클래스 네이밍 — BEM (기준)

```
.{block}
.{block}__element
.{block}__element--modifier
```

**실제 사용 예:**
```scss
.hero__main-dsc-wrap          // element
.hero__main-dsc-wrap--visible // element + modifier
.header--dark                 // block + modifier
.mypage-orders__status-item   // element
.is-active / .is-visible      // 상태 클래스 (독립 클래스)
```

**주의: shop 컴포넌트는 BEM을 따르지 않는 부분이 있음**
- `ProductsCard`, `ShopDetail__*` 컴포넌트는 PascalCase 클래스명 사용 (`Products__card-wrap`, `ProductsImage`, `Products__Name`)
- `ShopDetail__page`, `ShopDetail__main` 등 컴포넌트 파일명에 더블 언더스코어 사용 — BEM과 다른 별도 네이밍 규칙

### JavaScript / JSX 컨벤션

- **언어:** 순수 JavaScript (TypeScript 없음, PropTypes 없음)
- **컴포넌트 파일:** PascalCase `.jsx` (예: `ProductItem.jsx`)
  - 예외: `ShopDetail__page.jsx` 등 일부 shopDetail 컴포넌트는 더블 언더스코어 패턴 사용
- **스타일 파일:** 컴포넌트와 같은 디렉토리, 소문자/camelCase `.scss`
- **데이터 상수:** UPPER_SNAKE_CASE (예: `FADE_MS`, `ROUTE_PATHS`)
- **함수형 컴포넌트만** 사용 (class 컴포넌트 없음)
- **import 경로:** `@/` 별칭으로 `src/` 기준 절대경로 사용
  - 예외: `pages/kediheal/Kediheal.jsx`는 상대경로(`../../`) 사용 — 통일 필요

### SCSS `@use` 규칙
- `@use 'sass:math'`는 파일 **맨 위**에 선언해야 함 (다른 선언 이전)
- Dart Sass에서 `/` 나눗셈 연산자는 deprecated → `math.div()` 사용

### 컴포넌트 분리 원칙 (3단계 패턴)
```
Page (pages/) → Main/Page (components/…/Main.jsx) → Card/Item (components/…/Card.jsx)
```
예: `Products.jsx` → `ProductsMain.jsx` → `ProductsCard.jsx`

---

## 홈 페이지 구성

Home 페이지 렌더링 순서:

1. **Intro** — 전체화면 인트로 (카운터 1→100 후 TITLES 슬라이드업, 900ms 페이드 후 제거)
2. **Hero** — GSAP + Lenis 6단계 스크롤 애니메이션 + 3D CSS 큐브
3. **MainVisual** — 텍스트 디자인 섹션 (EN↔KO 호버 페이드)
4. **MainSection1** — 배경 이미지 + 상품 4개
5. **MainSection2** — MEDIHEAL BEST 5개 상품 (수평 스크롤 scrub)
6. **MainSection3** — R&D Lab 4개 카드
7. **MainSection4** — 멤버십 4단계 카드
8. **MainSection5** — 성분 마키 무한스크롤

### Hero 섹션 6단계 애니메이션 (GSAP ScrollTrigger)

```
Phase 1 (0~40%):  마스크 shrink + 8개 이미지 weighted 순환 + 메인 텍스트 y:-200px
Phase 2 (40~55%): 마지막 이미지 scale 1→1.51
Phase 3 (55~70%): 마스크 페이드아웃 + 3D 큐브 등장
Phase 4 (70~85%): 큐브 rotateY 0→-90deg
Phase 5 (85~100%): character-by-character 텍스트 리빌
Phase 6 (100%+):  홀드 상태
```

**Lenis 연동 패턴:**
```js
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### EN↔KO 호버 페이드 패턴 (공통)
```js
const FADE_MS = 200;
const timer = useRef(null);
const handleEnter = () => {
    clearTimeout(timer.current);
    setVisible(false);
    timer.current = setTimeout(() => { setShowKo(true); setVisible(true); }, FADE_MS);
};
```

### Header 동적 테마 감지
- 섹션에 `data-header-theme="dark"` 속성 → 헤더가 스크롤 위치에 따라 자동 색상 전환
- Footer: `data-header-theme="dark"` 적용됨
- **홈 페이지 전용:** `createPortal`로 `document.body`에 `.header__clip-overlay` 렌더링
  (Hero의 `--hero-mask-clip` CSS 변수와 연동되어 마스크 클리핑 효과 구현)

---

## 컴포넌트 상세

### 상품 목록 (Shop / Products)

```
ProductsMain
├── selectedCategory: 'all' | 'new' | 'only' | 'mask' | 'pad' | 'skincare' | 'cleanser' | 'sun'
├── selectedFilters: string[]  (기능성/성분 다중 선택)
├── sortType: 'new' | 'name' | 'lowPrice' | 'highPrice' | 'brand' | 'popular' | 'review'
└── currentPage: number (16개/페이지)

필터 우선순위: category → function/ingredient 필터 → best 제품 앞 정렬 → sortType
```

- `productsData.js`의 각 상품 객체: `{ id, name, description, price, discountPrice, discountRate, category, function[], ingredient, images[], best?, only?, salesCount?, reviewCount?, createdAt }`
- `best: true` 상품은 항상 목록 최상단 고정 (정렬 후에도 유지)
- `ProductsCard`에서 `p070`, `p032`, `p085` id를 가진 상품만 상세 페이지(`/shop/:id`) 링크 활성화

### 상품 상세 (ShopDetail)

```
ShopDetail__page (useParams → productsData 조회)
├── activeTab: 'info' | 'review' | 'guide'  (IntersectionObserver로 자동 감지)
├── showTopButton: boolean  (탭바 고정 이후 표시)
└── isCartOpen: boolean  (우측 드로어 장바구니)
```

- `productsDetailData.js`에서 동일 `id`로 상세 데이터 조회 (sub_img, 리뷰 분포, 상세 이미지 배열)
- 카트 드로어: `aside.cartDrawer.is-open` + `div.cartOverlay.is-open` 패턴
- body `overflow: hidden` 드로어 열림 시 적용

### Kediheal 페이지 구성

```
Kediheal
├── KedihealHero      — 히어로 이미지 + 타이핑 텍스트
├── KedihealTransition — 섹션 전환 텍스트
├── KedihealCare      — CareCard 3개 (이미지, 제목, 설명)
├── KedihealHyaluron  — 히알루론 성분 + 마스크팩 커서 팔로워 (cursor: none)
├── KedihealGlobal    — 글로벌 도시 목록 (is-active/is-dimmed 토글)
└── KedihealLatest    — 최신 제품 + Final CTA(이메일 수집 폼)
```

`Kediheal.scss`는 `@use 'sass:math'`를 파일 최상단에 선언해야 함.

### Cart 스텝 플로우
```
step = 'cart' → 'order' → 'complete' → 'detail'
```
배송비: 선택 상품 합계 < 20,000원 → 3,000원, 이상 → 무료

### MyPage 구성
```
MyPage
├── MyProfile  — 유저 아바타 + 이름/등급 뱃지 + 자산(쿠폰/포인트/리뷰 수)
├── MyPageMenu — 사이드 메뉴 목록 (태블릿: 4열 그리드, 모바일: 2열 그리드)
└── MyOrders   — 주문 현황 (결제대기/배송준비/배송중/배송완료 4단계) + 빈 상태 UI
```

### Login 뷰 전환
```
view = 'login' | 'guest' | 'signup' | 'findId' | 'findFw'
```
URL 라우트 없이 `view` state로 하위 폼 전환.

### ProductItem (홈 범용 상품 카드)
```jsx
<ProductItem
  className="sec2-1"   // main__productItem-{className} BEM 결정
  img={img} hoverImg={hoverImg}
  productName={} price={} addr={} title={} dsc={}
  contition={} grade={} benefit={} num={} sub={}
/>
```
모든 prop 선택적 — falsy면 렌더링 생략.

---

## 목업 API

`src/api/`에 위치. `delay()` 유틸로 네트워크 지연 시뮬레이션.

| 파일 | 주요 함수 |
|------|-----------|
| `auth.api.js` | `login`, `signup`, `getCurrentUser`, `logout` |
| `products.api.js` | `getProducts(params)`, `getProductById`, `getRelatedProducts` |
| `cart.api.js` | `getCart`, `addCartItem`, `updateCartItem`, `removeCartItem`, `clearCart` |
| `wishlist.api.js` | `getWishlist`, `toggleWishlist` 등 |
| `notices.api.js` | `getNotices`, `getNoticeById` |
| `reviews.api.js` | `getReviewsByProduct`, `createReview`, `deleteReview` |
| `inquiries.api.js` | `getInquiriesByUser`, `createInquiry`, `deleteInquiry`, `updateInquiry` |
| `users.api.js` | `getUsers`, `getUserById`, `updateUserProfile` 등 |

**데이터 소스 2곳:**
- `src/data/` — 컴포넌트가 직접 import하는 정적 데이터
- `src/mock/` — API 함수가 참조하는 목업 원본 배열 (메모리 내 mutate)

---

## 데이터 스키마

### Product (productsData.js)
```js
{ id, name, description, price, discountPrice, discountRate,
  category, function[], ingredient, images[],
  best?, only?, salesCount?, reviewCount?, createdAt }
```
- `category`: mask | pad | skincare | cleanser | sun
- `function[]`: 영양 | 진정 | 보습 | 트러블 등 (한국어 문자열)

### ProductDetail (productsDetailData.js)
```js
{ id,  // productsData.id와 동일한 키로 연결
  sub_img1[], sub_img2[],
  target[],
  distribution: { 5: N, 4: N, 3: N, 2: N, 1: N },
  reviewTag: [{ label, score }],
  details_img[]  // 이미지/mp4 경로 배열 (gif/png/mp4 혼재)
}
```

### User
```js
{ id, email, password, name, phone, membership, point, createdAt }
```
- `membership`: yellow | blue | green | vvip

---

## 스타일링 가이드

### 색상 (하드코딩, _variables.scss 미사용)
| 용도 | 값 |
|------|----|
| Primary (네이비) | `#151789` |
| Background Light | `#f2f4fb` |
| Text Dark | `#222` / `#272727` |
| Grey | `#474747` / `#848484` / `#aaaaaa` / `#c6c6c6` |
| White | `#fff` |

### 브레이크포인트
| 크기 | 값 |
|------|----|
| 대형 | 1200px |
| 중형 | 1024px / 1000px |
| 소형 | 800px |
| 모바일 | 768px / 767px |

### CSS 변수 (동적 설정)
- `--header-height: 80px` — Header.scss
- `--hero-mask-clip` — Hero.jsx `style.setProperty()`로 동적 설정
- `--primary-blue: #151789` — Kediheal.scss에서 사용

### 반응형 타이포그래피 clamp 기준
- 영문 기본: `clamp(40px, 8.1vw, 115px)`
- KO headline: `clamp(21px, 4.2vw, 60px)`
- 수평 패딩: `clamp(16px, 3vw, 30px)`

### 아이콘 (react-icons)
```js
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBack, IoHomeOutline, IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
```

---

## 미구현 / 개발 예정

| 항목 | 파일 | 상태 |
|------|------|------|
| 회원가입 페이지 | `pages/signup/Signup.jsx` | stub (라우트 미연결) |
| 계정 찾기 페이지 | `pages/findAccount/FindAccount.jsx` | stub (라우트 미연결) |
| 상태관리 | `src/store/*.js` 3개 | 모두 빈 파일 |
| Protected route | `routes/guards.jsx` | stub |
| 모달/토스트 | `Modal.jsx`, `Toast.jsx` | stub (파일만 존재) |
| CSS 변수/믹스인 | `_variables.scss`, `_mixins.scss` | 빈 파일 |
| 유틸 함수 | `format.js`, `storage.js` | 빈 파일 |
| 상수 | `src/constants/*.js` 4개 | 빈 파일 (1줄) |
| 레이아웃 | `AuthLayout`, `CheckoutLayout` 등 | stub |

---

## 아키텍처 결정사항

1. **전역 상태관리 없음** — store 파일 stub. 현재 로컬 state + callback props. Zustand/Context 도입 예정.
2. **목업 우선 개발** — 백엔드 없이 `src/mock/` 메모리 배열을 API 함수가 직접 mutate.
3. **이미지 직접 import** — Vite 자동 최적화. CDN/lazy loading 미적용.
4. **CSS-in-JS 미사용** — SCSS co-located 방식.
5. **GSAP + Lenis** — ScrollTrigger pin/scrub에 Lenis smooth scroll 연동. `useGSAP` 훅 사용.
6. **컴포넌트 분리 원칙** — Page → List/Main → Item/Card 3단계.
7. **로그인 내부 뷰 전환** — URL 라우트 없이 `view` state로 하위 폼 전환.
8. **헤더 테마** — `data-header-theme` 속성 + scroll 감지로 다크/라이트 자동 전환.
9. **홈 헤더 클립 오버레이** — `createPortal`로 `document.body`에 직접 렌더링.
10. **폼 라이브러리 없음** — 순수 React controlled/uncontrolled inputs.
11. **TypeScript 없음** — 모두 `.js`/`.jsx`. PropTypes도 없음.

---

## 개선 제안

### 1. productsData.js — 모듈 레벨 이미지 대량 import ✅ 해결됨

~~현재 `productsData.js`는 파일 최상단에서 이미지를 **115개 이상 한꺼번에 import**합니다.~~

**적용된 방법:**
```js
// 이전: 115개 개별 import 문
import img_1 from '@/assets/images/products/mask/mask06_04_00.jpg';
// ... 115줄

// 현재: Vite glob import 1개 + 경로 헬퍼 함수
const _imgs = import.meta.glob(
    '/src/assets/images/products/**/*.{jpg,jpeg,png}',
    { eager: true, import: 'default' }
);
const img = (path) => _imgs[`/src/assets/images/products/${path}`];

// 사용: images: [img('mask/mask06_04_00.jpg')]
```
115줄의 import 구문이 4줄로 줄었습니다. 새 상품 이미지 추가 시 파일만 배치하면 됩니다.

### 2. productsData.js / productsDetailData.js — 분리된 데이터 구조

현재 상품 기본 정보(`productsData.js`)와 상세 페이지 데이터(`productsDetailData.js`)가 **같은 `id`를 키로 별도 파일에 분리**되어 있습니다. `ShopDetail__page.jsx`에서 두 파일을 각각 `find()`로 조회해야 하는 불편함이 있습니다.

**권장 방법:**
```js
// 방법 A: 단일 파일로 합치고 기본/상세 필드를 함께 관리
// 방법 B: 상세 데이터를 기본 데이터 안의 detail 키로 중첩
const productsData = [
  { id: 'p070', name: '...', price: ..., detail: { sub_img1: [], reviewTag: [], ... } }
];
```

### 3. @/ 경로 별칭 통일 ✅ 해결됨

~~`pages/kediheal/Kediheal.jsx`는 상대경로(`../../components/kediheal/...`)를 사용합니다.~~

`Kediheal.jsx`의 모든 import를 `@/` 별칭으로 통일했습니다.
```js
// 이전
import KedihealHero from '../../components/kediheal/KedihealHero';
// 현재
import KedihealHero from '@/components/kediheal/KedihealHero';
```

### 4. 전역 상태관리 부재 — Zustand 도입 권장

현재 store 파일이 모두 빈 파일입니다. 장바구니 수량, 로그인 상태 등이 실제로 연동되지 않아 헤더의 카트 뱃지가 하드코딩(`1`)되어 있습니다.

**권장 방법 (Zustand):**
```js
// src/store/cart.store.js
import { create } from 'zustand';
export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  removeItem: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
}));
```
Zustand는 기존 Context API 대비 보일러플레이트가 적고, 현재 프로젝트 구조에서 최소 변경으로 도입 가능합니다.

### 5. 상품 상세 페이지 접근 범위 제한

현재 `ProductsCard.jsx`에서 `['p070', 'p032', 'p085']` id만 상세 링크로 연결됩니다. 나머지 상품은 클릭해도 이동하지 않습니다. 상세 데이터가 있는 상품(`productsDetailData`에 포함된 id)은 전부 링크를 활성화하거나, 없는 경우 `/ready` 또는 준비 중 메시지를 표시하는 것이 UX상 적합합니다.

### 6. 빈 constants 파일 활용

`src/constants/`의 4개 파일이 모두 비어 있습니다. 현재 하드코딩된 값들(예: 배송비 기준 `20000`/`3000`, 멤버십 등급 배열, 정렬 옵션 키)을 이 파일들로 이동하면 유지보수가 쉬워집니다.
