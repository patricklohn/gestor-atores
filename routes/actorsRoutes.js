const express = require('express')
const router = express.Router()

const ActorController = require('../controllers/ActorController')

router.get('/createActors', ActorController.createActor)
router.get('/showClient', ActorController.showClient)

module.exports = router;