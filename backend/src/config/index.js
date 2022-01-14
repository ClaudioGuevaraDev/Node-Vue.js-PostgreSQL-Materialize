import dotenv from 'dotenv'

dotenv.config()

const config = {
    APP_PORT: process.env.APP_PORT || '4000',

    PG_HOST: process.env.PG_HOST || 'localhost',
    PG_USER: process.env.PG_USER || 'postgres',
    PG_PORT: process.env.PG_PORT || '5432',
    PG_PASSWORD: process.env.PG_PASSWORD || '',
    PG_DATABASE: process.env.PG_DATABASE || '',

    TOKEN_SECRET: process.env.TOKEN_SECRET || '123',

    NODEMAILER_USER: process.env.NODEMAILER_USER || 'claudiño',
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD || '123'
}

export default config