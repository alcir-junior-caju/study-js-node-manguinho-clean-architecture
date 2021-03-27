module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  coverageReporters: ["text-summary", "text", "lcov"],
  verbose: true,
};
