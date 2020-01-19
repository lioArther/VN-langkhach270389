var obj= $response.body;
var proxy= [];
obj= obj.split("\n");
for (var i = 0; i < obj.length -1; i++) {
proxy[i]= "Proxy_" +i + " = socks5, " + obj[i];
}
//console.log(proxy);
$done({body: proxy.toString().replace(/,Proxy/g, "Proxy").replace(/:/g, ", ")});
