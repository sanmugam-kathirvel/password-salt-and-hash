const saltHash  = require('./index');

let hashPassword = saltHash.generateSaltHash('test');

console.log(hashPassword);

let isPasswordMatch = saltHash.verifySaltHash(hashPassword.salt, hashPassword.password, 'test');

console.log(isPasswordMatch);
