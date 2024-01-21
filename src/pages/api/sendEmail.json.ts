import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const GET:APIRoute = async({params, request}) => {
    
    const send = await resend.emails.send({
        from: 'urieljolo@gmail.com',
        to: 'urieljolo@gmail.com',
        subject: 'Hello from Resend',
        text: 'Hello from Resend',
        html: '<h1>Hello from Resend</h1>'
    })
    return new Response(
      JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/'
      })
    )
  }