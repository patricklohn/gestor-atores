const Actor = require('../models/Actor');

module.exports = class ActorController{
  
    static createActor(req,res){
        res.render('actors/create')
    }

    static showClient(req,res){
        res.render('actors/showClient')
    }
    
} 