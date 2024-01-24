import type { APIRoute } from "astro"
import nodemailer from "nodemailer"
import { emailPayload } from "../../lib/config/nodemailer"
import { transporter } from "../../lib/config/nodemailer"

export const POST:APIRoute = async ({params, request}) => {
  
  const body = await request.json()
  const { name, email, message } = body
  const info = await transporter.sendMail({
      ...emailPayload('urieljolo@gmail.com'),
      subject: `Message sent by ${name} - ${email}`,
      text: message,
    })
    
    if (info.accepted.length) {
      return new Response(
        JSON.stringify({ 
          message: "Email sent successfully",
          status: 200,
        }), 
    )} else {
      return new Response(
        JSON.stringify({ 
          message: "Email not sent",
          status: 500,
        }), 
    )
  }
}