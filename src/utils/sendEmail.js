import emailjs from 'emailjs-com';

const sendEmail = (to, subject, message) => {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: to,
    subject: subject,
    message: message,
  }, "YOUR_USER_ID")
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
};

export default sendEmail;
