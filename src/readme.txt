Project Structure Review (src)

1) Current status
- Total files in src: 81
- Empty files (0 bytes): 60
- Most pages/layouts/store/constants/mock files are not connected yet.
- Import style is mixed: alias (@/) and deep relative paths (../../).
- Style foundation files exist but are empty: global.scss, _variables.scss, _mixins.scss, _reset.scss.
- routes/index.jsx has broken comment text (likely encoding issue).

2) Practical assessment
- Good: top-level separation exists (app, pages, components, store, styles).
- Needs improvement: current state is mostly scaffold; domain-level cohesion is weak for real team workflows.

3) Priority improvements
[P0] Remove or document empty files
- Delete unused empty files now, or add clear TODO purpose.
- Reason: too many placeholders increase navigation cost and confuse scope.

[P0] Standardize imports
- Use alias-based imports consistently: @/...
- Example: ../../pages/home/Home -> @/pages/home/Home
- Add lint guard to discourage deep relative imports.

[P1] Move toward feature/domain grouping
- Keep current structure for now, but create new code by feature.
- Example: products page + related state/constants/mock under one products feature area.

[P1] Clarify common vs feature-specific components
- Keep only truly reusable UI in components/common.
- Move page-specific components into the relevant feature/page folder.

[P1] Finalize style architecture
- Decide if global reset/tokens/mixins are used, then import them explicitly at app entry.
- Define boundary: global tokens vs page-local SCSS.

[P2] Reorganize constants/store/mock ownership
- Keep only global shared data in src/constants and src/store.
- Put feature-specific data/state/mocks in each feature folder.

[P2] Add index entry points (barrel exports)
- Add index.js files for routes, common components, and utilities.
- This reduces import noise and lowers refactor friction.

4) Recommended target (gradual)
src/
  app/
  shared/
  features/
    auth/
    products/
    notice/
  assets/

5) Immediate actions
1. Clean empty files first.
2. Unify import paths with alias.
3. Lock style strategy (global/reset/tokens).
4. Add new work in feature-based folders from now on.
