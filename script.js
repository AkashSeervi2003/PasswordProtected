function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace 'your_password' with the actual password you want to use
    if (password === "AkashSuman") {
        window.location.href = "https://6585652d38826ab17b269c59--wondrous-cactus-059199.netlify.app/";
    } else {
        alert("Incorrect password. Please try again.");
    }
}

