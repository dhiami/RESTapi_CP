const express=require('express');
const app=express()

const connectDB=require('./DB/connectDB')
require('dotenv').config()
connectDB()

  app.use(express.json())
  app.use('/api/Contacts',require('./routes/users')) 

const port =5000
app.listen(port,(err)=>{
try {
    console.log(`the server is running on${port}... `)
} catch (err) {
    console.log(err);
}
})