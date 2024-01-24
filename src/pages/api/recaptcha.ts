export async function POST({ request }: {request: Request}) {
    
    const data = await request.json();
  
    const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
    const requestHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const requestBody = new URLSearchParams({
      secret: import.meta.env.CAPTCHA_PASSWORD,   // Esto puede ser una variable de entorno
      response: data.recaptcha          // El token pasado desde el cliente
    });
  
    const response = await fetch(recaptchaURL, {
      method: "POST",
      headers: requestHeaders,
      body: requestBody.toString()
    });
  
    const responseData = await response.json();
  
    return new Response(JSON.stringify(responseData), { status: 200 });
  }