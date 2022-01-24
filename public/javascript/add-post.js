async function newFormHandler(event) {
  event.preventDefault();

  const favorite_book = document.querySelector('input[name="favorite-book"]').value;
  const comment_text = document.querySelector('input[name="comment-body"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      favorite_book,
      comment_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);