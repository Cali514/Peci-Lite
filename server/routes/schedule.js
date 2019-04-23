const express = require('express');
const soapRequest = require('easy-soap-request');
const fs = require('fs');
var bodyParser = require('body-parser');

const scheduleRouter = express.Router();



// example data
const url = 'http://cferlistmgr-cert.level3.com/EventConfQuery.asmx';
const headers = {
  'Host': 'cferlistmgr-cert.level3.com',
  'method': 'POST',
  'Content-Type': 'text/xml;charset=UTF-8',
  'Content-Length': 500,
  'soapAction': "http://EventConfQuery.com/GetActiveMRSConferences",
};
//const xml = <?xml version="1.0" encoding="utf-8"?>
const xml = fs.readFileSync('./server/routes/mrs.xml', 'utf-8');

scheduleRouter.get('/', (req, res) => {
    res.send("schedule works");
  });

// usage of module
(async () => {
  const { response } = await soapRequest(url, headers, xml, 1000); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
})();

module.exports = scheduleRouter;