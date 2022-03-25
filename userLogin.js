$("#login_form").submit((e)=>{
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

   if(email==="mahi@gmail.com" && password === "mahi@07"){
       localStorage.setItem("loggedin",true);
       location.replace("index.html");
   }else{
       alert("password is wrong");
   }
})