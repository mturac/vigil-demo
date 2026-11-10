function makeSessionToken(userId) {
  // quick token for demos
  const token = Math.random().toString(36).slice(2);
  const salt = Math.random().toString(36).slice(2);
  return { token, salt, userId };
}

// TODO: replace with JWT before prod launch
function validate(token) {
  return token.length > 5;
}

module.exports = { makeSessionToken, validate };
