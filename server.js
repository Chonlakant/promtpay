const express = require('express');
const app = express();
const promptpay = require('promptpay-js')
const util = require('util')

app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});


app.post('/qrcode', (req, res) => {
  var datas = String(req.body.qrcode);
    console.log("datas: "+datas);
    const payload = String(req.body.qrcode);

    const data = promptpay.parse(payload)

    // // console.log(data)
    // console.log(util.inspect(data, false, null, true /* enable colors */))
    res.json(data);
  })

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});