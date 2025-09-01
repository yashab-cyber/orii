import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { connectDB } from './services/db.js';
import healthRouter from './routes/health.js';
import projectsRouter from './routes/projects.js';
import publicationsRouter from './routes/publications.js';
import labsRouter from './routes/labs.js';
import formsRouter from './routes/forms.js';
import authRouter from './routes/auth.js';
import memberProjectsRouter from './routes/memberProjects.js';
import updatesRouter from './routes/updates.js';
import certificatesRouter, { certificatesPublicRouter } from './routes/certificates.js';
import adminRouter from './routes/admin.js';
import announcementsRouter from './routes/announcements.js';
import { notFound, errorHandler } from './utils/errors.js';

connectDB();

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const origin = process.env.ORIGIN || 'http://localhost:5173';
app.use(cors({ origin, credentials: true }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use('/api/', limiter);

app.use('/api/health', healthRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/publications', publicationsRouter);
app.use('/api/labs', labsRouter);
app.use('/api', formsRouter); // contact, applications
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRouter);
app.use('/api/member/projects', memberProjectsRouter);
app.use('/api/updates', updatesRouter);
app.use('/api/certificates', certificatesRouter);
app.use('/api/public', certificatesPublicRouter);
app.use('/api/admin', adminRouter);
app.use('/api/announcements', announcementsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
