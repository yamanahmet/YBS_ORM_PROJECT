const userForm = document.querySelector('#create-user-form')
const ticketForm = document.querySelector('#create-ticket-form')
const userNoteForm = document.querySelector('#add-user-note-form')

userForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(userForm)
  const customername = formData.get('customername')
  const email = formData.get('email')

  fetch('/createuser', {
    method: 'POST',
    body: JSON.stringify({ customername, email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
})

ticketForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(ticketForm)
  const customerid = formData.get('customerid')
  const msg = formData.get('msg')

  fetch('/createticket', {
    method: 'POST',
    body: JSON.stringify({ customerid, msg }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
})

userNoteForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(userNoteForm)
  const customerid = formData.get('customerid')
  const notes = formData.get('notes')

  fetch('/addusernote', {
    method: 'POST',
    body: JSON.stringify({ customerid, notes }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
})