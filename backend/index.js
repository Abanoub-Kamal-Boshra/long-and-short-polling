const express = require('express')
const app = express()
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json())
app.use(cors());

const messages = []
const subscribers = {}

app.post('/messages', (req, res) =>{
  const {message} = req.body;
  console.log(message);
  messages.push(message);
  res.send({sucess: true});
})

app.get('/messages/:messagesLength',  (req, res) => {
  const {messagesLength} = req.params;
  console.log("length recieved : ",messagesLength);
  console.log("all length : ",messages.length)
  res.json(messages.slice(messagesLength));
})


app.get('/longMessages',  (req, res) => {
  const id = Math.ceil(Math.random()*10000);
  subscribers[id] = res;
})


app.post('/longMessages', (req, res) =>{
  const {message} = req.body;
  messages.push(message)

  Object.entries(subscribers).forEach(([id, response]) =>{
    response.json(messages);
    delete subscribers[id];
  });
  res.status(204);
})



app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});