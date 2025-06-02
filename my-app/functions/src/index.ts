import * as nodemailer from "nodemailer";
import * as functions from "firebase-functions";


/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Environmental variables in production. 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "reviveautodetailing@gmail.com",
    }
});

export const sendTeamMessage = functions.https.onCall(async (data, context) => {
    const {name, email, message} = data;

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "reviveautodetailing@gmail.com",
        subject: "Meet the Team Inquiry",
        text: message,
    };

    try{
        await transporter.sendMail(mailOptions);
        return {success: true};
    }catch (error) {
        console.error("Failed to send email", error);
        throw new functions.https.HttpsError("internal", "Email sending failed");
    }
});