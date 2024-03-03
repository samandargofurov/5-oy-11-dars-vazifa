const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validateRegister(name, surname, age, email, username, password, repassword) {
    if (name.value.trim().length <= 3) {
        alert("Name is empty");
        name.focus();
        return false;
    }

    if (Number(name.value)) {
        alert('Name is should not be number');
        name.focus();
        return false;
    }
    
    if (surname.value.trim().length <= 3) {
        alert("Surname is empty");
        surname.focus();
        return false;
    }

    if (Number(surname.value)) {
        alert('Surname is should not be number');
        surname.focus();
        return false;
    }

    if (!age.value) {
        alert("Age is empty");
        age.focus();
        return false;
    }

    if (age.value < 0 || age.value > 130) {
        alert("Age is empty");
        age.focus();
        return false;
    }

    if (!Number(age.value)) {
        alert('Age need to be number')
        age.focus();
        return false;
    }

    if (email.value.trim().length <= 3) {
        alert("Email is empty");
        email.focus();
        return false;
    }

    if (!validateEmail(email.value)) {
        alert('The email did not match');
        email.focus();
        return false
    }

    if (username.value.trim().length <= 3) {
        alert("Username is empty");
        username.focus();
        return false;
    }

    if (password.value.trim().length <= 3) {
        alert("Password is empty");
        password.focus();
        return false;
    }

    if (repassword.value.trim().length <= 3) {
        alert("Repassword is empty");
        repassword.focus();
        return false;
    }

    if (password.value != repassword.value) {
        alert('password and repassword did not match');
        password.focus();
        return false
    }

    let users = getData();
    if (users.length) {
        let isExist = users.some(user => {
            return user.username == username.value
        })

        if (isExist) {
            alert("such a username exists")
            return false
        }
    }

    return true;
};

function validateLogin(username, password) {
    if (username.value.trim().length <= 3) {
        alert("Username is empty");
        username.focus();
        return false;
    }

    if (password.value.trim().length <= 3) {
        alert("Password is empty");
        password.focus();
        return false;
    }


    return true;
};

function getData() {
    let data = [];

    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }

    return data
};

export { validateRegister, getData, validateLogin};