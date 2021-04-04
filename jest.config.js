module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/main/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: "@shelf/jest-mongodb",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  coverageReporters: ["text-summary", "text", "lcov"],
  verbose: true,
};
