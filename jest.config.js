const ignores = ['/node_modules/', '__mocks__'];

module.exports = {
  collectCoverageFrom: ['src/lib/cambridge.ts', 'src/lib/google-translate.ts'],
  testMatch: ['**/test/**/*.spec.+(ts|tsx|js)'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores, 'src/(umd|cjs|esm)-entry.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
  setupFiles: ['./jest.setup.js'],
};
