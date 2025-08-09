import nodemailer from 'nodemailer';
import { MAIL_HOST } from '$env/static/private';
import { MAIL_USERNAME } from '$env/static/private';
import { MAIL_PASSWORD } from '$env/static/private';
import { HCAPTCHA_SECRET } from '$env/static/private';


export const actions = {
    default: async ({ request }: { request: any }) => {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const beta = data.get('beta');
        const source = data.get('source');
        const answer = data.get('answer');
        const hCaptchaToken = data.get('h-captcha-response');

        const email_from = 'beta@fourthdot.com'
        const email_to = 'beta@fourthdot.com'
        const email_subject = `Beta Request for Postcards`
        const email_message = `Name: ${name}\nEmail: ${email}\nBeta Tested Previously: ${beta}\nWhere they heard about Postcards: ${source}\nRequest Reason: ${answer}`;

        let verified = false;

        await new Promise((resolve, reject) => {
            fetch(`https://hcaptcha.com/siteverify?response=${hCaptchaToken}&secret=${HCAPTCHA_SECRET}`, { 'method': 'POST'})
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        verified = true;
                        resolve(json);
                    } else {
                        reject(json);
                    }
                });
        });

        if (verified) {
            const transporter = nodemailer.createTransport({
                service: MAIL_HOST,
                auth: {
                    user: MAIL_USERNAME,
                    pass: MAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: email_from,
                to: email_to,
                subject: email_subject,
                text: email_message,
            };

            await new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        } else {
            console.log('The request was not verified by hCaptcha');
        }
    }
};