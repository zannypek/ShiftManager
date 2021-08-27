

function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  if (email == null || email == "") {
    document.getElementById("emailError").innerHTML = "Enter Email...!";
  }
  if (password == null || password == "") {
    document.getElementById("pwdError").innerHTML = "Enter Password...*";
  }
  if (!validateCaptcha()) {
    document.getElementById("captaError").innerHTML = "invalid capta...*";
  } 
  
  
  else {
    
    /* start ajax submission process */
    // function start() {
      //   // var today = new Date();
      
      //   var today = new Date();
      //   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      //   document.getElementById("loggedinTime").value = time;
    //   console.log("loggedinTime", time);
    //   // var users = JSON.parse(localStorage.getItem("users"));
    //   var users = JSON.parse(localStorage.getItem("users"));
    //   console.log("usrrssssssssssss", users);
    
    //   var loggedinTime = new Date();
    //   // var loggedinTime = users.id;
    //   // var startedTime = document.getElementById("startedTime").value;
    //   // var users = JSON.parse(localStorage.getItem("users"));
    //   // console.log("usrrssssssssssss", users);
    //   // var time = today. getHours() + ":" + today. getMinutes() + ":" + today. getSeconds();
    //   // document. getElementById("startedTime"). value = time;
    //   // console.log("startedTime",time);
    
    //   // var userId;
    //   // const startedTime;
    //   // const stoppedTime;
    
    
    //   if (loggedinTime) {
      //     let postData = {
    //       loggedinTime: loggedinTime,
    //     };
    
    //     console.log("dataaaaa", postData);
    //     $.ajax({
    //       url: "http://localhost:5325/api/users/" + users.id,
    //       crossDomain: true,
    //       headers: { "Access-Control-Allow-Origin": "*" },
    //       type: "PUT",
    //       data: postData,
    //       success: function (data) {
      //         console.log("data", data);
    //         if (data) {
    //           // window.location = "index.html";
    //           localStorage.setItem("users", JSON.stringify(data));
    //           // localStorage.getItem("users");
    //           console.log(localStorage.getItem("users"));
    //           // localStorage.getItem("users")
    //           // localStorage.getItem("shiftDeatils",(id));
    //         }
    //         console.log(localStorage.key(1));
    
    //         //  else{
      //         //    alert('login error')
      //         //    document.getElementById("emailError").innerHTML = "Enter valid Email...!";
      //         //    document.getElementById("pwdError").innerHTML = "Enter  valid Password...*";
      //         //  }
      //       },
      //       error: function (jqXHR, textStatus, errorThrown) {
        //         console.log("Error occurred!");
        //       },
        //     });
        //   }
        // }
        let postData = {
          email: email,
          password: password,
        };
        

        $.ajax({
          url: "http://localhost:5325/api/checkUser",
          crossDomain: true,
          headers: { "Access-Control-Allow-Origin": "*" },
      type: "POST",
      data: postData,
      success: function (data) {
        console.log("data", data.data);
        if (data.data) {
          localStorage.setItem("users", JSON.stringify(data.data[0]));
          sessionStorage.setItem("users",JSON.stringify(data.data[0]));
          window.location = "home.html";
          // alert('login successfully')
          console.log("data", data);
        } else {
          document.getElementById("emailError").innerHTML =
          "Enter valid Email...!";
          document.getElementById("pwdError").innerHTML =
          "Enter  valid Password...*";
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error occurred!");
      },
    });
  }
  

  
  
  
}
function myFunction() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
var code;
function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById("captcha").innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*`/";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
    captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
var code;
function validateCaptcha() {
  event.preventDefault();
  if (document.getElementById("cpatchaTextBox").value == code) {
    return true;
  } else {
    createCaptcha();
    return false;
  }
}



// document.getElementById("jd1").innerHTML = text;

// END OF THE CLOCK....!

// const table1 = [
//   { id: "1", name: "rash", email: "tes@", addr: "hyd" },
//   { id: "2", name: "zanny", email: "test1@", addr: "hyd" },
//   { id: "3", name: "jello", email: "test2@", addr: "hyd" },
//   { id: "4", name: "akkini", email: "test3@", addr: "hyd" },
//   { id: "5", name: "sarfarosh", email: "test4@", addr: "hyd" },
//   { id: "6", name: "polly", email: "test5@", addr: "hyd" },
//   { id: "7", name: "nikil", email: "test6@", addr: "hyd" },
//   { id: "8", name: "celo", email: "test7@", addr: "hyd" },
//   { id: "9", name: "talpu", email: "test9@", addr: "hyd" },
//   { id: "10", name: "rotin", email: "test10@", addr: "hyd" },
//   { id: "11", name: "fiex", email: "test7@", addr: "hyd" },
//   { id: "12", name: "zapt", email: "test8@", addr: "hyd" },
//   { id: "13", name: "talm", email: "test9@", addr: "hyd" },
//   { id: "14", name: "root", email: "test10@", addr: "hyd" },
//   { id: "15", name: "zamp", email: "test7@", addr: "hyd" },
//   { id: "16", name: "zap", email: "test8@", addr: "hyd" },
//   { id: "17", name: "almu", email: "test9@", addr: "hyd" },
//   { id: "18", name: "alumini", email: "test10@", addr: "hyd" },
//   { id: "19", name: "friend", email: "test7@", addr: "hyd" },
//   { id: "20", name: "bossy", email: "test8@", addr: "hyd" },
//   { id: "21", name: "hulky", email: "test9@", addr: "hyd" },
//   { id: "22", name: "localhost", email: "test10@", addr: "hyd" },
//   // { id: "3", name: "test", email: "test2", addr: "tt12" },
// ];


// $("#show_hide_password a").on('click', function(event) {
//     event.preventDefault();
//     if($('#show_hide_password input').attr("type") == "text"){
//         $('#show_hide_password input').attr('type', 'password');
//         $('#show_hide_password i').addClass( "fa-eye-slash" );
//         $('#show_hide_password i').removeClass( "fa-eye" );
//     }else if($('#show_hide_password input').attr("type") == "password"){
//         $('#show_hide_password input').attr('type', 'text');
//         $('#show_hide_password i').removeClass( "fa-eye-slash" );
//         $('#show_hide_password i').addClass( "fa-eye" );
//     }
// });
// jQuery( document ).ready(function( $ ) {

//   //Use this inside your document ready jQuery 
//   $(window).on('popstate', function() {
//      location.reload(true);
//   });

// });