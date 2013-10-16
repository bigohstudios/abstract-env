exports.env = function() {
  return new envAbstraction().env() 
}

exports.file = function(path) {
  return new envAbstraction().file(path) 
}

function envAbstraction() {
  this.environment = {}
}


envAbstraction.prototype = {
  env: function() {
    for(var prop in process.env) {
      if (process.env.hasOwnProperty(prop)) {
        this.environment[prop] = process.env[prop]
      }
    }

    return this
  }

, file: function(path) {
    path = path || process.cwd() + "/.env.json"

    var config = require(path)

    for(var prop in config) {
      if (config.hasOwnProperty(prop)) {
        this.environment[prop] = config[prop]
      }
    }

    return this
  }
, get: function() {
    return this.environment
  }
}

