// var table = [];
// var elementsPerPage;
// var currentPage = 1;
// var totalPages;
// // var tableElements;
// $.ajax({
//   url: "http://localhost:5325/api/shiftDetails",
//   crossDomain: true,
//   headers: { "Access-Control-Allow-Origin": "*" },
//   type: "GET",
//   success: function (data) {
//     console.log("data", data);
//     table = data;
//     elementsPerPage = table.length;
//     // totalPages = Math.ceil(table.length / elementsPerPage);
//     // tableElements = table.length;
//     console.log(elementsPerPage);
//     // checkDisability();
//     display(currentPage);
//   },
// });

// function display(currentPage) {
//   var Table = document.getElementById("select");
//   // Table.innerHTML = "";
//   var firstIndex = currentPage == 1 ? 0 : (currentPage - 1) * elementsPerPage;
//   var lastIndex =
//   currentPage == totalPages ? tableElements : currentPage * elementsPerPage;
//   // let length = lastIndex + 1;
//   let length = currentPage == 1 ? lastIndex - 1 : lastIndex - 1;
//   let tableData = "";
//   for (let index = firstIndex; index <= length; index++) {
//     if (table[index]) {
//       tableData += "<tr><th>" + table[index].id + "</th>";
//       tableData += "<td>" + table[index].projectWork + "</td>";
//       tableData += "<td>" + table[index].startedTime + "</td>";
//       tableData += "<td>" + table[index].stoppedTime + "</td></tr>";
//       // tableData += "<td>" + table[index].published + "</td>";
//       // tableData += "<td>" + table[index].Gender + "</td></tr>";
//     }
//   }
// Table.innerHTML = tableData;
$(document).ready(function () {
  // var shiftDetails = sessionStorage.setItem("shiftDetails.id");
  // let postData = {
  //   id : id,
  //   projectWork: projectWork,
  //   stratedTime: startedTime,
  //   stoppedTime: stoppedTime,
  // };
  // var Type = Type;
  // console.log("dataaaaa", postData);
  var user = JSON.parse(localStorage.getItem("users"));
  console.log("usrrssssssssssss", user);
  // const Type;
  if(user.Type == 1)
  $("#myTable").DataTable({
    ajax: "http://localhost:5325/api/shiftDetails/",
    deferRender: true,
    columns: [
      { data: "userId" },
      { data: "projectWork" },
      { data: "startedTime" },
      { data: "stoppedTime" },

      // currentUser.retrieve(),

    ],
    // data: postData,
    
  });
  if(user.Type == 2){
    $("#myTable").DataTable({
      ajax: "http://localhost:5325/api/userShiftDetails/" + user.id,
      deferRender: true,
      columns: [
        { data: "userId" },
        { data: "projectWork" },
        { data: "startedTime" },
        { data: "stoppedTime" },
  
        // currentUser.retrieve(),
  
      ],
      // data: postData,
      
    });

  }
  // localStorage.setItem("shiftDetails", JSON.stringify(shiftDetails));
  // console.log(localStorage.getItem("shiftDetails"));

});
// function checkDisability() {
//   if (currentPage === totalPages) {
//     document.getElementById("next").disabled = true;
//   } else {
//     document.getElementById("next").disabled = false;
//   }

//   if (currentPage === 1) {
//     document.getElementById("prev").disabled = true;
//   } else {
//     document.getElementById("prev").disabled = false;
//   }
// }
// $("#next").click(function () {
//   currentPage = currentPage + 1;
//   display(currentPage);
//   checkDisability();
// });
// // function prev() {

// $("#prev").click(function () {
//   currentPage = currentPage - 1;
//   display(currentPage);
//   checkDisability();
// });
// function next() {

// function myFunction() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     // var table = document.getElementById("select");
//     // var table = document.getElementsById("select");
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
// $(document).ready(function(){
//   $("#myInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#select").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// stop watch timer on home page>>>>>!!!!!

var	clsStopwatch = function() {
  // Private vars
  var	startAt	= 0;	// Time of last start / resume. (0 if not running)
  var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

  var	now	= function() {
      return (new Date()).getTime(); 
    }; 

  // Public methods
  // Start or resume
  this.start = function() {
      startAt	= startAt ? startAt : now();
    };

  // Stop or pause
  this.stop = function() {
      // If running, update elapsed time otherwise keep it
      lapTime	= startAt ? lapTime + now() - startAt : lapTime;
      startAt	= 0; // Paused
    };

  // Reset
  this.reset = function() {
      lapTime = startAt = 0;
    };

  // Duration
  this.time = function() {
      return lapTime + (startAt ? now() - startAt : 0); 
    };
};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
var s = "0000" + num;
return s.substr(s.length - size);
}

function formatTime(time) {
var h = m = s = 0;
var newTime = '';

h = Math.floor( time / (60 * 60 * 1000) );
time = time % (60 * 60 * 1000);
m = Math.floor( time / (60 * 1000) );
time = time % (60 * 1000);
s = Math.floor( time / 1000 );

newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
return newTime;
}

window.onload = function() {
  show();
function show() {
$time = document.getElementById('time');
update();
}

}

function update() {
$time.innerHTML = formatTime(x.time());
}

// function start() {
// clocktimer = setInterval("update()", 1);
// x.start();
// }

// function stop() {
// x.stop();
// clearInterval(clocktimer);
// }

// function reset() {
// stop();
// x.reset();
// update();
// }
// var pressed = true;
// document.body.onkeyup = function(e) {
//   if(e.keyCode == 32){
//     if(pressed) {
//       start();
//       pressed = false;
//     } else { 
//       stop();
//       pressed = true; 
//     }
//   }
//   if(e.keyCode == 82) {
//     reset()
//    }
// }


// $.ajax({
//   url: "http://localhost:5325/api/shiftDetails",
//   crossDomain: true,
//   headers: { "Access-Control-Allow-Origin": "*" },
//   type: "POST",
//   success: function (data) {
//     console.log("data", data.data);

//   },

// var pressed = false;
// document.body.onkeyup = function (e) {
//   if (e.keyCode == 32) {
//     if (pressed) {
//       start();
//       pressed = true;
//     } else {
//       stop();
//       pressed = true;
//     }
//   }

//   //   // if (e.keyCode == 82) {
//   //   //   reset();
//   //   // }
// };
// $('#register_form').submit(function(e) {

//   var postData = $(this).serializeArray();
//   var formURL = $(this).attr("action");

//   /* start ajax submission process */
//   $.ajax({
//       url: "localhost:5325/api/users",
//       type: "POST",
//       data: postData,
//       success: function(data, textStatus, jqXHR) {
//           alert('Success!');
//       },
//       error: function(jqXHR, textStatus, errorThrown) {
//           alert('Error occurred!');
//       }

//   });

// e.preventDefault(); //STOP default action

/* ends ajax submission process */

// function validateform() {
//   console.log("validate");
//   var firstname = document.getElementById("fname").value;
//   var lastname = document.getElementById("lname").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pwd").value;
//   var gender = document.getElementById("genderm").value;
//   if (firstname == null || firstname == "") {
//     document.getElementById("fnameError").innerHTML = "Enter first name...!";
//   }
//   if (lastname == null || lastname == "") {
//     document.getElementById("lnameError").innerHTML = "Enter Last name...!";
//   }
//   if (email == null || email == "") {
//     document.getElementById("emailError").innerHTML = "Enter Email...!";
//   }
//   if (password == null || password == "") {
//     document.getElementById("pwdError").innerHTML = "Enter Password...!";
//   }
//   if (gender == null || gender == "") {
//     document.getElementById("genError").innerHTML = "Enter gender ...!";
//   }
//   if (firstname&& lastname&& email&& password){
//     let postData = {
//       firstname : firstname,
//       lastname : lastname,
//       email : email,
//       password: password,
//       gender : gender
//      }

//    $.ajax({
//      url: "http://localhost:5325/api/users",
//      crossDomain: true,
//      headers: {  'Access-Control-Allow-Origin': "*" },
//      type: 'POST',
//      data: postData,
//      success:function(data){
//        console.log("data",data);
//        if(data.data){
//        window.location ="home.html"
//        // alert('login successfully')
//        }
//        else{
//          alert('login error')
//          document.getElementById("emailError").innerHTML = "Enter valid Email...!";
//          document.getElementById("pwdError").innerHTML = "Enter  valid Password...*";
//        }

//        },
//      error: function(jqXHR, textStatus, errorThrown) {
//        console.log('Error occurred!');
//      }
//     });
//   }

// }

// function checkform(theform){
//   var why = "";

//   if(theform.CaptchaInput.value == ""){
//   why += "- Please Enter CAPTCHA Code.\n";
//   }
//   if(theform.CaptchaInput.value != ""){
//   if(ValidCaptcha(theform.CaptchaInput.value) == false){
//   why += "- The CAPTCHA Code Does Not Match.\n";
//   }
//   }
//   if(why != ""){
//   alert(why);
//   return false;
//   }
//   }

//   var a = Math.ceil(Math.random() * 9)+ '';
//   var b = Math.ceil(Math.random() * 9)+ '';
//   var c = Math.ceil(Math.random() * 9)+ '';
//   var d = Math.ceil(Math.random() * 9)+ '';
//   var e = Math.ceil(Math.random() * 9)+ '';

//   var code = a + b + c + d + e;
//   document.getElementById("txtCaptcha").value = code;
//   document.getElementById("CaptchaDiv").innerHTML = code;

//   // Validate input against the generated number
//   function ValidCaptcha(){
//   var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
//   var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
//   if (str1 == str2){
//   return true;
//   }else{
//   return false;
//   }
//   }

//   // Remove the spaces from the entered and generated code
//   function removeSpaces(string){
//   return string.split(' ').join('');
//   }

//  localStorage.getItem("data");

//       console.log("data",postData);
//       $.ajax({
//         url: "localhost:5325/api/users",
//         type: "GET",
//   data: postData,
//   success: function(data, textStatus, jqXHR) {
//     // alert('Success!');
//   },
//   error: function(jqXHR, textStatus, errorThrown) {
//     // alert('Error occurred!');
//     console.log("error",errorThrown,textStatus,jqXHR);
//   }

// });
// e.preventDefault(); //STOP default action// $.get( "home.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });
// if(success != data){
//  console.error();
//  }
//  else{
//    window.location="home.html"
//  }
// }
// else{
//   console.log('error in login');
//  }

// if (email == "test@gmail.com" && password == "123456") {
//   window.location = "home.html";
// }
// else {
//   document.getElementById("emailError").innerHTML = "Enter Valid Details";
//   document.getElementById("pwdError").innerHTML = "Enter Valid Details";
// }

function stop() {
  x.stop();
  clearInterval(clocktimer);
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("stoppedTime").value = time;
  console.log("stoppedTime", time);
  var shiftDetails = JSON.parse(localStorage.getItem("shiftDetails"));
  console.log("usrrssssssssssss", shiftDetails);
  var stoppedTime = new Date();
  // var d = new Date().toString();
  //=> "2020-04-12T16:00:00.000Z"
  if (stoppedTime) {
    let postData = {
      stoppedTime: stoppedTime,
    };
    //    $(function(){
    //     setInterval(function(){
    //       var moment;
    //       var utcTime = $('#utc-time');
    //       var localTime = $('#local-time');
    //       // Putting current utc time in a div having id utc-time
    //       utcTime.text(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    //       // Getting user's local time converted from above utc time
    //       var formattedTime  = moment.utc(utcTime.text()).toDate();
    //       formattedTime = moment(formattedTime).format('YYYY-MM-DD HH:mm:ss');
    //       localTime.text(formattedTime);
    //     },1000);
    // });
    console.log("dataaaaa", postData);
    $.ajax({
      url: "http://localhost:5325/api/shiftDetails/" + shiftDetails.id,
      crossDomain: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      type: "PUT",
      data: postData,
      success: function(data) {
        console.log("data", data);
        if(data) {
          // window.location = "index.html";
          localStorage.setItem("shiftDetails", JSON.stringify(postData));
          console.log(localStorage.getItem("shiftDetails"));
          // localStorage.getItem("users")
          // localStorage.getItem("shiftDeatils",(id));
        }
        console.log(localStorage.key(1));

        //  else{
        //    alert('login error')
        //    document.getElementById("emailError").innerHTML = "Enter valid Email...!";
        //    document.getElementById("pwdError").innerHTML = "Enter  valid Password...*";
        //  }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error occurred!");
      },
    });
  }
}

console.log("time", new Date().toISOString(), "rrrrrrrrrrrrrrr", new Date());

function start() {
  // var today = new Date();

  var users = JSON.parse(localStorage.getItem("users"));
  // var users = JSON.parse(localStorage.getItem("users"));
  // console.log("usrrssssssssssss", users);
  // var time = today. getHours() + ":" + today. getMinutes() + ":" + today. getSeconds();
  // document. getElementById("startedTime"). value = time;
  // console.log("startedTime",time);

  // var userId;
  // const startedTime;
  // const stoppedTime;
  var startedTime = new Date();
  var userId = users.id;
  var projectWork = document.getElementById("time1").value;
  // var startedTime = document.getElementById("startedTime").value;
  if (projectWork == null || projectWork == "") {
    document.getElementById("timeError").innerHTML = "Enter project name..!";
    // var keycode;
    // $('.nospace').keypress(function (event) {
    //    keycode = (event.charCode) ? event.charCode : ((event.which) ? event.which : event.keyCode);
    //    if (keycode == 32) {
    //     return false
    //   };
    // });
  }
  // else {

  // }
  // if (userId == null || userId == "") {
  //   document.getElementById("usError").innerHTML = "Enter user id..!";
  // }

  if (userId && projectWork && startedTime) {
    x.start();
    clocktimer = setInterval( "update()", 1);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("startedTime").value = time;
    console.log("usrrssssssssssss", users);
    console.log("startedTime", time);
    let postData = {
      userId: userId,
      projectWork: projectWork,
      startedTime: startedTime,
    };

    console.log("dataaaaa", postData);
    $.ajax({
      url: "http://localhost:5325/api/shiftDetails",
      crossDomain: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      type: "POST",
      data: postData,
      success: function(data) {
        console.log("data", data);
        if(data) {
          // window.location = "index.html";
          localStorage.setItem("shiftDetails", JSON.stringify(data));
          console.log(localStorage.getItem("shiftDetails"));
          // localStorage.getItem("users")
          // localStorage.getItem("shiftDeatils",(id));
        }
        console.log(localStorage.key(1));

        //  else{
        //    alert('login error')
        //    document.getElementById("emailError").innerHTML = "Enter valid Email...!";
        //    document.getElementById("pwdError").innerHTML = "Enter  valid Password...*";
        //  }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error occurred!");
      },
    });
  }
}












function logout() {
  sessionStorage.clear();
  console.log("clear records");
  //   history.pushState(null, null, null);
}

// window.addEventListener('popstate', function () {
//     history.pushState(null, null, null);
// var userId;
// if(userId == null){
//   res.redirect("/index");
//   return;
// }
// });
