const express = require('express');
const fs = require('fs');




const scheduleRouter = express.Router();



// example data
const url = 'http://cferlistmgr.level3.com/EventConfQuery.asmx?WSDL';

const headers = {
  'Host': 'cferlistmgr.level3.com',
  'method': 'POST',
  'Content-Type': 'text/xml; charset=UTF-8',
  'Content-Length': 743,
  'soapAction': 'http://EventConfQuery.com/getEventConferencesForDate'
};

const xml = fs.readFileSync('./server/routes/mrs_byDate.txt');


/*const xml = '<?xml version="1.0" encoding="utf-8"?>'
'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
 '<soap:Body>'
 '<getEventConferencesForDate xmlns="http://EventConfQuery.com/">'
  '<callCenter>"All"</callCenter>'
  '<dtStartDateString_yymmdd>"190514"</dtStartDateString_yymmdd>'
 '</getEventConferencesForDate>'
 '</soap:Body>'
'</soap:Envelope>'
*/


scheduleRouter.get('/', (req, res) => {
  
    res.send("schedule works");
  });


module.exports = scheduleRouter;