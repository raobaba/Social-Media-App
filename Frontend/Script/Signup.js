const submitData = async (event) => {
  event.preventDefault(); // Prevent form submission
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const propic = document.getElementById('propic').value;
  const friends = [];
  const flowers = [];
  const flowings = [];
  const posts = []
  // Create data object
  const data = {
    name,
    email,
    username,
    password,
    propic,
    friends,
    flowers,
    flowings,
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
      alert('Data has been successfully Registered.');
    } else {
      alert("Error while Registeration")
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
