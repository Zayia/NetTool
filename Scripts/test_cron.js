console.log("[test] cron script alive, type check");
console.log("[test] persistentStore=" + (typeof $persistentStore));
console.log("[test] httpClient=" + (typeof $httpClient));
var tk = $persistentStore.read("github_token");
console.log("[test] token=" + (tk ? "set(" + tk.length + ")" : "NONE"));
var sk = $persistentStore.read("surge_api_key");
console.log("[test] apikey=" + (sk ? "set" : "NONE"));
$done();
