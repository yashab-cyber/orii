# ORII — Open Research Institute of India

A full‑stack web application for ORII with a modern React (Vite + TailwindCSS) frontend and a secure Node.js (Express + MongoDB) backend. Includes authentication (JWT), RBAC, member dashboard, projects/updates, announcements, and certificate generation with QR verification.

## Stack
- Frontend: React, Vite, TailwindCSS, Framer Motion
- Backend: Node.js, Express, MongoDB (Mongoose), Zod, JWT, bcrypt, Multer, Nodemailer, PDFKit, QRCode
- Security/ops: Helmet, CORS, Rate limiting, Compression, Docker

## Monorepo structure
```
. 
├─ frontend/       # Vite React app (SPA + Dashboard)
├─ backend/        # Express API (REST, uploads, certificates)
└─ docker-compose.yml  # MongoDB + API (backend) services
```

## Quick start
Choose either Docker (recommended for backend) or run both services locally.

### Option A: Backend via Docker + Frontend locally
1) Start MongoDB and API
```bash
# from repo root
docker compose up -d --build
```
- API: http://localhost:4000
- Health: http://localhost:4000/api/health

2) Start frontend
```bash
cd frontend
npm install
# VITE_API_URL is set in frontend/.env.local to http://localhost:4000
npm run dev
```
- Frontend: http://localhost:5173

### Option B: Run everything locally
- MongoDB: install locally OR run with Docker only:
```bash
# optional: run only Mongo locally via Docker
docker run -d --name mongo -p 27017:27017 mongo:7
```
- Backend:
```bash
cd backend
cp .env.example .env
# edit .env as needed (MONGODB_URI, JWT_SECRET, ORIGIN, APP_URL, SMTP_*)
npm install
npm run dev
```
- Frontend:
```bash
cd frontend
npm install
npm run dev
```

## Environment
Backend (`backend/.env.example`):
- PORT=4000
- MONGODB_URI=mongodb://localhost:27017/orii
- ORIGIN=http://localhost:5173
- JWT_SECRET=replace_me_with_a_long_random_string
- JWT_EXPIRES_IN=7d
- SMTP_HOST/PORT/USER/PASS/FROM (for email)
- APP_URL=http://localhost:5173 (used for links/QR verify)
- ALLOW_DEV_VERIFY=true (dev only; disables in production)

Frontend (`frontend/.env.local`):
- VITE_API_URL=http://localhost:4000

## Seeding sample data
Seed default research labs:
```bash
# If backend running in Docker Compose
docker compose exec api node src/seed.js

# Or locally (requires backend/.env)
node backend/src/seed.js
```

## Auth (dev flow)
1) Sign up via frontend or API
2) For local testing without SMTP, verify using the dev endpoint (only when ALLOW_DEV_VERIFY=true):
```bash
# optional example (JSON body: {"email":"user@example.com"})
# curl -X POST http://localhost:4000/api/auth/dev-verify -H 'Content-Type: application/json' -d '{"email":"you@example.com"}'
```
3) Log in and access the member dashboard

In production, disable dev verify and configure SMTP. Email verification uses `GET /api/auth/verify?token=...` and APP_URL for links.

## Certificates
- Leads/Admins can issue certificates (PDF generated server-side with a QR code)
- Files are stored under `backend/uploads/certificates` and served via `/uploads/...`
- Public verification endpoint: `GET /api/public/verify/:id`
- Frontend public route: `/verify/:id` (opens a simple verification page)

## Key API routes (brief)
- Health: `GET /api/health`
- Auth: `POST /api/auth/signup`, `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/forgot-password`, `POST /api/auth/reset-password`, `POST /api/auth/dev-verify` (dev only)
- Member projects: `GET /api/member/projects/assigned`, `GET /api/member/projects/open`, `POST /api/member/projects/join`, `GET /api/member/projects/:id`
- Updates: `GET/POST /api/updates` and review endpoints (lead/admin)
- Certificates: `GET /api/certificates/mine`, `POST /api/certificates/issue` (lead/admin)
- Public verify: `GET /api/public/verify/:id`
- Announcements, publications, labs, forms: `/api/announcements`, `/api/publications`, `/api/labs`, `/api/...` (contact, applications)

## Frontend routes (selected)
- `/` home, `/about`, `/projects`, `/labs`, `/publications`, `/contact`
- `/login`, `/forgot-password`, `/reset-password`, `/verify` (email), `/verify/:id` (certificate)
- `/dashboard/*` (authenticated): home, projects, updates, certificates, profile, admin

## Development notes
- Static uploads are served at `http://localhost:4000/uploads/...`
- CORS origin is controlled by `ORIGIN` env (default http://localhost:5173)
- Rate limiting: 300 requests/15 minutes under `/api/`
- Keep `ALLOW_DEV_VERIFY=false` in production

## Troubleshooting
- 401 Unauthorized on protected routes: ensure you send `Authorization: Bearer <JWT>` and that the user is verified
- Frontend cannot reach API: confirm `VITE_API_URL` and backend port
- QR verify not resolving: confirm `APP_URL` points to the frontend base and the certificate Id exists
- Mongo connection issues: verify container is running or `MONGODB_URI`

## License
TBD