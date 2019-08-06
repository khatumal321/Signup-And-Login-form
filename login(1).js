var email = document.getElementById("login");
var password = document.getElementById("password");
var data = document.getElementById("data");


function Sign() {
    var email2 = email.value.length;
    if(email.value.slice(email2-4) === '.com'){


    var users = localStorage.getItem('users');
    console.log('users');

    var usercheck = false;

    if(users === null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
        console.log("users");
    }
    var user = {
        email : email.value,
        password : password.value,
    };
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email.value){
            usercheck = true;
        }
    }

    if(usercheck === true) {
        data.innerHTML = "user already exists";
    }
    else {
        users.push(user);
        users = JSON.stringify(users);
        localStorage.setItem('users' , users)
        email.value = '';
        password.value = '';

        data.innerHTML = "Successfully Signup!";
        window.location.assign("first.html");
         window.close();
    }
}
else{
    alert('Invalid email');
}

}




function login5() {
    
    var email2 = email.value.length;
    if(email.value.slice(email2-4) === '.com'){


    var users = localStorage.getItem('users');
    console.log('users');
    if(users === null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
   var userSec ={
        email : email.value,
        password : password.value,
    }

    var usercheck = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email.value && users[i].password === password.value){
            usercheck = true;
            // var abc = document.getElementById("check");
            // abc.setAttribute("href" , "siginup.html")
        }
    }

    if(usercheck === false) {
        data.innerHTML = "Login faild";
    }
    else {
        
        data.innerHTML = "login Success";
        email.value = '';
        password.value = '';
        window.open("siginup.html");
        window.close();
      var user1 = JSON.stringify(userSec);
      localStorage.setItem('userSec' , user1)
        email.value = '';
        password.value = '';

    }
}
else{
    alert('Invalid email');
}

}