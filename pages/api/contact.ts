// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("test");
  res.status(200).json({ name: "John Doe" });
}
