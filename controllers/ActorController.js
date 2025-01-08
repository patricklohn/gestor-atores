const Actor = require('../models/Actor');

module.exports = class ActorController{
  
    static createActor(req,res){
        res.render('actors/create')
    }

    static showClient(req,res){
        res.render('actors/showClient')
    }

    static async addActor(req,res){

        let client = req.body.client;
        let supplier = req.body.supplier;

        if(client === 'on'){
            client = true
        }else{
            client = false
        }

        if(supplier === 'on'){
            supplier = true
        }else{
            supplier = false
        }


        const actor = {
            name: req.body.name,
            client,
            supplier,
            contact: req.body.contact,
            contact_number: req.body.contact_number, 
            email: req.body.email,
        }

        await Actor.create(actor)

        res.redirect('/')

    }
    
} 