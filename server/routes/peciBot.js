const express = require('express');
const User = require ('../models/user');
const Peci = require ('../models/peci');
//const mongoose = require('mongoose');
var rp = require('request-promise');

const router = express.Router();




var queueData = {"itemData": {
    "Priority": "Normal",
    "Name": "371-Peci_Efficiency_Automation",
    "SpecificContent": {
        "payload@odata.type": "#String",
        "UserId@odata.type": "#String",
        "UserId":"callender.wayne",
        "RequesterEmail@odata.type": "#String",
        "RequesterEmail": "wayne.callender@Centurylink.com"
    }
    }};
  
  var dataString = '{"tenancyName":"Federated-Freeman", "usernameOrEMailAddress":"wcallender", "password":"Stanley24"}';
  
  var options = {
    url: 'https://ne1itctwas29.odccloud.intranet/api/Account',
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'  
    },  
    body: dataString,
    rejectUnauthorized: false,//add when working with https sites
    requestCert: false,//add when working with https sites
    agent: false//add when working with https sites
  };
  
  var peciOptions = {
    url: 'https://ne1itctwas29.odccloud.intranet/odata/Queues/UiPathODataSvc.AddQueueItem',
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
  },
    json: true,
    rejectUnauthorized: false,//add when working with https sites
    requestCert: false,//add when working with https sites
    agent: false//add when working with https sites
  };