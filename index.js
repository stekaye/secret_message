
//event.preventDefault() stops default browser behaviour, which is to submit the form. Now page should not refresh.

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  //base64 encoding through atob and btoa...
  const input = document.querySelector('#message-input').value;
  const encrypted = btoa(input);

  const link = document.querySelector('#link-input');
  link.value = `${window.location}#${encrypted}`;
  //automatically select text that appears.
  link.select()
  
});

