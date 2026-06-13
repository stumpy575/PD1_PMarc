const users = 
    { "admin": "1234" 
};

window.onload = function () {
    document.getElementById("btnLogin").addEventListener("click", showLogin);
    document.getElementById("btnSignin").addEventListener("click", showSignin);
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("signinForm").addEventListener("submit", handleSignin);
};

function setStatus(msg, isError) {
    const message = document.getElementById("statusMsg");
    message.style.color = isError ? "red" : "green";
    message.textContent = msg;
}

function clearStatus() {
    document.getElementById("statusMsg").textContent = "";
}

function showLogin() {
    document.getElementById("loginPanel").style.display = "block";
    document.getElementById("signinPanel").style.display = "none";
    document.getElementById("btnLogin").classList.add("selected");
    document.getElementById("btnSignin").classList.remove("selected");
    clearStatus();
}

function showSignin() {
    document.getElementById("loginPanel").style.display = "none";
    document.getElementById("signinPanel").style.display = "block";
    document.getElementById("btnLogin").classList.remove("selected");
    document.getElementById("btnSignin").classList.add("selected");
    clearStatus();
}

function handleLogin(evt) {
    evt.preventDefault();
    const enteredUser = document.getElementById("inputUsername").value;
    const enteredPass = document.getElementById("inputPassword").value;

    const isValid = users[enteredUser] && users[enteredUser] === enteredPass;

    if (isValid) {
        setStatus(`Welcome, ${enteredUser}!`, false);
    } else {
        setStatus("Incorrect username or password.", true);
    }
}

function handleSignin(evt) {
    evt.preventDefault();
    const newEmail    = document.getElementById("inputEmail").value;
    const newUsername = document.getElementById("inputNewUser").value;
    const newPass     = document.getElementById("inputNewPass").value;
    const confirmPass = document.getElementById("inputConfirmPass").value;

    if (users[newUsername]) {
        setStatus("This username already exists.", true);
        return;
    }

    if (newPass !== confirmPass) {
        setStatus("Passwords do not match.", true);
        return;
    }

    users[newUsername] = newPass;
    setStatus(`User ${newUsername} registered successfully!`, false);
    showLogin();
}