const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')
console.log(first, second)

writeFileSync ('./content/result-sync.txt','here is the result and the update of :',{flag:'a'}) 
//here is file system module ....reading and writing a file 

const {readFile, writeFile} = require('fs')
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first= result;
    readFile ('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second= result
    })
    writeFile('./content/result-async.txt',
    `here is the result ${first}, ${second}`,
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    }
    )
})
