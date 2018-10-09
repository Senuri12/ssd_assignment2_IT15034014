const https = require('https');
const express = require('express');
const router = express.Router();
const isFetch = require('isomorphic-fetch');
let sendData = null;
let token = null;
router.post('/tokenAccessing', (req, res) => {
    const URL = 'https://www.linkedin.com/oauth/v2/accessToken';
    const otherParam = {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            // "Access-Control-Allow-Origin": "*"
        },
        //
        body: `grant_type=authorization_code&code=${req.body.code}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcall-Back-To-Signin&client_id=81l2pjudy6ex02&client_secret=1znM0QVqBte7vJPe`,
        method: "POST",
        mode: "no-cors"
    };

    isFetch(URL, otherParam)
        .then(data => {return data.json()})
        .then(response => {
            console.log('res: ', response);
            console.log('token_access: ', response.access_token);
            token = response.access_token;
            res.send(true);
        })
        .catch(error => {console.log('error: ', error);})
});

router.post('/passData',(req,res) =>{
    res.json(sendData);
})

router.get('/asd', (req, res) =>{
    const URL = 'https://api.linkedin.com/v1/people/~:(email-address,id,first-name,last-name,industry,picture-url,public-profile-url,headline)?format=json';
    const otherParam = {
        headers: {
            "authorization": `Bearer ${token}`,
            // "Access-Control-Allow-Origin": "*"
        },
        method: "GET",
        // mode: "no-cors"
    };
    isFetch(URL, otherParam)
        .then(data => {return data.json()})
        .then(response => {
            console.log('res: ', response);
            res.json(response);
            sendData = response;
            console.log(sendData);
        })
        .catch(error => {console.log('error: ', error);})
});
module.exports = router;