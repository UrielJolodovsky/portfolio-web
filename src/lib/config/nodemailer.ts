import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASSWORD,
    },
});

export const emailPayload = (email: string) => {
    return {
        from: email,
        to: 'urieljolo@gmail.com'
    }
}