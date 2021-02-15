const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Dataship = require('./services/datahips')

app.get('/', async (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/quotes', async function(req, res, next) {
  try {
    res.json(await Dataship.getMultiple());
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});


io.on('connection', async(socket) => {
  console.log('Connected')
  const dataSet = []
  const data = await Dataship.getMultiple()

  for (const [key, value] of Object.entries(data)) {
    for (const [key, v] of Object.entries(value)) {
      dataSet.push(v)
    }
  }
  io.emit('ship data', dataSet);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});