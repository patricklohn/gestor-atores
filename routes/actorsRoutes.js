const express = require('express')
const router = express.Router()

const ActorController = require('../controllers/ActorController')

router.get('/createActors', ActorController.createActor)
router.get('/showActor', ActorController.showActor)
router.post('/add-actor', ActorController.addActor)
router.post('/removeActor', ActorController.removeActor)

module.exports = router;