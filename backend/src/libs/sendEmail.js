import { createTransport } from 'nodemailer'

import config from '../config'

export const sendEmail = async (email, id, token) => {
    
    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: config.NODEMAILER_USER,
            pass: config.NODEMAILER_PASSWORD
        }
    })

    await transporter.sendMail({
        from: config.NODEMAILER_USER,
        to: email,
        subject: 'Confirmar cuenta',
        html: `<a href="http://localhost:4000/api/auth/confirm-account/${id}/${token}" target="_blank">Confirmar Cuenta<a/>`
    })
}