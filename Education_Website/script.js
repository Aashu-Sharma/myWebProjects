let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aashubharadwaj7804@gmail.com",
        Password: "A75DADCCFB6DF03636A2DA481C2D6378FCD7",
        To: 'sujalsharma7804@gmail.com',
        From: document.getElementById("email").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}