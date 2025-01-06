const express = require("express")
const { blogs } = require("./model/index")
const app = express()

//alternative
// const app =require("express")()
app.set("view engine","ejs")

//if undefined error ayo form submit garda bhane yo code use garne
//yo dui ta code 
app.use(express.urlencoded({extended : true}))
// app.use(express.json)

require("./model/index")



app.get('/',(req,res)=>{
    res.render("home.ejs")
})

app.get('/addblog',(req,res)=>{
    res.render("addBlog.ejs")
})

app.post("/addblog",async(req,res)=>{
    console.log(req.body)

    // const title = req.body.title
    // const subTitle = req.body.subTitle
    // const description = req.body.description


    //mathi 3 line le gareko kura lai hamle 1 line mai object destructuring bata garna sakxam  
    const {title,subTitle,description} = req.body
    // console.log(title,subTitle,description)

    //inserting into the blogs tables
    //await rakhnu parxa since it takes time to display in the database
    await blogs.create({
        title : title,
        subTitle : subTitle,
        description : description
    })
    res.send("Blog added successfully")
    
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`NodeJS project has started at port ${PORT}`)
})