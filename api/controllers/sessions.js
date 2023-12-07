const session = require('express-session')

module.exports = () => {
    return session({secret: 'topsecret', resave: false, saveUninitialized: false})
}