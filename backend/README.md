# ORII Backend (Express + MongoDB)

## Quick Start

1. Copy env and edit if needed

```
cp .env.example .env
```

2. Install deps

```
npm install
```

3. Run dev

```
npm run dev
```

Server runs on http://localhost:${PORT:-4000}

## API Summary
- GET /api/health
- Resources (CRUD):
  - /api/projects
  - /api/publications
  - /api/labs
- Forms:
  - POST /api/contact
  - POST /api/applications

## Notes
- Uses Zod for validation.
- Helmet, CORS, Rate limit, Compression enabled.
- See src/ for structure.
