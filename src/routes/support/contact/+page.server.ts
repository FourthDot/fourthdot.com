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
        const subject = data.get('subject');
        const message = data.get('message');
        const hCaptchaToken = data.get('h-captcha-response');

        const email_from = 'support@fourthdot.com'
        const email_to = 'support@fourthdot.com'
        const email_subject = `Support Form Submission: ${subject}`
        const email_message = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

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