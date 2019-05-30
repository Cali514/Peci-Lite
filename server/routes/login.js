var ldap = require('ldapjs-no-python');

//ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;

var client = ldap.createClient({
  url: 'ldaps://ldap.qintra.com:1636'
});

var opts = {
  filter: '(objectclass=user)',
  scope: 'sub',
  attributes: ['objectGUID']
};

client.bind('username', 'password', function (err) {
  client.search('ou=People,dc=mnet,dc=qintra,dc=co', opts, function (err, search) {
    search.on('searchEntry', function (entry) {
      var user = entry.object;
      console.log(user.objectGUID);
    });
  });
});