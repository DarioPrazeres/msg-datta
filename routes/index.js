var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
router.post('/new', (req, res)=>{
  //const messageUpdate = {text: req.body.messageNew, user: req.body.author, added: new Date()};
  messages.unshift({text: req.body.messageNew, user: req.body.author, added: new Date()});
  console.log(messages);
  res.redirect('/');
});

module.exports = router;
