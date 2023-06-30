


let saveRegistrationInfo = () => {
    // console.log("Hiiiiiiiii");
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(fn);
    console.log(ln);

    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);

    window.location.reload();             //  For page reload we use window.location.reload();
}


let logout = () => {
    window.localStorage.clear();

    window.location.reload();          //  For page reload we use window.location.reload();
}


//  ()();                   //  IIFE

(()=>{

    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');

    console.log('Page Loaded Successfully');

    var modal =document.getElementById('registrationModal');

    var modatInstance = new bootstrap.Modal(modal);

  //  console.log(window.localStorage.getItem('first_name'));


    if(fn === null) {
      modatInstance.show();
    }

    //  Check if the localStorage is set or not

    if(fn !== null) {
        document.querySelector('.a_welcome').innerHTML = "Welcome " +fn +' ' + ln+"<button class='btn btn-sm bg-danger ms-5' onclick='logout()'>Logout</button>";
    }

})();