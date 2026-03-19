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

**모듈 시스템:** `"type": "module"` (ES Modules)

**폰트:**
- **Pretendard Variable** — 본문, 버튼 (woff2, `/src/styles/font/PretendardVariable.woff2`)
- **PP Mori** — 헤딩/디스플레이 (외부 CDN, weight 500)

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
│   ├── ScrollToTop.jsx       # pathname/search/hash 변경 시 window.scrollTo(0,0)
│   ├── routes/
│   │   ├── index.jsx         # <Routes> 정의: RootLayout 아래 대부분, Login은 독립
│   │   ├── paths.js          # ROUTE_PATHS, HEADER_NAV_ITEMS, DROPDOWN 설정
│   │   └── guards.jsx        # Protected route (stub)
│   └── layouts/
│       ├── RootLayout.jsx    # .layout > Header + <main>.layout__content > Outlet + Footer
│       └── rootlayout.scss
├── pages/
│   ├── home/
│   │   ├── Home.jsx          # introFinished + isVisible state, ScrollTrigger.refresh 타이밍
│   │   ├── Intro.jsx         # 전체화면 인트로 애니메이션
│   │   └── Home.scss         # Intro + 홈 공통 스타일
│   ├── login/
│   │   ├── Login.jsx         # view state로 LoginForm/GuestForm/SignUp/FindId/FindFw 전환
│   │   └── login.scss
│   ├── cart/
│   │   ├── Cart.jsx          # step state: 'cart' → 'order' → 'complete' → 'detail'
│   │   └── cart.scss
│   ├── inquiry/
│   │   ├── Inquiry.jsx       # 1:1 문의 페이지
│   │   └── Inquiry.scss
│   ├── notice/
│   │   ├── Notice.jsx        # 공지사항 페이지
│   │   └── notice.scss
│   ├── ready/
│   │   ├── Ready.jsx         # 미구현 페이지 플레이스홀더
│   │   └── ready.scss
│   └── [shop/brand/membership/kediheal/myPage]  # 모두 stub
├── components/
│   ├── common/
│   │   ├── header/
│   │   │   ├── Header.jsx        # isMenuOpen / isSearchOpen / isVisible / isOverDark state
│   │   │   ├── HeaderSearch.jsx  # isOpen, onClose props; 자동 포커스, ESC/외부클릭 닫힘
│   │   │   └── Header.scss
│   │   ├── footer/
│   │   │   ├── Footer.jsx        # data-header-theme="dark" (헤더 색 전환 감지용)
│   │   │   └── Footer.scss
│   │   ├── modal/            # stub
│   │   └── toast/            # stub
│   ├── home/
│   │   ├── Hero.jsx          # GSAP + Lenis + ScrollTrigger 6단계 스크롤 애니메이션
│   │   ├── MainVisual.jsx    # GSAP timeline + EN↔KO 호버 페이드
│   │   ├── MainSection1.jsx  # stagger 아이템 + EN↔KO 호버 페이드
│   │   ├── MainSection2.jsx  # 수평 스크롤 (scrub pin)
│   │   ├── MainSection3.jsx  # column-gap expand + 이미지 y 이동 (scrub pin)
│   │   ├── MainSection4.jsx  # expo.out 바운스 진입 (pin)
│   │   ├── MainSection5.jsx  # 마키 무한스크롤 + EN↔KO 호버
│   │   ├── ProductItem.jsx   # className prop으로 BEM 결정하는 범용 상품 카드
│   │   └── hero.scss         # Hero + MainSection 1~5 통합 스타일
│   ├── cart/
│   │   ├── CartItem.jsx          # 체크박스, 수량, 가격 계산
│   │   ├── CartSummary.jsx       # 소계 표시
│   │   ├── CartTotal.jsx         # 최종 합계 + 무료배송 기준
│   │   ├── OrderStep.jsx         # 결제 정보 폼
│   │   ├── OrderStep.scss
│   │   ├── OrderComplete.jsx     # 주문 완료 화면
│   │   ├── order-complete.scss
│   │   └── order-detail/
│   │       ├── OrderDetail.jsx
│   │       └── order-detail.scss
│   ├── login/
│   │   ├── LoginForm.jsx     # 소셜 로그인 버튼 (Kakao, Google)
│   │   ├── SignUp.jsx        # 회원가입 폼
│   │   ├── FindId.jsx        # 아이디 찾기
│   │   ├── FindFw.jsx        # 비밀번호 찾기
│   │   ├── GuestForm.jsx     # 비회원 배송 조회
│   │   └── loginAll.scss
│   ├── inquiry/
│   │   ├── InquiryMain.jsx   # 문의 목록 + 글쓰기 버튼
│   │   ├── InquiryList.jsx   # <table> 구조
│   │   ├── InquiryItem.jsx   # <tr> 단위
│   │   ├── InquiryWrite.jsx  # 문의 작성 폼
│   │   └── inquiry.scss
│   └── notice/
│       ├── NoticeList.jsx    # <table> + 페이지네이션
│       ├── NoticeItem.jsx    # <tr> 단위
│       ├── NoticeSearch.jsx  # 검색 UI
│       └── notice.scss       # NoticeList + NoticeSearch 통합 (주석으로 섹션 구분)
├── api/                      # 목업 API 8개 모듈
├── data/                     # 컴포넌트가 직접 import하는 정적 데이터 (7개 파일)
├── mock/                     # API 함수가 참조하는 목업 원본 데이터
├── store/                    # 상태관리 (auth/cart/ui — 모두 stub)
├── constants/                # 상수 (menu/tabs/steps — 모두 stub)
├── styles/
│   ├── _reset.scss           # CSS 리셋 + 폰트 선언 (main.jsx에서 import)
│   ├── _variables.scss       # stub
│   ├── _mixins.scss          # stub
│   └── global.scss           # stub
├── utils/
│   ├── delay.js              # export const delay = (ms=300) => new Promise(resolve => setTimeout(resolve, ms))
│   ├── format.js             # stub
│   └── storage.js            # stub
└── assets/
    ├── logos/                # logo_1.png (dark bg용), logo_2.png (light bg용)
    ├── images/
    │   ├── home/             # hero00~07_fin.png, sec1/2/3/4/5 이미지
    │   ├── common/           # header/footer 아이콘
    │   └── products/         # pack, pad 이미지
    └── icons/
```

---

## 라우팅

| 경로 | 상수 키 | 페이지 | 상태 |
|------|---------|--------|------|
| `/` | `HOME` | Home | 구현 완료 |
| `/login` | `LOGIN` | Login | 구현 완료 (RootLayout 제외) |
| `/inquiry` | `INQUIRY` | Inquiry | 구현 완료 |
| `/notice` | `COMMUNITY` | Notice | 구현 완료 |
| `/cart` | `CART` | Cart | 구현 완료 |
| `/shop` | `SHOP` | Products | stub |
| `/brand` | `BRAND` | Brand | 구현 완료 |
| `/membership` | `MEMBERSHIP` | Membership | stub |
| `/kediheal` | `KEDIHEAL` | Kediheal | 구현 완료 |
| `/mypage` | `MY_PAGE` | MyPage | 구현 완료 |
| `/ready` | `READY` | Ready | 미구현 플레이스홀더 |

**Login은 RootLayout 밖** — Header/Footer 없이 독립 렌더링.
나머지 모든 라우트는 `RootLayout` (Header + Footer) 적용.

### 네비게이션 드롭다운 (paths.js DROPDOWN)
- **SHOP**: `type: 'mega'`, `width: 'full'`, 3열 구조 (제품/기능/라인)
- **EVENT, MUSE, COMMUNITY**: `type: 'single'`, 단일 드롭다운

---

## 코딩 컨벤션

### CSS 클래스 네이밍 — BEM

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
.cart__col--checkbox          // element + modifier
.notice-list__th--title       // element + modifier
```

**상태 클래스 (modifier 대신 독립 클래스로):**
```scss
.is-visible   // 가시성 토글
.is-active    // 활성 탭/페이지
.is-hovered   // 호버 상태
.intro--fade  // 블록 레벨 modifier도 사용
```

### JavaScript / JSX 컨벤션

- **언어:** 순수 JavaScript (TypeScript 없음, PropTypes 없음)
- **컴포넌트 파일:** PascalCase `.jsx` (예: `ProductItem.jsx`)
- **스타일 파일:** 컴포넌트와 같은 디렉토리, 소문자/camelCase `.scss`
- **데이터 상수:** UPPER_SNAKE_CASE (예: `FADE_MS`, `TITLES`, `ROUTE_PATHS`)
- **함수형 컴포넌트만** 사용 (class 컴포넌트 없음)
- **ESLint:** 대문자/언더스코어 시작 미사용 변수 허용 (`^[A-Z_]`)
- **import 경로:** `@/` 별칭으로 `src/` 기준 절대경로 사용

### 이미지 import
```js
import img from '@/assets/images/home/hero00_fin.png';
// Vite가 자동 최적화, URL로 변환
```

### 컴포넌트 분리 원칙 (3단계 패턴)
```
Page (pages/) → List (components/…/List.jsx) → Item (components/…/Item.jsx)
```
예: `Notice.jsx` → `NoticeList.jsx` → `NoticeItem.jsx`

---

## 홈 페이지 구성

Home 페이지 렌더링 순서:

1. **Intro** — 전체화면 인트로 (카운터 1→100 후 TITLES[0]→[1]→[2] 슬라이드업, 900ms 페이드 후 제거)
2. **Hero** — GSAP + Lenis 6단계 스크롤 애니메이션 + 3D CSS 큐브
3. **MainVisual** — 텍스트 디자인 섹션 (EN↔KO 호버 페이드)
4. **MainSection1** — 배경 이미지 + 상품 4개 (EN↔KO 호버 + stagger 진입)
5. **MainSection2** — MEDIHEAL BEST 5개 상품 (수평 스크롤 scrub)
6. **MainSection3** — R&D Lab 4개 카드 (column-gap expand + y 이동)
7. **MainSection4** — 멤버십 4단계 카드 (expo.out 바운스 진입)
8. **MainSection5** — 성분 마키 무한스크롤 + EN↔KO 호버

### Intro 애니메이션 타임라인
```
setInterval(12ms) → count 1~100
→ count 100 도달 시:
  → TITLE[0] 슬라이드업 (delay 0ms)
  → TITLE[1] 슬라이드업 (delay 350ms)
  → TITLE[2] 슬라이드업 (delay 700ms)
  → fade-out 시작 (delay 1500ms)
  → 900ms 페이드 완료 → onFinish 호출
```

### Hero 섹션 6단계 애니메이션 (GSAP ScrollTrigger)

Hero는 이 프로젝트에서 가장 복잡한 컴포넌트. GSAP + Lenis + ScrollTrigger + ResizeObserver 조합.

```
Phase 1 (0 ~ 40%):  마스크 shrink + 8개 이미지 weighted 순환 + 메인 텍스트 y:-200px
Phase 2 (40~55%):   마지막 이미지 scale 1→1.51
Phase 3 (55~70%):   마스크 페이드아웃 + 3D 큐브 등장
Phase 4 (70~85%):   큐브 rotateY 0→-90deg
Phase 5 (85~100%):  character-by-character 텍스트 리빌
Phase 6 (100%+):    홀드 상태
```

이미지 가중치: `[6, 4, 4, 4, 4, 4, 4, 2]` (8개 hero 이미지)

**Lenis 연동 패턴:**
```js
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
// cleanup: lenis.destroy(), st.kill()
```

**3D 큐브:** CSS `perspective: 50000px`, `transform-style: preserve-3d`, 6면 translateZ 계산.
**헤더 클립 마스크:** `--hero-mask-clip` CSS 변수를 `style.setProperty()`로 동적 설정.

### EN↔KO 호버 페이드 패턴 (MainVisual, MainSection1, MainSection5 공통)

```js
const FADE_MS = 200;
const timer = useRef(null);

const handleEnter = () => {
    clearTimeout(timer.current);       // race condition 방지
    setVisible(false);                 // opacity 0
    timer.current = setTimeout(() => {
        setShowKo(true);               // 텍스트 교체
        setVisible(true);              // opacity 1
    }, FADE_MS);
};

// Leave: 동일 패턴으로 역방향 복원
```

### Header 동적 테마 감지

섹션에 `data-header-theme="dark"` 속성을 부여하면 헤더가 스크롤 위치에 따라 자동으로 색상 전환:

```js
// scroll 이벤트에서 viewport 내 data-header-theme 섹션 감지
// isOverDark state → 헤더 로고 및 아이콘 색 전환
// Footer: data-header-theme="dark" 적용됨
```

---

## 컴포넌트 상세

### ProductItem (범용 상품 카드)

```jsx
<ProductItem
  className="sec2-1"        // main__productItem-{className} BEM 클래스 결정
  img={img}
  hoverImg={hoverImg}       // 있으면 img-wrap + CSS opacity hover, 없으면 img 단독
  productName={productName} // img-wrap 내 absolute (top:20px left:20px)
  price={price}             // img-wrap 내 absolute (bottom:20px left:20px)
  addr={addr}
  title={title}
  dsc={dsc}
  contition={contition}
  grade={grade}
  benefit={benefit}
  num={num}
  sub={sub}
/>
```
모든 prop은 선택적. falsy면 해당 요소를 렌더링하지 않음 (`{title && <p>...`).

### Header

```
State: isMenuOpen / isSearchOpen / isVisible / isOverDark
닫기 트리거: 버튼 재클릭 / ESC 키 / .header 바깥 클릭
로고: isOverDark ? logo_2(light) : logo_1(dark)
장바구니 뱃지: display:none 처리
```

### Cart 스텝 플로우

```
step = 'cart'     → CartItem 목록, 선택, 수량 변경, 삭제
step = 'order'    → OrderStep 결제 정보 폼
step = 'complete' → OrderComplete 완료 화면
step = 'detail'   → OrderDetail 주문 상세
```

**배송비 계산:** 선택 상품 합계 < 20,000원 → 3,000원, 이상 → 무료

### Login 뷰 전환

URL 라우트 없이 `view` state로 전환:

```
view = 'login'   → LoginForm
view = 'guest'   → GuestForm
view = 'signup'  → SignUp
view = 'findId'  → FindId
view = 'findFw'  → FindFw
```

### Notice / Inquiry — 테이블 패턴

```jsx
<table>
  <thead><tr><th>번호</th><th>제목</th>...</tr></thead>
  <tbody>
    {data.map(item => <XxxItem key={item.id} {...item} />)}
  </tbody>
</table>
```
- 데이터 없을 때: `<tr><td colSpan={N}>빈 상태 메시지</td></tr>`
- Notice는 `currentPage` state + 페이지네이션 버튼 보유

---

## 목업 API

모든 API는 `src/api/`에 위치. `delay()` 유틸로 네트워크 지연 시뮬레이션.

| 파일 | 주요 함수 |
|------|-----------|
| `auth.api.js` | `login`, `signup`, `getCurrentUser`, `logout` |
| `products.api.js` | `getProducts(params)`, `getProductById`, `getRelatedProducts` |
| `cart.api.js` | `getCart`, `addCartItem`, `updateCartItem`, `removeCartItem`, `clearCart` |
| `wishlist.api.js` | `getWishlist`, `isWishlisted`, `addWishlist`, `removeWishlist`, `toggleWishlist` |
| `notices.api.js` | `getNotices`, `getNoticeById` |
| `reviews.api.js` | `getReviewsByProduct`, `createReview`, `deleteReview` |
| `inquiries.api.js` | `getInquiriesByUser`, `createInquiry`, `deleteInquiry`, `updateInquiry` |
| `users.api.js` | `getUsers`, `getUserById`, `getUserByEmail`, `updateUserProfile`, `updateUserPoint`, `updateUserMembership` |

**데이터 소스 2곳:**
- `src/data/` — 컴포넌트가 직접 import하는 정적 데이터 (homeData, noticeData, inquiriesData, productsData, reviewsData, wishlistData, userData)
- `src/mock/` — API 함수가 참조하는 목업 원본 배열 (메모리 내 mutate)

**API 패턴 예시:**
```js
export const login = async ({ email, password }) => {
    await delay(300);
    const user = userData.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
    return user;
};
```

---

## 데이터 스키마

### Product
```js
{ id, name, brand, price, discountPrice, discountRate, category, function,
  thumbnail, images, description, rating, reviewCount, createdAt }
```
- `category`: pad | mask | ampoule | toner | cream | gel | serum | essence | cleanser | suncare
- `function`: calming | moisture | repair | brightening | elasticity | barrier | cleansing | wrinkle | uv-care | balance

### User
```js
{ id, email, password, name, phone, membership, point, createdAt }
```
- `membership`: yellow | blue | green | vvip

### Cart Item / Wishlist Item
```js
{ id, userId, productId, quantity, addedAt, product: Product }
```

### Inquiry
```js
{ id, userId, title, content, status: '답변대기'|'답변완료', createdAt }
```

### homeData 구조
```js
sectionData1:  { id, img, addr }                           // 4개 (배경+상품)
sectionData2:  { id, img, hoverImg, addr, productName, price }  // 5개 (BEST)
sectionData3:  { id, img, title, dsc }                     // 4개 (R&D Lab)
sectionData4:  { id, contition, grade, benefit }            // 4개 (멤버십)
sectionData5:  { id, ingredient }                           // 11개 (성분 마키)
sectionData5_1: { id, title, num, sub }                    // 4개 (통계)
```

---

## 스타일링 가이드

### 색상 (하드코딩, _variables.scss 미사용)
| 용도 | 값 |
|------|----|
| Primary (네이비) | `#151789` |
| Background Light | `#f2f4fb` |
| Text Dark | `#222` / `#272727` |
| Grey | `#474747` / `#aaaaaa` / `#c6c6c6` |
| White | `#fff` |

### 브레이크포인트
| 크기 | 값 |
|------|----|
| 대형 | 1200px |
| 중형 | 1000px / 999px |
| 소형 | 800px |
| 모바일 | 768px |

### CSS 변수 (동적 설정)
- `--header-height: 80px` — Header.scss에서 선언
- `--hero-mask-clip` — Hero.jsx가 `style.setProperty()`로 동적 설정
- `--hero-main-dsc-offset` — Hero 스크롤 진행 중 텍스트 오프셋

### 반응형 타이포그래피 clamp 기준 (hero.scss)
- 영문 기본: `clamp(40px, 8.1vw, 115px)`
- KO headline: `clamp(21px, 4.2vw, 60px)` (영문 대비 52% 비율)
- KO body: `clamp(11px, 2.1vw, 30px)` (영문 대비 26% 비율)
- 수평 패딩: `clamp(16px, 3vw, 30px)`

### SCSS 관행
- 각 컴포넌트 `.scss`는 컴포넌트와 **같은 폴더**에 위치
- `clamp()`로 유동형 타이포그래피
- Flexbox 기본, Grid는 Footer(4열→1열)에서 사용
- 여러 컴포넌트 scss 통합 시 `/*ComponentName*/` 주석으로 섹션 구분 (notice.scss 참고)
- CSS keyframes로 마키 무한 애니메이션 (`hero.scss`)
- 트랜지션 기본: `0.3s ease` (이미지 hover), `0.7s ease` (페이드), `0.9s ease` (인트로)

### 아이콘 (react-icons)
```js
import { GiHamburgerMenu } from "react-icons/gi";   // 햄버거 메뉴
import { IoArrowBack, IoHomeOutline, IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
```

---

## 미구현 / 개발 예정

| 항목 | 파일 | 상태 |
|------|------|------|
| 상품 목록/상세 | `pages/shop/Products.jsx` | stub |
| 멤버십 페이지 | `pages/membership/Membership.jsx` | stub |
| 상태관리 | `src/store/auth.store.js` 외 2개 | 모두 빈 파일 |
| Protected route | `routes/guards.jsx` | stub |
| 모달/토스트 | `Modal.jsx`, `Toast.jsx` | stub (사용 여부 미정) |
| CSS 변수/믹스인 | `_variables.scss`, `_mixins.scss` | 빈 파일 |
| 유틸 함수 | `format.js`, `storage.js` | 빈 파일 |
| 상수 | `src/constants/*.js` 4개 | 빈 파일 |

---

## 아키텍처 결정사항

1. **전역 상태관리 없음** — store 파일 stub. 현재 로컬 React state + callback props로 동작. Zustand 또는 Context API 도입 예정.
2. **목업 우선 개발** — 백엔드 없이 `src/mock/` 메모리 배열을 API 함수가 직접 mutate.
3. **이미지 직접 import** — Vite 자동 최적화 처리. CDN/lazy loading 미적용.
4. **CSS-in-JS 미사용** — SCSS co-located 방식.
5. **GSAP + Lenis** — ScrollTrigger pin/scrub에 Lenis smooth scroll 연동. `useGSAP` 훅 사용.
6. **컴포넌트 분리 원칙** — Page → List → Item 3단계.
7. **로그인 내부 뷰 전환** — URL 라우트 없이 `view` state로 하위 폼 전환.
8. **헤더 테마** — `data-header-theme` 속성 + scroll 감지로 다크/라이트 자동 전환. Logo도 함께 교체.
9. **폼 라이브러리 없음** — 순수 React controlled/uncontrolled inputs.
10. **TypeScript 없음** — 모두 `.js`/`.jsx`. PropTypes도 없음.
