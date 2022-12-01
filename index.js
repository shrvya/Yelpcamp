const express=require('express')
const app=express();
const path=require('path');
const database=require('./database');
const Product=require('./models/product')
const methodOverride=require('method-override')
app.use(methodOverride('_method'))
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
app.post('/products',async(req,res)=>{
const newProduct= new Product(req.body) ;
await newProduct.save();
res.redirect(`/products/${newProduct._id}`)
})
app.get('/products/:id',async(req,res)=>{
    const {id}=req.params
    const result=await Product.findById(id)
  
     res.render('details.ejs',{result});
 })
 app.get('/products/:id/edit',async(req,res)=>{
    const {id}=req.params
    const result=await Product.findById(id)
     res.render('edit.ejs',{result});
 })
 app.put('/products/:id',async(req,res)=>{
    const {id}=req.params
    const result=await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${result._id}`)
 })
 app.delete('/products/:id',async(req,res)=>{
    const {id}=req.params
    console.log(req.params)
     const result=await Product.findByIdAndDelete(id)
     res.redirect('/products')
 })

 
app.listen(3000,()=>{
    
    console.log("listening to port 3000")
})