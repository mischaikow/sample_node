import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello universe!');
})

const server = app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

export default server
