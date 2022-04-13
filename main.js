const express=require('express')
const path=require('path');
var cron = require('node-cron');

const app = express()
const router= express.Router()


app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')



router.get('/home', function (req, res) {
  res.render('home')
})
router.get('/services', function (req, res) {
    res.render('services')
  })
router.get('/contact', function (req, res) {
    res.render('contact')
  })


app.use('/',router)




cron.schedule('* * * * Monday-Friday', function(){

    app.listen(3000,()=>console.log('Serveur en marche'))    


}); 
