const express = require('express')
const router = express.Router()

const ActorController = require('../controllers/ActorController')

router.get('/addActor', ActorController.createActor)
router.get('/showActor', ActorController.showActor)
router.get('/editActor/:uuid', ActorController.editActor)
router.get('/showClient', ActorController.showClient)
router.get('/showSupplier', ActorController.showSupplier)
router.post('/add-actor', ActorController.addActor)
router.post('/removeActor', ActorController.removeActor)
router.post('/updateActor', ActorController.updateActor)

module.exports = router;