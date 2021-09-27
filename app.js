//modules
//common JS, every file is a module (by default)
// Modules, Encapsulated Code(only share the minimum)

// const names = require('./4-firstmodule')
// const sayHi= require('./5-secondmodule')
// const data = require('./6-alt-flavour')
// // sayHi('susan')
// // sayHi(names.john)
// // sayHi(names.leuel)
// // console.log(data)
// require('./7-mind-grenade')

//local dependency -use it only in this particular project 
//is more useful than global dependency 
//npm i<pakagename>


const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items)
console.log(newItems);