const os = require('os')
// info about the current user
const user = os.userInfo()
console.log(user);

const time= os.uptime()
console.log('the system uptime is ' , time)

const currentOs= {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOs);

