"use server";
// import GoogleSpreadsheet from "google-spreadsheet";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const sheetId = process.env.SHEET_ID as string;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const KEY = process.env.KEY;

export async function eventBooking(data) {
  const newData = {
    ...data,
    dateOfEvent: new Date(data.dateOfEvent).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  };

  try {
    const serviceAccountAuth = new JWT({
      email: CLIENT_EMAIL,
      key: KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // Assuming data is in the first sheet
    await sheet.loadCells(); // Load the cells of the sheet
    const rows = await sheet.getRows();

    const exists = rows.some((row) => row._rawData.includes(newData.phone));

    if (exists) {
      return {
        error: { field: "phone", message: "Phone number already exist" },
      };
    }
    await sheet.addRow({
      DateOfEntry: newData.dateOfEntry,
      Name: newData.name,
      Phone: newData.phone,
      Email: newData.email,
      DateOfEvent: newData.dateOfEvent,
      Event: newData.event,
      City: newData.city,
    });
    await sheet.addRow(data);
  } catch (error) {
    console.log(error);
  }
}
