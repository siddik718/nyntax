import Record from "../Models/record.model.js";
import { generatePDF } from "../libs/help.js";

export const save = async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();

    const pdfData = await generatePDF(record);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Reservation_Details.pdf');
    return res.send(pdfData);

  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json(error.message || "Internal Server Error");
  }
};
