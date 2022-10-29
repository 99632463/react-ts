module.exports = {
  roots: ["./src"],
  // collectCoverageFrom: [
  //   "./src/**/*.test.tsx"
  // ],
  // globals: {
  //   "JWT_SECRET": "local",
  //   "IS_TEST": "true"
  // },
  // snapshotSerializers: [
  //   "<rootDir>/node_modules/enzyme-to-json/serializer"
  // ],
  // testPathIgnorePatterns: [
  //   "<rootDir>/(node_modules)/"
  // ],
  // testURL: "http://localhost:9066",
  moduleDirectories: [
    "node_modules"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/.*/__mocks__"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.less?$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",

  setupFilesAfterEnv: [
    "./node_modules/jest-enzyme/lib/index.js",
    "<rootDir>/__mocks__/setupTests.ts"
  ],
  unmockedModulePathPatterns: [
    "react",
    "enzyme",
    "jest-enzyme"
  ],
  moduleNameMapper: {
    // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|mess|less)$": "identity-obj-proxy",
    // "axios": "<rootDir>/__mocks__/axios.ts",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@business(.*)$": "<rootDir>/src/business$1",
    "^@common(.*)$": "<rootDir>/src/common$1",
    // "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@container(.*)$": "<rootDir>/src/container$1",
    // "^@router(.*)$": "<rootDir>/src/router$1",
    "@components": "<rootDir>/src/components/index.ts",
    "^@mocks(.*)$": "<rootDir>/__mocks__$1",
    // "@http": "<rootDir>/src/common/utils/http.ts"
  }
}