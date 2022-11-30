const express=require('express')
const app=express();
const path=require('path');
const database=require('./database');
const Product=require('./models/product')
app.use(express.urlencoded({ extended: true }))
//  app.set('views',path.join(__filename,'views'));
app.set('view engine','ejs')

app.get('/products',async(req,res)=>{
   const result=await Product.find({})
   
   res.render('index.ejs',{result});
})
app.get('/products/newprod',(req,res)=>{
    res.render('new.ejs')
    
})
app.post('/products',(req,res)=>{
console.log(req.body);

})
app.get('/products/:id',async(req,res)=>{
    const {id}=req.params
    const result=await Product.findById(id)
  
     res.render('details.ejs',{result});
 })

 
app.listen(3000,()=>{
    
    console.log("listening to port 3000")
})