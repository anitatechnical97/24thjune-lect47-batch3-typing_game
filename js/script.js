


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


let playSound = (e) => {
  // console.log("hii");
  let a = document.querySelector('audio.a_audio');                  //  In JS, to access the DOM Object we use document.getElementById() and document.querySelector()
   a.play();
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


    //   keypress sound play

      document.addEventListener('keypress',(e) => {
          // console.log("welcome");
          console.log(e.keyCode);

          if(e.keyCode == 97) {

            let a = document.querySelector('.a_a');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
          }

          if(e.keyCode == 113) {

            let a = document.querySelector('.a_q');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
          }

          if(e.keyCode == 122) {

            let a = document.querySelector('.a_z');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
          }

          if(e.keyCode == 119) {

            let a = document.querySelector('.a_w');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 115) {

            let a = document.querySelector('.a_s');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 120) {

            let a = document.querySelector('.a_x');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 101) {

            let a = document.querySelector('.a_e');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 100) {

            let a = document.querySelector('.a_d');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 99) {

            let a = document.querySelector('.a_c');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 114) {

            let a = document.querySelector('.a_r');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 102) {

            let a = document.querySelector('.a_f');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 118) {

            let a = document.querySelector('.a_v');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 116) {

            let a = document.querySelector('.a_t');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 103) {

            let a = document.querySelector('.a_g');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 98) {

            let a = document.querySelector('.a_b');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 121) {

            let a = document.querySelector('.a_y');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 104) {

            let a = document.querySelector('.a_h');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 110) {

            let a = document.querySelector('.a_n');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 117) {

            let a = document.querySelector('.a_u');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 106) {

            let a = document.querySelector('.a_j');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 109) {

            let a = document.querySelector('.a_m');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 105) {

            let a = document.querySelector('.a_i');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_middle').style.display = 'block';
          }

          if(e.keyCode == 107) {

            let a = document.querySelector('.a_k');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_middle').style.display = 'block';
          }

          if(e.keyCode == 111) {

            let a = document.querySelector('.a_o');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_ring').style.display = 'block';
          }

          if(e.keyCode == 108) {

            let a = document.querySelector('.a_l');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_ring').style.display = 'block';
          }

          if(e.keyCode == 112) {

            let a = document.querySelector('.a_p');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_pinky').style.display = 'block';
          }

          

          playSound();

      })

      document.addEventListener('keyup',(e) => {
        console.log(e);
        var elements = document.getElementsByClassName('a_active');

        for (var i = 0; i < elements.length; i++)
        {
          elements[i].classList.remove('a_active');
        }
        document.querySelector('.a_left_pinky').style.display = 'none';

      });

})();