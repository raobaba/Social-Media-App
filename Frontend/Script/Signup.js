// Function to handle form submission
const submitData = async (event) => {
  event.preventDefault(); // Prevent form submission
   
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmpassword').value;

  // Confirm password
  if (password !== confirmPassword) {
    alert("Password is not matching!");
    return;
  }

  // Create data object
  const data = {
    name,
    email,
    username,
    password,
    confirmpassword: confirmPassword,
    friends: [],
    followers: [],
    followings: [],
    posts: []
  };

  try {
    const response = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      localStorage.setItem('userCredential', JSON.stringify(data));
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 3000);
    } else {
      console.log('Error posting data:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

// Get the form element
const form = document.getElementById('signup-form');

// Attach event listener to form submission
form.addEventListener('submit', submitData);

function toggleDarkMode() {
  var body = document.querySelector('body');
  var navbar = document.querySelector('.navbar');
  var darkModeToggle = document.querySelector('#dark-mode-toggle');

  body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode');
}