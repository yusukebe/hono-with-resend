import { Hono } from 'hono'
import { Resend } from 'resend'
import { EmailTemplate } from './emails/email-template'

const app = new Hono()

app.get('/', async (c) => {
  const resend = new Resend('re_123456789')

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: (<EmailTemplate firstName="Yusuke" />).toString()
  })

  if (error) {
    return c.json(error, 400)
  }

  return c.json(data)
})

export default app
