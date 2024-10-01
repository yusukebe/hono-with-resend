import { PropsWithChildren } from 'hono/jsx'

interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate = ({ firstName }: PropsWithChildren<EmailTemplateProps>) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
)

export default EmailTemplate
