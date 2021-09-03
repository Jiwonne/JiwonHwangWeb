function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "<Mailtrap username>",
        Password : "<Mailtrap password>",
        To : '',
        From : "sender@example.com",
        Subject : `${userName} sent you a message`,
        Body : `Name: ${userName} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then(
      message => alert("Mail sent successfully")
    );
    }