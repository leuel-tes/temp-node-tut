const path= require('path')

console.log(path.sep)
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)
//if i want the last portion of the path text.txt i may use 
const base= path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'/content','subfolder','test.txt')
console.log(absolute)