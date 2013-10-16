require("./test_helper")

describe(__filename, function() {
  it("should get config from environment", function() {
    process.env.BANK_ACCOUNT_PASSWORD = "12345"

    var env = require("../index").env().get()

    assert.equal(env.BANK_ACCOUNT_PASSWORD, process.env.BANK_ACCOUNT_PASSWORD)
  })

  it("should get config from environment", function() {
    var env = require("../index").file("./test/.env.json").get()

    assert.equal(env.BANK_ACCOUNT_PASSWORD, "54321")
  })

  it("should override the env when file comes later", function() {
    var env = require("../index").env().file("./test/.env.json").get()

    assert.equal(env.BANK_ACCOUNT_PASSWORD, "54321")
  })

  it("should override the file when env comes later", function() {
    var env = require("../index").file("./test/.env.json").env().get()

    assert.equal(env.BANK_ACCOUNT_PASSWORD, "12345")
  })
})
