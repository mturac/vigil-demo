const { getUser, updateUser } = require('./db');

async function deactivateUser(id) {
  const user = await getUser(id);
  if (!user) return false;
  return updateUser(id, { active: false });
}

module.exports = { deactivateUser };
