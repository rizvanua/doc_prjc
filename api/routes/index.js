const express = require('express');
const login = require('./login.js');
const auth = require('./auth.js');
const refresh = require('./refresh.js');
module.exports = function(app) {   
    app.use(express.json());
    app.use(login);
    app.use(auth);
    app.use(refresh);
}