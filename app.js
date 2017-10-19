const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const publicDest = `${__dirname}/public`;

app.use(express.static(publicDest));

app.get('/*', (req, res) => {
  res.sendFile(`${publicDest}/index.html`);
});

app.listen(port, () => {
  console.info('Server started on port...' + port);
});
