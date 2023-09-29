function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "flyshlight@gmail.com",
        Password : "1E45F84529C4C0977741852D512BA7DB6B80",
        To : 'flyshlight@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}