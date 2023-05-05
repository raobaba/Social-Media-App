// login.js

function validateForm() {
    // Check if user is logged in
    // If yes, redirect to navbar page
    // This code is just an example and should be replaced with your actual login code
    if (localStorage.getItem("loggedin") === "true") {
      window.location.href = "../index.html";
      return false;
    }else {
        alert("You are not logged in. Please sign up or log in to continue.");
        return false;
      }
    return true;
  }