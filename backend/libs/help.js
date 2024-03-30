import PDFDocument from 'pdfkit';
import fetch from 'node-fetch';

export const generatePDF = async (record) => {
    const { _id, image, email } = record;

    const doc = new PDFDocument();
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.font('Helvetica-Bold').fontSize(16).text('Reservation Details', { align: 'center' });
    doc.moveDown();
    doc.font('Helvetica').fontSize(12).text(`Reservation ID: ${_id}`);
    doc.font('Helvetica').fontSize(12).text(`Email: ${email}`);
    doc.moveDown();

    const imageResponse = await fetch(image);
    const imageData = await imageResponse.arrayBuffer();

    doc.text('Charges Summary', { align: 'center' })
       .moveDown()
       .image(imageData, { align: 'center' });

    doc.end();

    const pdfData = Buffer.concat(buffers);
    return pdfData;
};