module.exports = {
    roots: ["<rootDir>/src/tests"], //TODO: replace sample-service by the name you give
    testMatch: [
      "/**/*.tests.js"
    ],
    coverageReporters: ["lcov"],
    coverageDirectory: "test-coverage",
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};