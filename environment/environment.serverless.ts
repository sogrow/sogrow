export const envName = process.env.NODE_ENV
const envFile = process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''
export const { env } = require(`./environment${envFile}.ts`)
