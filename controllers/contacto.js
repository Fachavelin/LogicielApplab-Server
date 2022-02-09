const nodemailer = require('nodemailer');

const enviarEmail = async (req, res) => {
  const { email, telefono, asunto } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = transporter.sendMail(
    {
      from: email,
      to: process.env.FINAL_MAIL,
      subject: `LOGICIELAPPLAB Form de Contacto ${email}/${telefono}`,
      text: asunto,
    },
    (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.status(200).json({
          ok: true,
          msg: 'Gracias! Nos pondremos en contacto contigo',
        });
      }
    }
  );
};

module.exports = enviarEmail;
