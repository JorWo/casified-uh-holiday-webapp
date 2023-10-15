/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    rootDir: './',
    collectCoverageFrom: [
        'src/**/*.ts*',
    ],
    coverageReporters: ['html', 'json-summary', "text"],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': [
            '@swc/jest', 
            { jsc: { transform: { react: { runtime: 'automatic' } } } },
            { tsconfig: { jsx: 'react-jsx' } },
        ],
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/src/tests/setupJest.ts',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
