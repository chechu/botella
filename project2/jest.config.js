const coverage = {
    unit: {
        global: {
            branches: 95,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    integration: {
        global: {
            branches: 90,
            functions: 70,
            lines: 70,
            statements: -10,
        },
    },
};

module.exports = {
    testEnvironment: 'node',
    testMatch: [],
    collectCoverageFrom: [
        'lib/**/*.{js,mjs}',
    ],
    coverageThreshold: coverage[process.env.TEST_TYPE],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tests/',
    ],
};
