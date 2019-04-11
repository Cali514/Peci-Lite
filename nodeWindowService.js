var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Peci',
  description: 'Peci app as a sevice',
  script: 'C:\\Users\\callender.wayne\\Desktop\\peciv4\\peci>'
  
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();