
const express = require('express');
var path = require('path');  

const port = 4300;
const app = express();

//Set the base path to the angular dist folder
app.use(express.static(path.join(__dirname, 'nr-fom-public/dist')));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'nr-fom-public/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

