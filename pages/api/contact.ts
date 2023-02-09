// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface SendGridEmail {
  to: string;
  from: string;
  templateId: string;
  dynamic_template_data: DyanamicTemplateData;
}

interface DyanamicTemplateData {
  requester: string;
  message: string;
  requesterEmail: string;
  mobile: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  if (!email || !validateEmail(email))
    res.status(400).json({ error: "Please input valid email" });
  if (!name) res.status(400).json({ error: "Name is required" });
  if (!message) res.status(400).json({ error: "Message is required" });

  const emailToSend: SendGridEmail = {
    // Don't get confused...
    // This is basically my personal email address for both as the API is handling sending on my behalf
    to: process.env.CONTACT_EMAIL as string,
    from: email,
    templateId: "d-127d36b1c1e5415ab71893efe57fefa0",
    dynamic_template_data: {
      requester: req.body.name,
      message: req.body.message,
      requesterEmail: req.body.email,
      mobile: req.body.mobile || "N/A",
    },
  };

  return sgMail
    .send(emailToSend)
    .then(() => {
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    })
    .catch((error) => {
      console.log(process.env.SENDGRID_API_KEY);
      console.log(JSON.stringify(error));
      return res.status(500).json({
        success: false,
        errorCode: "INTERNAL_SERVER_ERROR",
        message: "Error sending email to Shane Keney.  Please try again later.",
      });
    });
}

function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
