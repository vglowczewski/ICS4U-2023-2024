// function ValidateEmail(mail) {
//     return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
// }
// console.log(ValidateEmail('test@test.com'))

const email_validator = require('email-validator')

console.log(email_validator.validate('test@test.com'))