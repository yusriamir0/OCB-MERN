const os = require("os");
console.log(os);

// ambil data pasal OS operating system
console.log(os.type());

// platform
console.log(os.platform());

// architecture
console.log(os.arch());

// total memory usage
console.log(os.totalmem());

// total free memory usage
console.log(os.freemem());

// uptime()
console.log(os.uptime());
console.log(
    `The Node.js process has been running for ${process.uptime()} seconds.`
);

// userInfo
console.log(os.userInfo());
