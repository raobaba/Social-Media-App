const submitData = async (event) => {
  event.preventDefault(); // Prevent form submission
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmpassword = document.getElementById('confirmpassword').value;
  const friends = [];
  const followers = [];
  const followings = [];
  const posts = [];
  //confirm password here
  if(password!==confirmpassword){
     alert("password is not matching!")
     return
  }
  // Create data object
  const data = {
    name,
    email,
    username,
    password,
    confirmpassword,
    friends,
    followers,
    followings,
    posts
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
      localStorage.setItem('userCredential',JSON.stringify(data));
      alert("Signup Successful");
      window.location.href = 'index.html';
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
