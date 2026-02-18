// Quick check: can this machine resolve MongoDB Atlas hostnames?
const dns = require("dns");
const host = "cluster0.f3gstl3.mongodb.net";

dns.lookup(host, (err, address) => {
  if (err) {
    console.error("DNS lookup failed for", host);
    console.error("Error:", err.code, err.message);
    console.error("\nYour network cannot resolve Atlas hostnames. Try:");
    console.error("  1. Use another network (e.g. mobile hotspot)");
    console.error("  2. Change DNS to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)");
    process.exit(1);
  }
  console.log("OK: Resolved", host, "->", address);
  process.exit(0);
});
