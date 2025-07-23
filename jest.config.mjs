import { defaults } from 'jest-config';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/tests/**/*.ts',
    '**/__tests__/**/*.ts',
  ],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/",
    "/src/models/",
    "/src/config/",
    "/src/exceptions/",
  ],
  coverageThreshold: {
    global: {
    //   statements: 80,
    //   branches: 80,
    //   functions: 80,
      lines: 10,
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  // setupFilesAfterEnv: ["/__tests__/setupTests.ts"]

  //By jdam for Grobal varible in testing
  // globalSetup: "./test/types/jest.globalsetup.ts",
  // setupFilesAfterEnv: ["./test/types/jest.setup.ts"]
};
