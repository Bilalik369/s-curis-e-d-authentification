import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config({ path: '../.env' }); 


export const mailtrapClient = new MailtrapClient({
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  address: "hello@enaa.ma",
  name: "Mailtrap Test",
};
