import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' }); 

const client = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});


client
  .send({
    from: {
      email: "hello@demomailtrap.co",
      name: "IKEN BILAL",
    },
    to: [
      {
        email: "bilalikan224@gmail.com",
        name: "Recipient Name",
      },
    ],
    subject: "Test Email from Mailtrap",
    text: "This is a test email from Mailtrap.",
  })
  .then((response) => {
    console.log("seccusu", response);
  })
  .catch((err) => {
    console.error("error", err);
  });
