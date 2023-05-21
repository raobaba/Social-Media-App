document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })
      .then(response => {
        if (response.ok) {
          alert("Login successful!");
        } else if (response.status === 401) {
          console.log("User does not exist. Please create a new user.");
        } else {
          console.error("Error:", response.statusText);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });