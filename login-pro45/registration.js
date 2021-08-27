function validateform() {
  console.log("validateform");
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var country = document.getElementById("country").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  var gender = document.getElementById("male").value;
  var gender = document.getElementById("female").value;
  var gen =$("input[type='radio'][name='gender']:checked").val();
  console.log("gennnnnnnnnnnnnnnnnnnnnnn",gender);
  // var gen = document.querySelector('input[name = gender]:checked');
  
  if (firstname == null || firstname == "") {
    document.getElementById("fnameError").innerHTML = "Enter first name...!";
  }
  if (lastname == null || lastname == "") {
    document.getElementById("lnameError").innerHTML = "Enter Last name...!";
  }
  if (country == null || country == "") {
    document.getElementById("countryError").innerHTML = "Enter Country...!";
  }
  if (email == null || email == "") {
    document.getElementById("emailError").innerHTML = "Enter Email...!";
    [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/]
  }
  if (password == null || password == "") {
    document.getElementById("pwdError").innerHTML = "Enter Password...!";
  }
  if(gender== null){
    // console.log("loooooooooo",gen.value);
    document.getElementById("error").innerHTML =
      "You have not selected any gender";
  }
  
  // if (document.getElementById("male").checked) {
  //   document.getElementById("disp").innerHTML;
  // } else if (document.getElementById("female").checked) {
  //   document.getElementById("disp").innerHTML;
  // } else {
  // }
  if (firstname && lastname && country && email && password && gen) {
    let postData = {
      firstname: firstname,
      lastname: lastname,
      country: country,
      email: email,
      password: password,
      gender: gen,
      Type:2,
    };
    console.log(postData);
    $.ajax({
      url: "http://localhost:5325/api/users",
      crossDomain: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      type: "POST",
      data: postData,
      success: function (data) {
        console.log("data", data);
        if (data) {
          
        window.location ="home.html";
        sessionStorage.setItem("users",JSON.stringify(data));
        localStorage.setItem("users",JSON.stringify(data));
        console.log( localStorage.getItem( "users" ) );
        // localStorage.getItem("users")
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
