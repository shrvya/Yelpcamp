const mongoose=require("mongoose")
const Product=require('./models/product')

mongoose.connect('mongodb://localhost:27017/yelpCamp',{useNewUrlParser:true,useUnifiedTopology:true}).then(
    console.log("connected")
).catch("error")

// const p1=[{
//     name:'Dragon Fruit',
//     price:50,
//     category:'fruits'
// },
// {
//     name:'Jack Fruit',
//     price:30,
//     category:'fruits'
// },
// {
//     name:'butter Fruit',
//     price:60,
//     category:'fruits'
// },
// {
//     name:'tomato',
//     price:20,
//     category:'vegetables'
// },
// {
//     name:'milk',
//     price:20,
//     category:'dairy'
// }
// ]
// Product.insertMany(p1).then(p=>{
//     console.log(p)
// }).catch(err=>console.log(err))

// p1.save().then(p=>{
//     console.log(p)
// }).catch(err=>console.log(err))