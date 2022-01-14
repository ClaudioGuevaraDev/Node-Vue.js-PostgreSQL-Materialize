import { Pool } from 'pg'

import config from '../config'

export const pool = new Pool({
    host: config.PG_HOST,
    user: config.PG_USER,
    port: config.PG_PORT,
    password: config.PG_PASSWORD,
    database: config.PG_DATABASE
})