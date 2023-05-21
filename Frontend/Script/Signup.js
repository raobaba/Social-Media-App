const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
   console.log('object')
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userPic = document.getElementById('user-pic').files[0];

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('userPic', userPic);

  fetch('http://localhost:8000/api/user', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then((data) => {
      console.log('User successfully created:', data);
      // redirect to login page here
      window.location.href = '/login.html';
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
});
