// const validateEmail=()=>{
//     event.preventDefault();

//     const email=document.querySelector('#email').value.trim();
//     const emailError=document.querySelector('#email-error');
//     const emailRegx= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

//     if(emailRegx.test(email)){
//         emailError.innerHTML="<p>valid</p>";
//     }else{
//         emailError.innerHTML="<p>invalid</p";
//     }

// }


function validateEmail(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const error = document.querySelector("#email-error");

    error.innerHTML = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        error.innerHTML = "<p style='color:red'>Email is required.</p>";
    } else if (!emailPattern.test(email)) {
        error.innerHTML = "<p style='color:red'>Invalid email format.</p>";
    } else {
        error.innerHTML = "<p style='color:green'>Valid email.</p>";
    }
}
