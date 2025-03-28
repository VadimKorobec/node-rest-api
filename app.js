const express = require("express");
const cors = require('cors') 
const app = express();

const port = 8080;

app.use(express.json())
app.use(cors())

const postsRouter = require('./routers/posts')

app.use('/api/posts', postsRouter )


app.listen(port, () => {
  console.log(`Example app listining on port ${port}`);
});
