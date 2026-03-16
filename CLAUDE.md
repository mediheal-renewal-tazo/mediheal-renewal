# MEDIHEAL TAZO — 프로젝트 가이드

## 프로젝트 개요

MEDIHEAL 스킨케어 브랜드의 e-커머스 웹사이트. React + Vite 기반으로 구축된 프론트엔드 프로젝트이며, 현재 홈 페이지 구현이 진행 중입니다. 백엔드는 아직 없고, 목업 API와 목업 데이터로 동작합니다.

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
│   │   ├── Intro.jsx         # 애니메이션 인트로
│   │   └── Home.scss
│   └── [나머지 페이지들]      # 모두 stub (빈 컴포넌트)
├── components/
│   ├── common/
│   │   ├── header/           # Header.jsx + Header.scss
│   │   ├── footer/           # Footer.jsx + Footer.scss
│   │   ├── modal/            # stub
│   │   └── toast/            # stub
│   └── home/
│       ├── Hero.jsx          # 스크롤 애니메이션 히어로
│       ├── MainVisual.jsx
│       ├── MainSection1~5.jsx
│       ├── ProductItem.jsx   # 재사용 상품 카드 컴포넌트
│       └── hero.scss         # 홈 전체 스타일
├── api/                      # 목업 API 함수들 (8개 모듈)
├── data/                     # 컴포넌트용 정적 데이터
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
    │   ├── home/             # hero00~07_fin.png, pd_img, sec3_card
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
| `/shop` | SHOP | stub |
| `/brand` | BRAND | stub |
| `/membership` | MEMBERSHIP | stub |
| `/notice` | COMMUNITY | stub |
| `/kediheal` | KEDIHEAL | stub |
| `/mypage` | MY_PAGE | stub |
| `/cart` | CART | stub |
| `/inquiry` | INQUIRY | stub |

모든 라우트는 `RootLayout`으로 감싸져 Header + Footer가 공통 적용됩니다.

---

## 홈 페이지 구성

Home 페이지는 아래 섹션들이 순서대로 렌더링됩니다:

1. **Intro** — 전체화면 인트로 (글자 순차 등장 + 카운터 애니메이션, 900ms 페이드)
2. **Hero** — 3D CSS 큐브 + 스크롤 패럴랙스 (requestAnimationFrame 기반)
3. **MainVisual** — 텍스트 디자인 섹션
4. **MainSection1** — 배경 이미지 + 4개 상품 쇼케이스
5. **MainSection2** — MEDIHEAL BEST 5개 상품
6. **MainSection3** — R&D Lab 4개 카드 (L&P Lab, Beauty Science Center 등)
7. **MainSection4** — 멤버십 4단계 카드 (YELLOW/BLUE/GREEN/VVIP)
8. **MainSection5** — 성분 이름 마키 스크롤 애니메이션

### Hero 섹션 애니메이션 방식
- `requestAnimationFrame` + `ResizeObserver` 조합
- 스크롤 진행도를 CSS 변수로 전달 (`--hero-main-dsc-offset` 등)
- 8개 hero 이미지를 레이어로 쌓아 3D 효과 구현
- JavaScript와 CSS 애니메이션 분리 설계

---

## 컴포넌트 패턴

### ProductItem
공통 상품 카드 컴포넌트. 여러 섹션에서 props로 다르게 렌더링:
```jsx
<ProductItem img={img} addr={addr} title={title} dsc={dsc} condition={condition} grade={grade} benefit={benefit} />
```

### Header
- `theme` prop으로 로고 스위칭 (light: logo_2, dark: logo_1)
- 모바일 햄버거 메뉴 (`isMenuOpen` state)
- 스크롤 시 페이드인 (`isVisible` state)
- 장바구니 뱃지 있으나 현재 `display: none` 처리됨

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
- `src/data/` — 컴포넌트가 직접 import해서 쓰는 정적 데이터
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

---

## 스타일링 가이드

### 색상 (하드코딩됨, variables.scss 미사용)
| 용도 | 값 |
|------|----|
| Primary (네이비) | `#151789` |
| Background Light | `#f2f4fb` |
| Text Dark | `#222` |
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

### 관행
- 각 컴포넌트 `.scss` 파일은 컴포넌트와 같은 폴더에 위치
- `clamp()`로 유동형 타이포그래피
- Flexbox 기본, Grid는 Footer에서 사용
- CSS keyframes로 마키 애니메이션 (`hero.scss`)

---

## 미구현 / 개발 예정

| 항목 | 파일 | 상태 |
|------|------|------|
| 상태관리 | `src/store/*.js` | 모두 빈 파일 |
| 인증 흐름 | Login, guards.jsx | stub |
| 장바구니 UI | Cart.jsx | stub |
| 마이페이지 | MyPage.jsx | stub |
| 상품 목록/상세 | Products.jsx | stub |
| 모달/토스트 | Modal.jsx, Toast.jsx | stub |
| CSS 변수/믹스인 | `_variables.scss`, `_mixins.scss` | 빈 파일 |
| 유틸 함수 | `format.js`, `storage.js` | 빈 파일 |
| 상수 | `src/constants/*.js` | 빈 파일 |

---

## 아키텍처 결정사항

1. **상태관리 라이브러리 미정** — store 파일이 존재하나 구현되지 않음. Zustand 또는 Context API 도입 예정으로 보임
2. **목업 우선 개발** — 백엔드 없이 `mock/` 데이터로 프론트엔드 선개발
3. **이미지 직접 import** — Vite가 자동 최적화 처리
4. **CSS-in-JS 미사용** — SCSS 모듈 방식 (co-located)
5. **GSAP 설치됨** — 현재 MainSection5 마키 등에 활용, 추후 인터랙션 확장 예정
