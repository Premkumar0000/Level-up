const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// 
function addData(){
  var email=document.getElementById('Email').value;
  var password=document.getElementById('Password').value;

  localStorage.setItem('useremail',email);
  localStorage.setItem('Password',password);
  
  alert("successfully signup..please login ");
  
  // localStorage.userEmail= email;
  // localStorage.userPassword= password;
}

// 
function checkData(){
  var enterEmail= document.getElementById('email').value;
  var enterPassword= document.getElementById('password').value;

  var getEmail=localStorage.getItem('useremail');
  var getPassword=localStorage.getItem('Password');

  if(enterEmail == getEmail){
    if(enterPassword == getPassword){
      window.location.assign('nav.html');
      alert("login sucessfull");
      form.reset();
      
    }
    else{
      alert("wrong");
    }
  }
  else{
    alert("invalid");
  }


  
}