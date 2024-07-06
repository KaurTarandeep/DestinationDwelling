
// Function to handle Check Availability button click
function handleCheckAvailability() {
    event.preventDefault();// it is use to prevent from redirecting to listing directory
    console.log("Working..")
    const checkinDate = document.getElementById("checkinDate").value;
    const checkoutDate = document.getElementById("checkoutDate").value;
    const Adult = document.getElementById("Adult").value;
    const Child = document.getElementById("Child").value;

    // Store data in local storage
    localStorage.setItem("checkinDate", checkinDate);
    localStorage.setItem("checkoutDate", checkoutDate);
    localStorage.setItem("Adult", Adult);
    localStorage.setItem("Child", Child);

    let c = localStorage.getItem("checkinDate")
    console.log(c)
    // Redirect to CheckAvailability.html
    window.location.href = "CheckAvailability.html";
}
// click on another book now btn to redirect
function handle(){
    window.location.href="CheckAvailability.html";
} 

// Login code
function handleLogin(e) {
    e.preventDefault();
    // console.log("zinda hu");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == "" || password == "") {
        document.getElementById("invalidPassword").innerText = " ";
        document.getElementById("invalidPassword").innerText = "Email and Password are required !";
    } else {
        let foundUser = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)

            if (key.startsWith('user_')) {
                const value = localStorage.getItem(key)
                const obj = JSON.parse(value);
                if (email == obj.email && password == obj.password) {
                    localStorage.setItem("loggedinuser", email);
                    window.location.href = "loginSuccessful.html";
                    foundUser = true;
                    break;
                }
                // console.log(obj.password)
            }

        }
        if (!foundUser) {
            document.getElementById("invalidPassword").innerText = " ";
            document.getElementById("invalidPassword").innerText = "Invalid Email and password !";
        }
    } 
}



function checkLoginStatus() {
    const control = document.getElementById("loginfunc")
    const loggedInUserEmail = localStorage.getItem('loggedinuser')
    console.log(loggedInUserEmail)
    if (loggedInUserEmail) {
        const userdata = JSON.parse(localStorage.getItem('user_'+loggedInUserEmail))
        control.innerHTML = `<p> Hi  ${userdata.fname} !
        </p>
        <img src="./assets/logout.png"  id='logout'>
       `
        control.style.fontSize = '15px'
        document.getElementById('logout').onclick = logoutUser;

    } else {
        control.innerHTML = `<a href="LoginPage.html">Login</a>`
    }
}
function logoutUser() {
    localStorage.removeItem('loggedinuser')
    window.location.reload()
}

// Signup

function handleFormSubmission(e) {
    e.preventDefault();
    if (validateForm()) {
        handleSignup()
    }
}

function handleSignup() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (email == "" || password == "" || fname == "" || lname == "") {
        document.getElementById("invalidPassword").innerText = " ";
        document.getElementById("invalidPassword").innerText = "All fields are required !";
    } else {

        let userdata = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }
        // convert obj into json data
        localStorage.setItem('user_' + email, JSON.stringify(userdata))
        console.log("user data : ", userdata)
        window.location.href = 'SignInSuccessful.html'
    }

}



// Forgot password 

function handleForgotSubmission(e){
    e.preventDefault();
    if(validateForm()){
        console.log("Validate sucessful")
        handleForgotPassword()
    }
}

function handleForgotPassword() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    if (email == "" || password == "" || confirmpassword == "") {
        document.getElementById("fieldsrequired").innerText = "All fields are required !";
    } else {
        if (password !== confirmpassword) {
            document.getElementById("fieldsrequired").innerText = " ";
            document.getElementById("passwordDoNotMatch").innerText = "Passwords do not match!";
        } else {
            document.getElementById("passwordDoNotMatch").innerText = "";
            let value = localStorage.getItem("user_"+email) 
            if (value) {
                const obj = JSON.parse(value)
                obj.password = password
                localStorage.setItem("user_"+email, JSON.stringify(obj));
                console.log("entered")
                window.location.href = "ForgotSuccessfully.html"
            }
        }
    }
}




