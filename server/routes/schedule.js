const express = require('express');
const soapRequest = require('easy-soap-request');
const fs = require('fs');
var bodyParser = require('body-parser');
var rp = require('request-promise');
var request = require('request');


const scheduleRouter = express.Router();



// example data
const url = 'http://cferlistmgr.level3.com/EventConfQuery.asmx?WSDL';

const headers = {
  'Host': 'cferlistmgr.level3.com',
  'method': 'POST',
  'Content-Type': 'text/xml;charset=UTF-8',
  'Content-Length': 504,
  'soapAction': "http://EventConfQuery.com/getEventConferencesForDate",
};


const xml = '<?xml version="1.0" encoding="utf-8"?>'
'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
 '<soap:Body>'
 '<getEventConferencesForDate xmlns="http://EventConfQuery.com/">'
  '<callCenter>"All"</callCenter>'
  '<dtStartDateString_yymmdd>"190514"</dtStartDateString_yymmdd>'
 '</getEventConferencesForDate>'
 '</soap:Body>'
'</soap:Envelope>'

async function f(headers) {  
  try{
  const { response } = await soapRequest(url, headers, xml); // Optional timeout parameter(milliseconds)
  //const { headers, body, statusCode } = response;
  console.log(response.headers);
  console.log(response.body);
  console.log(response.statusCode);
}
catch(err) {
  // catches errors both in fetch and response.json
  console.log(err);

}
}
f();


scheduleRouter.get('/', (req, res) => {
  
    res.send("schedule works");
  });


module.exports = scheduleRouter;