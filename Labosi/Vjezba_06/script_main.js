const errorField = document.querySelector("#poruka");


const checkName = () => {
    if (document.querySelector("#cime").value.length < 3) {
        errorField.innerHTML = "Ime mora biti dugačko barem 3 znaka."
        return false;
    }
    return true;
}

const checkMail = () => {
    mail = document.querySelector("#cemail").value;

    if (!mail.includes('@')) {
        errorField.innerHTML = "Email polje ne sadrzi znak @";
        return false;
    }
    return true;
}

const checkPassword = () => {
    const password = document.querySelector("#cPassword1").value

    if (password.length === 0){
        errorField.innerHTML = "Polje zaporka ne smije biti prazno.";
        return false;
    }

    if (password !== document.querySelector("#cPassword2").value){
        errorField.innerHTML = "Ponovljena lozinka nije ista kao i originalna.";
        return false;
    }

    return true;
}

const checkInternet = () => {
    if (
        document.querySelector("#Checkbox1").checked ||
        document.querySelector("#Checkbox2").checked ||
        document.querySelector("#Checkbox3").checked ||
        document.querySelector("#Checkbox4").checked 
    ){
        return true;
    }

    errorField.innerHTML = "Nije oznacena niti jedna veza prema internetu.";
    return false;
}

const checkBrowser = () => {
    if(
        document.querySelector("#Radio1").checked ||
        document.querySelector("#Radio2").checked ||
        document.querySelector("#Radio3").checked 
    ){
        return true;
    }

    errorField.innerHTML = "Nije oznacen niti jedan browser.";
    return false;
}

const boja_stranice = () => {
    const color = document.querySelector("#boja").value;
    document.querySelector("body").style.backgroundColor = color;
}

const vrijeme = () => {
    const timeField = document.querySelector("#sat")

    setInterval(() => {
        const currentTime = new Date();
        timeField.innerHTML = currentTime.toLocaleTimeString("hr-hr")
    }, 1000)
}

const boldon = (fieldId) => {
    document.querySelector(`#${fieldId}`).style.fontWeight = "bold"
}

const boldoff = (fieldId) => {
    document.querySelector(`#${fieldId}`).style.fontWeight = "normal"
}

const provjera = () => {
    return (
        checkName() && 
        checkMail() && 
        checkPassword() && 
        checkInternet() && 
        checkBrowser()
        );
}

