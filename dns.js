const dns = require('dns');

dns.lookup('americanexpress.com', (err, address)=>{
  console.log(address)
})

dns.resolve4('americanexpress.com', (err, address)=>{
  console.log(address)
})

dns.resolve('americanexpress.com','A', (err, address)=>{
  console.log(address)
})

dns.resolve('americanexpress.com','MX', (err, address)=>{
  console.log(address)
})

dns.resolveMx('americanexpress.com', (err, address)=>{
  console.log(address)
})

dns.reverse('23.222.166.16', (err, hostname)=>{
  console.log('hostname ',hostname)
});