const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const ControllerRoute = require('./controller/controller');


app.use('/',express.static(__dirname + '/view/SignIn'));
app.use('/app',express.static(__dirname + '/view/mainPage'));
app.use('/controller', ControllerRoute);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/SignIn/signin.html');
    // res.sendFile(__dirname + '/view/DataPage/data.html')

});
app.get('/app/data', function (req, res) {
    res.sendFile(__dirname + '/view/mainPage/index.html');
    // res.sendFile(__dirname + '/view/DataPage/data.html')
});
app.get('/call-Back-To-Signin', function (req, res) {
    // res.send('Hello World!')
    res.sendFile(__dirname + '/view/SignIn/callBackToSignin.html')
});
// app.get('/app/data', function (req, res) {
//     res.sendFile(__dirname + '/view/DataPage/data.html')
// });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
