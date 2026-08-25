# TypeScript Basics

A structured collection of TypeScript lessons and examples created while learning strongly typed JavaScript and modern web development.

## About This Repository

This repository explores TypeScript from the fundamentals through typed data, functions, object modeling, interfaces, utility types, and classes. Each part contains TypeScript source files, compiled JavaScript output, and TypeScript compiler configuration where applicable.

## Repository Structure

### Part01

Introduction to TypeScript and the TypeScript compiler, including basic source files and compiler configuration.

### Part02

Core TypeScript concepts:

- Primitive data types
- Type annotations and type inference
- `any` and `unknown`
- Arrays and tuples
- Compile-time and runtime errors
- Objects and nested objects
- Type aliases and interfaces
- Optional properties and declaration merging
- Utility types such as `Partial`, `Required`, and `Readonly`

### Part03

Further practice with typed objects, functions, and classes, including examples that can be connected to an HTML page.

## Topics Covered

- TypeScript installation and compiler commands
- Compiling TypeScript to JavaScript
- `tsconfig.json` configuration
- Watch mode with `tsc --watch`
- Primitive and non-primitive types
- Type inference and explicit annotations
- Union types
- Arrays and tuples
- Object types
- Type aliases and interfaces
- Interface extension and declaration merging
- Optional properties
- Utility types
- Functions and classes

## Getting Started

1. Install TypeScript globally:

   ```bash
   npm install -g typescript
   ```

2. Verify the installation:

   ```bash
   tsc --version
   ```

3. Open a part folder and compile a TypeScript file:

   ```bash
   tsc first.ts
   ```

4. Compile with a specific JavaScript target when needed:

   ```bash
   tsc first.ts --target es2016
   ```

5. Use an existing configuration file or create one with:

   ```bash
   tsc --init
   ```

6. Watch for changes during development:

   ```bash
   tsc --watch
   ```

## Skills Practiced

- Adding static types to JavaScript code
- Detecting type errors during development
- Modeling data with aliases and interfaces
- Compiling and organizing TypeScript projects
- Using modern object-oriented TypeScript features
- Connecting TypeScript output with browser-based HTML examples

## Author

**Prabhakar Bharti**

- GitHub: [@prbharti25](https://github.com/prbharti25)
