const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require('ts-jest')

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')


const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",

  /*transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],*/

  /*moduleNameMapper: {
    "~src/(.*)": "<rootDir>/src/$1",
    "~localeApp/(.*)": "<rootDir>/src/app/[locale]/$1",
  },

  "@App/*": ["src/*"],
      "lib/*": ["common/*"]*/

 // "@/*": ["./src/*"],
  //    "@/localeApp/*": ["./src/app/[locale]/*"]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = {
  ...createJestConfig(customJestConfig),

  /*preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],*/

  transform: {},
  transformIgnorePatterns: [],
  setupFilesAfterEnv: ["esm"],

  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
}

///** @type {import('ts-jest').JestConfigWithTsJest} */
//module.exports = {
  //preset: 'ts-jest',
  //testEnvironment: 'jsdom',

 // testPathIgnorePatterns: [
 //   '<rootDir>/node_modules',
  //  '<rootDir>/dist',
  //  '<rootDir>/.next',
  //  '<rootDir>/.vscode',
  //  '<rootDir>/messages'
  //],

  //setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]

  /*moduleNameMapper: {
    '@app(.*)': '<rootDir>/src/app$1'
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']*/
//};

/*const nextJest = require('next/jest');

const createJestConfig = nextJest({dir: './'});

module.exports = createJestConfig({
  moduleNameMapper: {
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation')
  },
  testEnvironment: 'jsdom',
  rootDir: 'src'
});*/
