const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 9000;
const cors = require('cors');
//const Routes=require('./routes.js')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/start',(function ( req,res) {
  const todo = {
          bank_name: 'bank',
          ir: 'ir',
          todo_completed: 'completed'}
res.json(todo)
}));
//app.use('/todos',Routes);


app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

