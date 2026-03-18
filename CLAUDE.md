# MEDIHEAL TAZO — 프로젝트 가이드

## 프로젝트 개요

MEDIHEAL 스킨케어 브랜드의 e-커머스 웹사이트. React + Vite 기반으로 구축된 프론트엔드 프로젝트. 백엔드는 아직 없고, 목업 API와 목업 데이터로 동작합니다.

- **기술 스택:** React 19, React Router 7, GSAP, Sass(SCSS)
- **빌드 도구:** Vite 7 (`@` 경로 별칭 → `./src`)
- **현재 브랜치:** `feature/home`
- **폰트:** Pretendard Variable (본문), PP Mori (헤딩/디스플레이)

---

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
npm run lint     # ESLint 실행
```

---

## 디렉토리 구조

```
src/
├── app/
│   ├── main.jsx              # React 진입점
│   ├── App.jsx               # 루트 컴포넌트
│   ├── routes/
│   │   ├── index.jsx         # 라우트 정의
│   │   ├── paths.js          # 경로 상수 및 네비게이션 설정
│   │   └── guards.jsx        # Protected route (미구현)
│   └── layouts/
│       ├── RootLayout.jsx    # Header + Outlet + Footer 감싸는 레이아웃
│       └── rootlayout.scss
├── pages/
│   ├── home/
│   │   ├── Home.jsx          # 홈 페이지 (구현 완료)
│   │   ├── Intro.jsx         # 애니메이션 인트로 (구현 완료)
│   │   └── Home.scss
│   ├── login/
│   │   ├── Login.jsx         # 로그인 페이지 (구현 완료)
│   │   └── login.scss
│   ├── signup/
│   │   ├── Signup.jsx        # 회원가입 페이지 (구현 완료)
│   │   └── signup.scss
│   ├── findAccount/
│   │   ├── FindAccount.jsx   # 아이디/비밀번호 찾기 (구현 완료)
│   │   └── FindAccount.scss
│   ├── cart/
│   │   ├── Cart.jsx          # 장바구니/주문 페이지 (구현 완료)
│   │   └── cart.scss
│   ├── inquiry/
│   │   ├── Inquiry.jsx       # 1:1 문의 페이지 (구현 완료)
│   │   └── Inquiry.scss
│   ├── notice/
│   │   ├── Notice.jsx        # 공지사항 페이지 (구현 완료)
│   │   └── notice.scss
│   ├── ready/
│   │   ├── Ready.jsx         # 미구현 페이지 플레이스홀더
│   │   └── ready.scss
│   └── [shop/brand/membership/kediheal/myPage]  # 모두 stub
├── components/
│   ├── common/
│   │   ├── header/
│   │   │   ├── Header.jsx        # 헤더 (구현 완료)
│   │   │   ├── HeaderSearch.jsx  # 검색 드롭다운 (구현 완료)
│   │   │   └── Header.scss
│   │   ├── footer/
│   │   │   ├── Footer.jsx        # 푸터 (구현 완료)
│   │   │   └── Footer.scss
│   │   ├── modal/            # stub (안 쓸 수도 있음)
│   │   └── toast/            # stub
│   ├── home/
│   │   ├── Hero.jsx          # 스크롤 애니메이션 히어로
│   │   ├── MainVisual.jsx    # 텍스트 디자인 섹션 (EN↔KO 호버)
│   │   ├── MainSection1.jsx  # 배경 이미지 + 상품 (EN↔KO 호버)
│   │   ├── MainSection2.jsx  # MEDIHEAL BEST 5개 상품
│   │   ├── MainSection3.jsx  # R&D Lab 카드
│   │   ├── MainSection4.jsx  # 멤버십 카드
│   │   ├── MainSection5.jsx  # 성분 마키 (EN↔KO 호버)
│   │   ├── ProductItem.jsx   # 재사용 상품 카드 컴포넌트
│   │   └── hero.scss         # 홈 전체 스타일
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   ├── CartTotal.jsx
│   │   ├── OrderStep.jsx + OrderStep.scss
│   │   ├── OrderComplete.jsx + order-complete.scss
│   │   └── order-detail/
│   │       ├── OrderDetail.jsx
│   │       └── order-detail.scss
│   ├── login/
│   │   ├── LoginForm.jsx     # 로그인 폼 (소셜 로그인 버튼 포함)
│   │   ├── SignUp.jsx        # 회원가입 폼
│   │   ├── FindId.jsx        # 아이디 찾기 폼
│   │   ├── FindFw.jsx        # 비밀번호 찾기 폼
│   │   ├── GuestForm.jsx     # 비회원 문의 폼
│   │   └── loginAll.scss
│   ├── inquiry/
│   │   ├── InquiryMain.jsx   # 문의 목록 + 글쓰기 버튼
│   │   ├── InquiryList.jsx   # <table> 구조 문의 목록
│   │   ├── InquiryItem.jsx   # <tr> 단위 문의 항목
│   │   ├── InquiryWrite.jsx  # 문의 작성 폼
│   │   └── inquiry.scss
│   └── notice/
│       ├── NoticeList.jsx    # <table> 구조 공지 목록
│       ├── NoticeItem.jsx    # <tr> 단위 공지 항목
│       ├── NoticeSearch.jsx  # 검색 UI
│       └── notice.scss       # NoticeList + NoticeSearch 통합 스타일
├── api/                      # 목업 API 함수들 (8개 모듈)
├── data/                     # 컴포넌트용 정적 데이터 (7개 파일)
├── mock/                     # API가 참조하는 목업 원본 데이터
├── store/                    # 상태관리 (auth/cart/ui — 모두 stub)
├── constants/                # 상수 (menu/tabs/steps — 모두 stub)
├── styles/
│   ├── _reset.scss           # CSS 리셋 + 폰트 선언
│   ├── _variables.scss       # (stub)
│   ├── _mixins.scss          # (stub)
│   └── global.scss           # (stub)
├── utils/
│   ├── delay.js              # Promise delay 유틸
│   ├── format.js             # (stub)
│   └── storage.js            # (stub)
└── assets/
    ├── logos/                # logo_1.png (dark), logo_2.png (light)
    ├── images/
    │   ├── home/             # hero00~07_fin.png, pd_img, pd1_img(+hover), sec3_card
    │   ├── common/           # header/footer 아이콘
    │   ├── products/         # pack, pad 이미지
    │   └── ...
    └── icons/
```

---

## 라우팅

| 경로 | 페이지 | 상태 |
|------|--------|------|
| `/` | HOME | 구현 완료 |
| `/login` | LOGIN | 구현 완료 |
| `/inquiry` | INQUIRY | 구현 완료 |
| `/notice` | COMMUNITY (공지사항) | 구현 완료 |
| `/cart` | CART | 구현 완료 |
| `/shop` | SHOP | stub |
| `/brand` | BRAND | stub |
| `/membership` | MEMBERSHIP | stub |
| `/kediheal` | KEDIHEAL | stub |
| `/mypage` | MY_PAGE | stub |
| `/ready` | READY | 미구현 페이지 플레이스홀더 |

모든 라우트는 `RootLayout`으로 감싸져 Header + Footer가 공통 적용됩니다.

---

## 홈 페이지 구성

Home 페이지는 아래 섹션들이 순서대로 렌더링됩니다:

1. **Intro** — 전체화면 인트로 (카운터 0→100 후 TITLES[0]→[1]→[2] 슬라이드업, 900ms 페이드 후 사라짐)
2. **Hero** — 3D CSS 큐브 + 스크롤 패럴랙스 (requestAnimationFrame 기반)
3. **MainVisual** — 텍스트 디자인 섹션 (hover 시 EN↔KO 페이드 전환)
4. **MainSection1** — 배경 이미지 + 4개 상품 쇼케이스 (hover 시 EN↔KO 페이드 전환)
5. **MainSection2** — MEDIHEAL BEST 5개 상품 (hover 시 이미지 교체 + 텍스트 색상 전환)
6. **MainSection3** — R&D Lab 4개 카드
7. **MainSection4** — 멤버십 4단계 카드 (YELLOW/BLUE/GREEN/VVIP)
8. **MainSection5** — 성분 이름 마키 스크롤 애니메이션 (hover 시 EN↔KO 페이드 전환)

### Hero 섹션 애니메이션 방식
- `requestAnimationFrame` + `ResizeObserver` 조합
- 스크롤 진행도를 CSS 변수로 전달 (`--hero-main-dsc-offset` 등)
- 8개 hero 이미지를 레이어로 쌓아 3D 효과 구현
- JavaScript와 CSS 애니메이션 분리 설계

### EN↔KO 호버 페이드 패턴 (MainVisual, MainSection1, MainSection5 공통)
- `useState`: `showKo`, `visible`, `hovered`
- `useRef`: 타이머 ref (race condition 방지용 `clearTimeout`)
- `FADE_MS = 200`: opacity 0 → 텍스트 교체 → opacity 1
- 마우스Leave 시 동일하게 역방향으로 복원

---

## 컴포넌트 패턴

### ProductItem
공통 상품 카드 컴포넌트. 여러 섹션에서 props로 다르게 렌더링:
```jsx
<ProductItem
  className="sec2-1"        // main__productItem-{className} BEM 클래스 결정
  img={img}
  hoverImg={hoverImg}       // 있을 경우 img-wrap 구조로 렌더링, CSS hover로 교체
  productName={productName} // img-wrap 내 absolute 위치, top:20px left:20px
  price={price}             // img-wrap 내 absolute 위치, bottom:20px left:20px
  addr={addr}
  title={title}
  dsc={dsc}
  contition={contition}
  grade={grade}
  benefit={benefit}
/>
```
- `hoverImg` 있을 때: `.main__productItem-img-wrap` 내에 두 이미지 + 텍스트 스팬 렌더링, CSS `opacity` 트랜지션으로 교체
- `hoverImg` 없을 때: `<img>` 단독 렌더링

### Header
- `theme` prop으로 로고 스위칭 (light: logo_2, dark: logo_1)
- `isMenuOpen` state — 햄버거 메뉴 토글
- `isSearchOpen` state — HeaderSearch 드롭다운 토글
- `isVisible` state — 초기 페이드인
- 메뉴 닫기: 버튼 재클릭 / ESC 키 / `.header` 바깥 클릭
- 장바구니 뱃지: 현재 `display: none` 처리됨

### HeaderSearch
- `isOpen`, `onClose` props
- 열릴 때 input 자동 포커스, 닫힐 때 입력값 초기화
- ESC 키 / header 바깥 클릭 시 닫힘
- Header 아래 absolute 위치, 화면 너비의 45% 검색 입력 영역

### Inquiry (InquiryList / InquiryItem)
- `<table>` 구조 — NoticeList/NoticeItem과 동일한 패턴
- `inquiriesData.js`에서 데이터 import (현재 로그인 미구현으로 전체 표시)
- 데이터 없을 때: `<tr><td colSpan={5}>` 빈 상태 메시지

### Notice (NoticeList / NoticeItem)
- `<table>` 구조, `noticeData.js`에서 데이터 import
- `notice.scss`에 NoticeList + NoticeSearch 스타일 통합 (`/*NoticeList*/`, `/*NoticeSearch*/` 주석으로 구분)

### 네비게이션 드롭다운 구조 (paths.js)
- **SHOP**: 메가 드롭다운 (3열: 제품/기능/라인)
- **EVENT, MUSE, COMMUNITY**: 단일 드롭다운

---

## 목업 API

모든 API는 `src/api/`에 위치하며 `delay()` 유틸로 네트워크 지연을 시뮬레이션합니다.

| 파일 | 기능 |
|------|------|
| `auth.api.js` | login, signup, getCurrentUser, logout |
| `products.api.js` | getProducts (필터/정렬), getProductById, getRelatedProducts |
| `cart.api.js` | getCart, addCartItem, updateCartItem, removeCartItem, clearCart |
| `wishlist.api.js` | getWishlist, isWishlisted, addWishlist, removeWishlist, toggleWishlist |
| `notices.api.js` | getNotices, getNoticeById |
| `reviews.api.js` | getReviewsByProduct, createReview, deleteReview |
| `inquiries.api.js` | getInquiriesByUser, createInquiry, deleteInquiry, updateInquiry |
| `users.api.js` | getUsers, getUserById, getUserByEmail, updateUserProfile, updateUserPoint, updateUserMembership |

**주의:** `src/data/`와 `src/mock/` 두 곳에 데이터가 나뉘어 있습니다.
- `src/data/` — 컴포넌트가 직접 import해서 쓰는 정적 데이터 (homeData, noticeData, inquiriesData, productsData, reviewsData, wishlistData, userData)
- `src/mock/` — API 함수들이 참조하는 목업 원본 데이터

---

## 주요 데이터 스키마

### Product
```js
{ id, name, brand, price, discountPrice, discountRate, category, function, thumbnail, images, description, rating, reviewCount, createdAt }
```
- `category`: pad, mask, ampoule, toner, cream, gel, serum, essence, cleanser, suncare
- `function`: calming, moisture, repair, brightening, elasticity, barrier, cleansing, wrinkle, uv-care, balance

### User
```js
{ id, email, password, name, phone, membership, point, createdAt }
```
- `membership`: yellow, blue, green, vvip

### Cart Item / Wishlist Item
```js
{ id, userId, productId, quantity, addedAt, product: Product }
```

### Inquiry
```js
{ id, userId, title, content, status: '답변대기'|'답변완료', createdAt }
```

### sectionData2 (homeData.js)
```js
{ id, img, hoverImg, addr, productName, price }
```

---

## 스타일링 가이드

### 색상 (하드코딩됨, variables.scss 미사용)
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

### CSS 변수 (동적)
- `--header-height`
- `--hero-section-height`
- `--hero-main-dsc-offset`

### 반응형 타이포그래피 clamp 기준 (hero.scss)
- 영문 기본: `clamp(40px, 8.1vw, 115px)`
- KO headline: `clamp(21px, 4.2vw, 60px)` (영문 대비 52% 비율)
- KO body: `clamp(11px, 2.1vw, 30px)` (영문 대비 26% 비율)

### 관행
- 각 컴포넌트 `.scss` 파일은 컴포넌트와 같은 폴더에 위치
- `clamp()`로 유동형 타이포그래피
- Flexbox 기본, Grid는 Footer에서 사용
- CSS keyframes로 마키 애니메이션 (`hero.scss`)
- 여러 컴포넌트의 scss를 하나로 통합할 때 `/*ComponentName*/` 주석으로 섹션 구분 (notice.scss 참고)

---

## 미구현 / 개발 예정

| 항목 | 파일 | 상태 |
|------|------|------|
| 상품 목록/상세 | `pages/shop/Products.jsx` | stub |
| 브랜드 페이지 | `pages/brand/Brand.jsx` | stub |
| 멤버십 페이지 | `pages/membership/Membership.jsx` | stub |
| 케디힐 페이지 | `pages/kediheal/Kediheal.jsx` | stub |
| 마이페이지 | `pages/myPage/MyPage.jsx` | stub |
| 상태관리 | `src/store/*.js` | 모두 빈 파일 |
| Protected route | `guards.jsx` | stub |
| 모달/토스트 | `Modal.jsx`, `Toast.jsx` | stub (사용 여부 미정) |
| CSS 변수/믹스인 | `_variables.scss`, `_mixins.scss` | 빈 파일 |
| 유틸 함수 | `format.js`, `storage.js` | 빈 파일 |
| 상수 | `src/constants/*.js` | 빈 파일 |

---

## 아키텍처 결정사항

1. **상태관리 라이브러리 미정** — store 파일이 존재하나 구현되지 않음. Zustand 또는 Context API 도입 예정으로 보임
2. **목업 우선 개발** — 백엔드 없이 `mock/` 데이터로 프론트엔드 선개발
3. **이미지 직접 import** — Vite가 자동 최적화 처리
4. **CSS-in-JS 미사용** — SCSS co-located 방식
5. **GSAP 설치됨** — MainSection5 마키 등에 활용, 추후 인터랙션 확장 예정
6. **컴포넌트 분리 원칙** — 페이지(page) → 리스트(list) → 아이템(item) 3단계 분리 패턴 사용 (Notice, Inquiry 참고)
