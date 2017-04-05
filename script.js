function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        alert("Input your first name.");
        return false;
    }
    var x = document.forms["myForm"]["lastname"].value;
    if (x == "") {
        alert("Input your last name.");
        return false;
    }
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Input a valid email address.");
        return false;
    }
}
