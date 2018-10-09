const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const ControllerRoute = require('./controller/controller');


app.use('/',express.static(__dirname + '/view/SignIn'));
app.use('/app',express.static(__dirname + '/view/mainPage'));
app.use('/controller', ControllerRoute);

//signIn form route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/SignIn/signin.html');

});
//route of the form that the data is displayed
app.get('/app/data', function (req, res) {
    res.sendFile(__dirname + '/view/mainPage/index.html');
});

//route to the call back form where the token URL is retreived
app.get('/call-Back-To-Signin', function (req, res) {
    res.sendFile(__dirname + '/view/SignIn/callBackToSignin.html')
});

//run the server on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
