# DNS
## dns.lookup
1. DNS lookup not necessarily make network call to get the ip address.
2. Instead it uses underline operating system api to perform the name resolution.
3. It means, it will be using `libuv` threads.
4. This is very special about `dns.lookup`
5. All other methods on `dns` uses `network` directly and does not use `libuv` thread.

## dns.resolve
1. `dns.resolve4` is alternative of `dns.lookup` which returns array of ip address.
2. `dns.resolve`
3. `dns.resolveMx`

## dns.reverse
It converts IP back to the hostname.
```
dns.reverse('172.217.14.110', (err, hostname)=>{
  console.log(hostname)
});
```

