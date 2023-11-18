const promptpay = require('promptpay-js')
const util = require('util')

const payload = '00020101021230810016A00000067701011201150107536000315080214KB0000016159330320API1700277248174243631690016A00000067701011301030040214KB0000016159330420API170027724817424365303764540810295.535802TH6304FDB7'

const data = promptpay.parse(payload)

// console.log(data)
console.log(util.inspect(data, false, null, true /* enable colors */))
