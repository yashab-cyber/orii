import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';

const ensureDir = (dir) => { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); };

export const generateCertificate = async ({ userName, projectTitle, summary, certificateId }) => {
  const outDir = path.join(process.cwd(), 'uploads', 'certificates');
  ensureDir(outDir);
  const fileName = `${certificateId}.pdf`;
  const filePath = path.join(outDir, fileName);

  const verifyUrl = `${process.env.APP_URL || 'http://localhost:5173'}/verify/${certificateId}`;
  const qrPngDataUrl = await QRCode.toDataURL(verifyUrl);

  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  doc.fontSize(26).text('ORII Certificate of Contribution', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`This certifies that ${userName}`, { align: 'center' });
  doc.text(`has contributed to the project: ${projectTitle}`, { align: 'center' });
  doc.moveDown();
  doc.text(`Summary: ${summary}`, { align: 'left' });
  doc.moveDown();
  doc.text(`Date: ${new Date().toISOString().slice(0, 10)}`, { align: 'left' });

  // Draw QR
  const qrBase64 = qrPngDataUrl.split(',')[1];
  const qrBuffer = Buffer.from(qrBase64, 'base64');
  doc.image(qrBuffer, doc.page.width - 150, doc.page.height - 200, { width: 100 });

  doc.end();

  await new Promise((resolve) => stream.on('finish', resolve));
  return { filePath, publicPath: `/uploads/certificates/${fileName}`, verifyUrl };
};
