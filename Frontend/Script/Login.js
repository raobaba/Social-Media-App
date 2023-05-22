document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if(userData.email===email && 
       userData.username === username && 
       userData.password === password
      ){
        alert("You have successfully Login");
        window.location.href = 'home.html';
      }else{
        alert("Please Enter Right Credential");
      }
      document.getElementById("username").value = '';
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
  });
  const userData = JSON.parse(localStorage.getItem('userCredential'));
  if(userData){
    document.getElementById('username').value = userData.username;
    document.getElementById('email').value = userData.email;
    document.getElementById('password').value = userData.password;
  }