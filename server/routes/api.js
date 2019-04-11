const express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var rp = require('request-promise');

const router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

var dataString = '{ "tenancyName":"Federated-Freeman", "usernameOrEMailAddress":"wcallender", "password":"Stanley24"}';

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




/* GET api listing. */
router.get('/', (req, res) => {
  res.send("api works");
});

router.post('/peci', (req, res) => {
  var out= req.body;  
  out = JSON.stringify(out);
  //out = out.replace(/"/g, '\\\"');
  console.log(out);
  rp(options)
    .then(function(body){
    data = JSON.parse(body);
    key = data.result;
    console.log(key);
    peciOptions.headers.Authorization = `Bearer ${key}`;
    queueData.itemData.SpecificContent.payload = out
    peciOptions.body = queueData;
    //console.log(peciOptions);
    })
    .then(function(){      
      rp(peciOptions)
      .then(function(data){
        console.log("success: Created at " + data.CreationTime +" Transaction #: " +data.Key);    
      })
      .catch(function(err){
        console.log(err);
        res.send({error: err})
      })
    })    
    .catch(function(err){
      console.log(err);
      res.send({error: err})
    })    
  
  res.send({hi:"ok"});
});

  


module.exports = router;
