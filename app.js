const express = require("express")
const app = express()
//alternative
// const app =require("express")()



app.get('/',(req,res)=>{
    res.render("home.ejs")
})


app.get('/about',(req,res)=>{
    res.render("about.ejs")
})




const PORT = 3000
app.listen(PORT,()=>{
    console.log(`NodeJS project has started at port ${PORT}`)
})