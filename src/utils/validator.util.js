
const validationPassword = (password) =>
  /^(?=.*[A-Z]).{6,}$/.test(
    password
  );

const validationEmail = (email) =>
  /@/.test(
    email
  );

module.exports = {
  validationPassword,
  validationEmail,
};








