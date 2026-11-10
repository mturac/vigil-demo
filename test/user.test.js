const assert = require('assert');
const { deactivateUser } = require('../src/user');

assert.strictEqual(typeof deactivateUser, 'function');
console.log('user tests passed');
