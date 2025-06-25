module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/src/App.test.js", "<rootDir>/src/validation.test.js"]
};
