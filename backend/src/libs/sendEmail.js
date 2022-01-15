import { createTransport } from 'nodemailer'

import config from '../config'

export const sendEmail = async (email, id, token) => {
    const user = config.NODEMAILER_USER
    const pass = config.NODEMAILER_PASSWORD

    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        }
    })

    await transporter.sendMail({
        from: user,
        to: email,
        subject: 'Confirmar cuenta',
        html: `<a href="http://localhost:4000/api/auth/confirm-account/${id}/${token}" target="_blank">Confirmar Cuenta<a/>`
    })
}