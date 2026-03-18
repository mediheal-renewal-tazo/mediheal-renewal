# Project Research Report: Mediheal Renewal

## 1. Project Overview
This project is a renewal of the **Mediheal** (cosmetics brand) website. It is currently in an early scaffolding stage, with a basic directory structure and some core components implemented, but many files are placeholders.

- **Tech Stack:** React 19, Vite 7, GSAP (for animations), SCSS.
- **Goal:** Modernizing the Mediheal web experience with a focus on high-quality animations and a clean, responsive design.

---

## 2. Architecture & Directory Structure
The project follows a standard React structure with some custom organization:

- `src/api`: Mocked API calls using artificial delays and local data.
- `src/app`: Application core, including layouts (`RootLayout`) and routing (`AppRoutes`, `paths.js`).
- `src/assets`: Static assets, including images and logos.
- `src/components`: UI components divided into `common` (global) and feature-specific folders (`home`, `kediheal`).
- `src/constants`: Configuration data (menus, tabs, etc.).
- `src/data`: Mock data for products, users, notices, etc.
- `src/pages`: Main page components.
- `src/store`: Placeholder for state management (currently empty).
- `src/styles`: Global SCSS files (many currently empty) and a `_reset.scss` with font definitions.
- `src/utils`: Utility functions like `delay`, `format`, and `storage`.

---

## 3. Core Features & Implementation Details

### 3.1 Routing
- Uses `react-router-dom` v7.
- Defined in `src/app/routes/index.jsx` and `src/app/routes/paths.js`.
- Includes a sophisticated navigation configuration with support for mega menus and single-level dropdowns.

### 3.2 Animations (GSAP)
- The project heavily utilizes GSAP for smooth, scroll-triggered animations.
- **Example:** `KedihealTransition.jsx` implements a typing effect synchronized with scrolling, using `ScrollTrigger` and `useGSAP`.

### 3.3 Theming & Layout
- `RootLayout` provides a consistent Header and Footer.
- `Header` supports `light` and `dark` themes, switching logos and styles accordingly.
- `Header` also includes a mobile-responsive hamburger menu.

---

## 4. Current Status & Identified Issues (from `src/readme.txt`)

- **Empty Files:** Approximately 74% of the files in `src` (60 out of 81) are 0 bytes. They act as placeholders but increase navigation noise.
- **Inconsistent Imports:** Mixed use of path aliases (`@/`) and deep relative paths (`../../`).
- **Mock Data:** The `api` layer is partially implemented but relies on a non-existent `@/mock` alias (likely should be `@/data`).
- **Styling:** Key style files like `_variables.scss` and `global.scss` are empty, meaning there is no centralized design system yet.

---

## 5. Detailed Component Analysis

| Component | Status | Key Features |
| :--- | :--- | :--- |
| `Header` | Functional | Theme support, mobile menu, dynamic logo. |
| `Footer` | Functional | CS info, business details, policy links. |
| `KedihealTransition` | Functional | Complex GSAP scroll animation, typing effect. |
| `Home` | Partial | Basic structure with `Hero` and `MainVisual` placeholders. |
| `Products`, `MyPage` | Placeholder | Empty components. |
| `auth.api.js` | Partial | Mocked login/signup with local data. |

---

## 6. Recommendations for Next Steps
1. **Cleanup:** Remove or document empty placeholder files to reduce confusion.
2. **Standardization:** Refactor all imports to use the `@/` alias.
3. **Foundation:** Populate `_variables.scss` with brand colors, spacing, and typography tokens.
4. **Data Sync:** Fix the import paths in `src/api` to correctly point to `src/data`.
5. **Feature Development:** Begin implementing the `Products` and `Cart` functionality using the existing mock data.
