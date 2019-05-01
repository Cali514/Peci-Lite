var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Peci',
  description: 'Peci app as a sevice',
  script: 'C:\\Users\\callender.wayne\\Desktop\\peciv4\\peci\server.js>'
  
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();