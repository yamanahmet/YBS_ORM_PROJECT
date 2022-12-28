const { sendMailOperation } = require('./sendmail')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ybs',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { customername, email } = request.body

  pool.query(
    'INSERT INTO users (customername, email) VALUES ($1, $2)',
    [customername, email], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Success`)
      response.redirect('/success_musteri_kayit_alindi.html')
  })
}

const addUserNote = (request, response) => {
  const { customerid, notes } = request.body

  pool.query(
    'UPDATE users SET notes = $2 WHERE id = $1',
    [customerid, notes], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Success`)
      response.redirect('/success_musteri_kayit_alindi.html')
  })
}

const getTickets = (request, response) => {
  pool.query('SELECT * FROM tickets ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createTicket = (request, response) => {
  const { customerid, msg } = request.body

  pool.query(
    'INSERT INTO tickets (customerid, msg) VALUES ($1, $2)',
    [customerid, msg], (error, results) => {
      if (error) {
        throw error
      }
      //response.status(201).send(`Success`)
      response.redirect('/success_sikayet_gird_olusturuldu.html')
  })
}


const sendMailText = (request, response) => {
  const { subject, msg } = request.body

  pool.query(
    'INSERT INTO mails (subject, msg) VALUES ($1, $2)',
    [subject, msg], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Success`)
      // response.redirect('/success_sikayet_gird_olusturuldu.html')
  })
}



// const mailtextresponse = (request, response) =>{
//   pool.query('SELECT subject, msg FROM mails', (error, mailtextresponse) => {
//   if (error) {
//     throw error
//   }
// }
// }

// const mailtextresponse  =  (request, response) => {
//   pool.query('SELECT subject, msg FROM mails', (error, mailtextresponse) => {
//     if (error) {
//       throw error
//     }

//     // response.redirect('/success_toplu_mail_gonderildi.html')
//     console.log(mailtextresponse)
//   })
// }







const sendEmailAllUsers = (request, response) => {
  pool.query('SELECT email FROM users', (error, results) => {
    if (error) {
      throw error
    }

    const emails = [];
    for (const row of results.rows) {
      emails.push(row.email);
    }
    sendMailOperation(emails.toString());  //, mailsubject.toString(), mailmsg.toString()
    // response.status(200).json(results.rows);
    response.redirect('/success_toplu_mail_gonderildi.html')
  })
}

module.exports = {
  getUsers,
  createUser,
  addUserNote,
  getTickets,
  createTicket,
  sendEmailAllUsers,
  sendMailText,
}
