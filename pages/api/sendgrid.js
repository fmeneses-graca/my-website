// Credits to freeCodeCamp's contributor Manu Arora for the tutorial on
// "How to Build a Contact Form with SendGrid and Next.js"
// Available at: https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/

import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "felipe.meneses96@gmail.com",
            from: "felipemenesesgraca@felipemenesesgraca.com",
            subject: `🚀 Contact from your website 🚀`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>HTML5</title>
                    <meta name="description" content="The HTML5 Herald">
                    <meta name="author" content="SitePoint">
                    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                    <link rel="stylesheet" href="css/styles.css?v=1.0">
                </head>
                
                <body>
                    <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                        <div class="container" style="margin-left: 20px;margin-right: 20px;">
                            <h1>You have a new message from your website! 🚀🚀🚀</h1>
                                <h3>Sender:</h3>
                                <p style="font-size: 16px;">${req.body.fullname}</p>
                                <h3>Email:</h3>
                                <p style="font-size: 16px;">${req.body.email}</p>
                                <h3>Subject:</h3>
                                <p style="font-size: 16px;">${req.body.subject}</p>
                                <h3>Message:</h3>
                                <p style="font-size: 16px;">${req.body.message}</p>
                                <br>
                            </div>
                        </div>
                    </div>
                </body>
                </html>`,
        })
    } catch (error) {
        console.log(error)
        return res.status(error.statusCode || 500).json({ error: error.message })
    }

    return res.status(200).json({ error: "" })
}

export default sendEmail