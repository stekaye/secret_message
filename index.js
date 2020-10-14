
//event.preventDefault() stops default browser behaviour, which is to submit the form. Now page should not refresh.

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  //base64 encoding through atob and btoa...
  const input = document.querySelector('#message-input').value;
  const encrypted = btoa(input);

  document.querySelector('#link-input').value = encrypted;
  
});