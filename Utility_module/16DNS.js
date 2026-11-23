const dns=require('dns')

console.log(dns.getServers())

dns.lookup('www.google.com',(err, address)=>{
    if (err){
        console.log("lookup error: " + err.code)
    }
    else{
        console.log("lookup success: " + address)
    }
});

dns.resolve4('www.google.com',(err, addresses)=>{
    if (err){
        console.log("resolve error: " + err.code)
    }
    else{
        console.log("addresses: " + addresses)
    }
});