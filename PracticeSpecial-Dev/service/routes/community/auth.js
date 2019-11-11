var express = require('express');
var router = express.Router();

const JssdkController = require('../../controller/community/JssdkController')
const AuthController  = require('../../controller/community/AuthController')

router.get('/jssdk',JssdkController)
router.get('/auth',AuthController.auth)
router.post('/auth', AuthController.reply)

module.exports = router