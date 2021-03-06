async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirmPassword = document.querySelector('#confirm-password').value.trim();
  
  if (username && email && password)  {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      checkPassword();
    } else {
      alert(response.statusText);
    }
  }
  function checkPassword() {
    if (password === confirmPassword) {
      document.location.replace('/');
    } else {
      document.location.replace('/signup');
      alert('Passwords do not match!');
    }
  }
}


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);