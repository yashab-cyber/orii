import 'dotenv/config';
import { connectDB } from './services/db.js';
import Lab from './models/Lab.js';

const labs = [
  { slug: 'cybersecurity', title: 'Cybersecurity & AI Lab', description: 'Security, AI/ML, Quantum cryptography', focus: ['Threat Detection', 'AI Security', 'Quantum'] },
  { slug: 'hardware', title: 'Open Hardware & Robotics Lab', description: 'Open hardware, Robotics, IoT', focus: ['Agritech', 'Medical Devices', 'Automation'] },
  { slug: 'biotech', title: 'BioTech & Health Lab', description: 'Precision medicine, Drug discovery', focus: ['Genomics', 'AI in Healthcare'] },
  { slug: 'energy', title: 'Clean Energy & Space Research Lab', description: 'Sustainable energy, Space tech', focus: ['Solar', 'Energy Storage', 'Satellites'] },
];

await connectDB();
await Lab.deleteMany({});
await Lab.insertMany(labs);
console.log('Seeded labs');
process.exit(0);
