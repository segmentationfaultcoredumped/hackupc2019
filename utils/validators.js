module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors ={};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email must not be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!emaiñ.match(regex)) {
            errors.email = "Emailmust be a valid email";
        }
    }
    if(password === ''){
        errors.password = "Password must not be empty";
    } else if(password !== confirmPassword){
        errors.confirmPassword ='Passwordsmust match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username,password) => {
    const errors ={};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    if(password === ''){
        errors.password = "Password must not be empty";
    } else if(password !== confirmPassword){
        errors.confirmPassword ='Passwordsmust match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}