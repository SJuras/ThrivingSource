const express = request("express");
const app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail", cors(), async(req, res) => {
  let {text} = req.body
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "test@test.com",
    subject: "test e-mail",
    html: `
      <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
      ">
        <h2>1. What is your biggest business concern/challenge at the moment?</h2>
        <p>${text1}</p>

        <h2>2. What are your areas of interest?</h2>
        <p>${text2}</p>

        <h2>3. How are you currently driving most of your traffic?</h2>

        <h4>4. Your contact E-mail address</h4>
        <p>${senderEmail}</p>

        <p>Best regards</p>
      </div>
    `
  })

});

// route for mail sending

app.listen(process.env.PORT || 4000, () => {
  console.log("server is listening on port 4000");
});
