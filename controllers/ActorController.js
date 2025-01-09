const Actor = require('../models/Actor');

module.exports = class ActorController{
  
    static createActor(req,res){
        res.render('actors/addActor') 
    }

    static async showActor(req,res){
        
        //ASC -> Ascendente 
        //DESC -> Descendente 

        const actor = await Actor.findAll({order:[['code', 'ASC']], raw: true})


        res.render('actors/showActor', {actor})
    }

    // Funciton POST 

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

    static async removeActor(req,res){
        const uuid = req.body.uuid
        await Actor.destroy({where:{uuid: uuid}})

        res.redirect('/actors/showActor')
    }
    
} 