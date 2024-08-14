# React Counter Example with Vite and TypeScript

This project demonstrates two approaches to building a simple counter application in React, created with Vite and TypeScript:

1. **Main Branch:** Using the `useState` hook for state management.
2. **useReducer Branch:** Using the `useReducer` hook for state management.

## Table of Contents

- [Introduction](#introduction)
- [Branches Overview](#branches-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Switching Between Branches](#switching-between-branches)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Learn More](#learn-more)
- [License](#license)

## Introduction

This project showcases how to implement a simple counter application using two different React hooks for state management. The counter allows users to increment, decrement, and reset the count value.

The project is built using Vite, a fast build tool that offers an optimized development experience, and TypeScript, which provides type safety in JavaScript applications.

## Branches Overview

- **Main Branch (useState):** This branch uses the `useState` hook to manage the counter's state. It's straightforward and ideal for simpler state management needs.
  
- **useReducer Branch:** This branch uses the `useReducer` hook, which is more suitable for complex state management scenarios. The reducer logic is placed in a separate file to demonstrate better code organization.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CamiloPinzon/State-Management.git
   cd State-Management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Project

To run the project on the main branch (useState):

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the Vite development server. By default, the project will be available at `http://localhost:5173`. You can view the project by navigating to this URL in your web browser.

### Switching Between Branches

To switch to the `useReducer` branch:

```bash
git checkout useReducer
```

Then, start the development server again:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Project Structure

```plaintext
react-counter-example/
├── src/
│   ├── components/
│   │   └── Counter.tsx
│   ├── reducers/  (only in useReducer branch)
│   │   └── counterReducer.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- **Main Branch (useState):**
  - The `Counter` component handles all state management with `useState`.

- **useReducer Branch:**
  - The `Counter` component utilizes `useReducer` for state management.
  - The reducer logic is moved to a separate file (`counterReducer.ts`) under the `reducers` directory.

## Usage

- **Increment:** Increases the count by 1.
- **Decrement:** Decreases the count by 1.
- **Reset:** Resets the count to 0.

### Example (useState Approach):

```tsx
const increment = () => setCount(prevCount => prevCount + 1);
```

### Example (useReducer Approach):

```tsx
const increment = () => dispatch({ type: 'increment' });
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the MIT License.