import { createTransport, createTestAccount } from 'nodemailer'

import config from '../config'

export const sendEmail = async (email) => {
    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: "julio.weissnat66@ethereal.email",
            pass: "Ye6BH7qEt67dwAtZxP"
        }
    })

    await transporter.sendMail({
        from: "julio.weissnat66@ethereal.email",
        to: email,
        subject: 'Confirmar cuenta',
        html: '<a href="http://localhost:4000/api/users" target="_blank">Confirmar Cuenta<a/>'
    })
}