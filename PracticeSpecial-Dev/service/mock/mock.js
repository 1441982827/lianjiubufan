const user = require('./community/user.json')
const commlist = require('./community/commlist.json')
const adduser = require('./community/adduser.json')

module.exports = function() {
  return {
    user,
    commlist,
    adduser
  }
}