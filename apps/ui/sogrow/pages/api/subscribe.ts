import { NextApiRequest, NextApiResponse } from 'next'

const EMAIL_VALID =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const convertKitConfig = {
  baseUrl: 'https://api.convertkit.com/v3',
  apiKey: process.env.CONVERT_KIT_API_KEY,
  formId: process.env.CONVERT_KIT_FORM_ID,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body

  if (!email || !EMAIL_VALID.test(email)) {
    return res.status(400).json({ error: 'Email required or invalid' })
  }

  const url = `${convertKitConfig.baseUrl}/forms/${convertKitConfig.formId}/subscribe`
  const headers = {
    'Content-Type': 'application/json',
    charset: 'utf8',
  }
  const body = {
    api_key: convertKitConfig.apiKey,
    email,
  }

  const result = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })

  const data = await result.json()

  if (!result.ok) {
    return res.status(500).json({ error: data.error })
  }

  return res.status(201).json({ error: '' })
}
