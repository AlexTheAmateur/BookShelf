async function newFormHandler(event) {
  event.preventDefault();

  const favorite_book = document.querySelector('input[name="favorite-book"]').value;
  const comment_text = document.querySelector('input[name="comment-body"]').value;

  const response = await fetch(`/dashboard`, {
    method: 'POST',
    body: JSON.stringify({
      favorite_book,
      comment_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log('this is working')
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-favorite-form').addEventListener('submit', newFormHandler);