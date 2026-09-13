# UnEarthed

A gift discovery web application that helps users explore a curated collection of unique gifts filtered by price point and audience.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Reference](#api-reference)
- [Tech Stack](#tech-stack)

---

## Overview

UnEarthed serves a static frontend through an Express server and exposes a REST API for gift data. Users can browse 36 curated gifts, each with a name, price point, target audience, image, and description.

---

## Project Structure

```
unearthed/
├── client/
│   ├── public/
│   │   ├── scripts/
│   │   │   ├── headers.js       # Renders the site header dynamically
│   │   │   └── gifts.js         # Fetches and renders gift cards
│   │   └── logo.png
│   ├── src/
│   │   └── style.css            # Global styles
│   └── index.html               # Entry point
├── server/
│   ├── data/
│   │   └── gifts.js             # Static gift data (36 items)
│   ├── routes/
│   │   └── gifts.js             # /gifts route handlers
│   └── server.js                # Express app entry point
├── package.json
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

---

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd unearthed
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3001`

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Starts the server with nodemon (auto-restarts on file changes) |
| `start` | `npm start` | Starts the server with node (production) |
| `build` | `npm run build` | Build step placeholder |

---

## API Reference

Base URL: `http://localhost:3001`

### Gifts

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/gifts` | Returns an array of all 36 gift objects |
| `GET` | `/gifts/:giftId` | Returns the detail page for a specific gift |

#### Example response — `GET /gifts`

```json
[
  {
    "id": 1,
    "name": "Disco Ball Candle",
    "pricePoint": "$",
    "audience": "Candle Lovers",
    "image": "https://...",
    "description": "A party in a candle.",
    "submittedBy": "Sasha",
    "submittedOn": "2022-09-04T14:48:00Z"
  }
]
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Server | Express 5 |
| Dev server | Nodemon |
| Frontend | Vanilla HTML, CSS, JavaScript |
| Data | Static JSON array |
