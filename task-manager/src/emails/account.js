const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';
sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'inboxadeniyi@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'inboxadeniyi@gmail.com',
    subject: 'Sorry to see you go',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
