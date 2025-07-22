export default {
  '*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['tsc --noEmit'],
  '*.{json,md,css,scss}': ['prettier --write'],
};
