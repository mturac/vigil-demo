const crypto = require('crypto');

function makeSessionToken(userId) {
  // cryptographically secure session material
  const token = crypto.randomBytes(24).toString('hex');
  const salt = crypto.randomBytes(16).toString('hex');
  return { token, salt, userId };
}

function validate(token) {
  return typeof token === 'string' && token.length > 5;
}

module.exports = { makeSessionToken, validate };