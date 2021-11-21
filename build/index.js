import express from 'express';
const app = express();
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Express listening on port ' + process.env.PORT || 3000);
});
app.get('/time', function (req, res) {
    res.send(new Date());
});
