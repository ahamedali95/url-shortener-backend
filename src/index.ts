const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express listening on port ' + server.address().port);
});
app.get('/time', function (req: any, res: any) {
    res.send(new Date())
});