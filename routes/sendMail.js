const express = require("express");
const router = express();

const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

const sendMailController = require("../controllers/sendMail");
router.post('/mail',sendMailController.sendMail);


module.exports = router;