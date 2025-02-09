function correctForm() {
    const email =document.querySelector(".email-form").value
    const pass =document.querySelector(".pass-form").value
        if (email === "" || pass === "") {
            alert("please enter inputs")
            return
        }else if (pass.length <= 8) {
            alert("Password must be at least 8 characters")
            return
        }else{
            alert("success")
        }
}
const sign = document.querySelector(".sign");
sign.addEventListener("click",correctForm)