module.exports = {
  testEnvironment: 'jsdom', // Use jsdom for testing React components
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel to transpile JSX and TypeScript
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Add jest-dom matchers
};
