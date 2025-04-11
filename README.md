# Printerhive Documentation

This repository contains source files for the official [Printerhive](https://printerhive.com) documentation.

## Installation

```bash
# Clone the repository
git clone https://github.com/printerhive/docs.git
cd docs

# Install dependencies
npm install
```

## Development Server

To start the development server:

```bash
npm run docs:dev
```

This will start a local development server at `http://localhost:5173`.

## Production Build

To build the pages for production:

```bash
npm run docs:build
```

To preview the production build:

```bash
npm run docs:preview
```

## Technology

The documentation is built on [VitePress](https://vitepress.dev/), a modern SSG website generator that uses Vue 3. 