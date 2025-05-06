import { mailtrapTransport, sender } from "./mailtrap.config.js"
import {VERIFICATION_EMAIL_TEMPLATE} from "./emailTemplates.js"




export const sendVerificationEmail = async(email ,  verificationToken)=>{
    const recipient = [{email}]

    try{
        const response = await mailtrapTransport.sendMail({
            from : sender,
            to : recipient,
            subject: "Verifycation your email", 
            html : VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}" , verificationToken),
            category :"Email verfication"
        }) 

        console.log("Emaol sent successfuly", response)
    }catch(error){
        console.error(`Error sending verfication` , error)
        throw error(`Error sending email : ${error}` );

    }
}